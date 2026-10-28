import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide your first name"],
        minlength: [3, "First name must be at least 3 characters long"],
        maxlength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide your last name"],
        minlength: [3, "Last name must be at least 3 characters long"],
        maxlength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        validate: [validator.isEmail, "Please provide a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [15, "Phone number cannot exceed 15 digits"]
    },
    time: {
        type: String,
        required: [true, "Please provide a time for the reservation"]
    },
    date: {
        type: String,
        required: [true, "Please provide a date for the reservation"]
    }
})

export const Reservation = mongoose.model("Reservation", reservationSchema);


