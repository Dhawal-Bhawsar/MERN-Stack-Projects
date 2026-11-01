const Booking = require("../models/Bookings");
const Event = require("../models/Event");
const OTP = require("../models/OTP");
const {sendOTPEmail, sendBookingEmail} = require("../utils/email");

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

exports.sendBookingOTP = async (req, res) => {
    const otp = generateOTP();
    await OTP.findOneAndDelete({ email: req.user.email, action: 'event_booking' });
    await OTP.create({ email: req.user.email, otp, action: 'event_booking' });
    await sendOTPEmail(req.user.email, otp, 'event_booking');
    res.status(200).json({ message: "OTP sent to your email" });
}

exports.bookEvent = async (req, res) => {
    const { eventId, otp } = req.body;

    const otpRecord = await OTP.findOne({ email: req.user.email, action: 'event_booking' });
    if (!otpRecord || otpRecord.otp !== otp) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
    }
    const event = await Event.findById(eventId);
    
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    if (event.totalSeats <= 0) {
        return res.status(400).json({ message: "No seats available" });
    }

    const existingBooking = await Booking.findOne({ userId: req.user._id, eventId });
    if (existingBooking) {
        return res.status(400).json({ message: "You have already booked this event" });
    }

    const booking = await Booking.create({
        userId: req.user._id,
        eventId,
        status: 'pending',
        paymentStatus: 'non_paid',
        amount: event.ticketPrice
    });

    await OTP.deleteMany({ email: req.user.email, action: 'event_booking' }); // Remove all OTPs for this email
    res.status(201).json({ message: "Booking created successfully", bookingId: booking._id });
}

exports.confirmBooking = async (req, res) => {
    const paymentStatus = req.body.paymentStatus; // 'paid' or 'non_paid'
    if (!['paid', 'non_paid'].includes(paymentStatus)) {
        return res.status(400).json({ message: "Invalid payment status" });
    }

    const booking = await Booking.findById(req.params.id).populate('eventId userId');
    if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.status === 'confirmed') {
        return res.status(400).json({ message: "Booking is already confirmed" });
    }
    const event = await Event.findById(booking.eventId);
    if (event.totalSeats <= 0) {
        return res.status(400).json({ message: "No seats available" });
    }

    booking.status = 'confirmed';
    booking.paymentStatus = paymentStatus;
    
    await booking.save();
    event.totalSeats -= 1;
    await event.save();

    //admin confirmed booking, send email to user
    await sendBookingEmail(booking.userId.email, booking.userId.name, event.title);

    res.json({message: 'Booking confirmed successfully'});
}

exports.getMyBookings = async (req, res) => {
    const bookings = await Booking.find({ userId: req.user._id }).populate('eventId');
    res.json(bookings);
}

exports.getAllBookings = async (req, res) => {
    const bookings = await Booking.find()
        .populate('eventId')
        .populate('userId', '-password')
        .sort({ createdAt: -1 });
    res.json(bookings);
}

exports.cancelBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(403).json({ message: "You are not authorized to cancel this booking" });
    }
    const wasConfirmed = booking.status === 'confirmed';

    if (wasConfirmed) {
        const event = await Event.findById(booking.eventId);
        if (event) {
            event.totalSeats += 1;
            await event.save();
        }
    }

    await Booking.deleteOne({ _id: booking._id });
    res.json({ message: "Booking cancelled" });

}
