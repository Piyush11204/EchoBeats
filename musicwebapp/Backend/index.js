require('dotenv').config();
const express = require("express");
const connectDB = require('./DB/db');
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');
const authRoutes = require('./routes/authRouter');
const localAuthRoute = require("./routes/auth");

require("./routes/passport"); // Google & Local Strategy

const app = express();

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000, // 24 hours
    },
  })
);

// Database connection
connectDB();

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS middleware
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// Routes
app.use("/auth", localAuthRoute); // Handles email/password login, registration
app.use('/api/auth', authRoutes); // Handles Google authentication

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen to the port
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}!`);
});