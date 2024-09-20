const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Your User model

// Environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID_KEY;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET_KEY;

// Local Strategy (Email/Password)
passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: email,
            avatar: profile.photos[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// User serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
