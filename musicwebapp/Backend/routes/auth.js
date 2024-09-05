const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});

// Login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ success: true, message: "Login successful", user: req.user });
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error during logout" });
    }
    res.status(200).json({ success: true, message: "Logout successful" });
  });
});

module.exports = router;
