const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate a JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

// Sign Up Function
exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const user = await User.create({ name, email, password: hashedPassword });

        // Generate JWT token
        const token = generateToken(user);

        // Store session data
        req.session.userId = user._id;
        
        // Respond with user and token
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login Function
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = generateToken(user);

        // Store session data
        req.session.userId = user._id;

        // Respond with user and token
        res.json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
