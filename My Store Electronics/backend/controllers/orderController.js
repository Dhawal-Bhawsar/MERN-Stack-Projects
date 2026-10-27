import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/product.js";

export const placeOrder = async (req, res) => {
    try {
        const { userId, address} = req.body;

        //Get Cart
        const cart = await Cart.findOne({ userId }).populate("items.productId");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        //Prepare order items
        const orderItems = cart.items.map(item => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price
        }));

        //Calculate total amount
        const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        //Deduct stock
        for (let item of cart.items) {
            await Product.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } });      
        }

        //Create Order
        const newOrder = await Order.create({
            userId,
            items: orderItems,
            address,
            totalAmount,
            paymentMethod: "COD"
        });

        //Clear Cart
        await Cart.findOneAndUpdate({ userId }, { items: [] });

        res.status(201).json({ message: "Order placed successfully", order: newOrder._id });



    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}