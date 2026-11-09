import jwt from "jsonwebtoken";
import User from "../models/User.js";

const signToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION || "30d",
    });

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body || {};
        const normalizedEmail = email?.trim().toLowerCase();

        if (!name?.trim() || !normalizedEmail || !password) {
            return res
                .status(400)
                .json({ message: "Name, email and password are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const exists = await User.findOne({ email: normalizedEmail });
        if (exists) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password,
            avatar: name.trim().charAt(0).toUpperCase(),
        });
        const token = signToken(user._id);
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body ;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = signToken(user._id);
        res.json({ user, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const me = (req, res) => {
    res.json({ user: req.user });
};

export const updateProfile = async (req, res) => {
    try {
        const { name, email, avatar, morningMotivation } = req.body || {};
        const user = await User.findById(req.user._id);
        if (name !== undefined) {
            user.name = name;
            user.avatar = name.trim().charAt(0).toUpperCase();
        }
        if (morningMotivation !== undefined) 
            user.morningMotivation = morningMotivation;
        await user.save();
        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};