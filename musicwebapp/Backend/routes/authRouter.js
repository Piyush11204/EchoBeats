// routes/authRouter.js
const express = require('express');
const { signUp, login } = require('../controllers/authController');

const router = express.Router();

// Define the signup route
router.post('/signup', signUp);

// Define the login route (if not already defined)
router.post('/login', login);

module.exports = router;
