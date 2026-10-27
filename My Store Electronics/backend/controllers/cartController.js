import Cart from '../models/Cart.js';
import mongoose from 'mongoose';

const isValidObjectId = (value) => mongoose.isValidObjectId(value);

const normalizeCart = (cart) => {
    if (!cart) {
        return { userId: null, items: [] };
    }

    cart.items = (cart.items ?? []).filter((item) => item && item.productId);
    return cart;
};

//Add item to cart
export const addToCart = async (req, res) => {
    try{
        const { userId, productId } = req.body;

        if (!isValidObjectId(userId) || !isValidObjectId(productId)) {
            return res.status(400).json({ message: "Valid userId and productId are required" });
        }

        let cart = await Cart.findOne({ userId });

        if(!cart){
            cart = new Cart({ userId, items: [
                { productId, quantity: 1 }
            ] });
        } else {
            cart.items = cart.items ?? [];
            const item = cart.items.find((i) => i && i.productId && i.productId.toString() === productId);
            if (item) {
                item.quantity += 1;
            } else {
                cart.items.push({ productId, quantity: 1 });
            }
        }

        await cart.save();

        res.json({
            message: "Item added to cart successfully",
            cart
        });

    }catch(err){
        console.error(`Add to cart failed: ${err.message}`);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

//Remove item from cart
export const removeItem = async (req, res) => {
    try{
        const { userId, productId } = req.body;

        if (!isValidObjectId(userId) || !isValidObjectId(productId)) {
            return res.status(400).json({ message: "Valid userId and productId are required" });
        }

        const cart = await Cart.findOne({ userId });
        if(!cart){
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = (cart.items ?? []).filter((item) => item && item.productId && item.productId.toString() !== productId);
        
        await cart.save();
        
        res.json({
            message: "Item removed from cart successfully",
            cart
        });
    }catch(err){
        console.error(`Remove from cart failed: ${err.message}`);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// Update item quantity in cart
export const updateQuantity = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const quantity = Number(req.body.quantity);

        if (!isValidObjectId(userId) || !isValidObjectId(productId)) {
            return res.status(400).json({ message: "Valid userId and productId are required" });
        }

        if (!Number.isInteger(quantity) || quantity < 1) {
            return res.status(400).json({ message: "Quantity must be a positive integer" });
        }

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items ?? [];
        const item = cart.items.find((i) => i && i.productId && i.productId.toString() === productId);
        
        if (!item) {
            return res.status(404).json({ message: "Item not found in cart" });
        }
        
        item.quantity = quantity;
        
        await cart.save();
        
        res.json({
            message: "Item quantity updated successfully",
            cart
        });

    }catch(err){
        console.error(`Update cart quantity failed: ${err.message}`);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// Get cart by user ID

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!isValidObjectId(userId)) {
            return res.status(400).json({ message: "A valid userId is required" });
        }

        const cart = await Cart.findOne({ userId }).populate("items.productId");
        const normalizedCart = normalizeCart(cart);

        if (cart && cart.items && cart.items.length !== normalizedCart.items.length) {
            cart.items = normalizedCart.items;
            await cart.save();
        }

        res.json({ cart: normalizedCart });

    }catch(err){
        console.error(`Get cart failed: ${err.message}`);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};