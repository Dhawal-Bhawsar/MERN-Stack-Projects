const express = require("express");
const router = express.Router();
const { registerUser, loginUser, verifyOTP } = require("../controllers/authcontroller.js");

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Verify OTP route
router.post("/verify-otp", verifyOTP);

module.exports = router;

