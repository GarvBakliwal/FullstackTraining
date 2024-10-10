const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User sign up controller
exports.signUp = async (req, res, next) => {
  try {
    const { email } = req.body;
    const isExistingUser = await User.findOne({ email });

    // Check if user already exists
    if (isExistingUser) {
      throw new Error('User already exists');
    }

    // Create the user
    const user = await User.create(req.body);
    if (user) {
      return res.status(201).json({
        message: 'User registered successfully',
        data: user,
      });
    }
  } catch (err) {
    next(err);
  }
};

// User login controller
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      throw new Error("User is not registered");
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error("Password does not match, please try again");
    }

    // Generate JWT and return it
    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret', // Use env variable
      { expiresIn: '30d' }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Google OAuth authentication controller
exports.googleAuth = async (req, res, next) => {
  try {
    // Ensure req.user exists
    if (!req.user) {
      throw new Error('User information is missing from Google authentication');
    }

    const user = req.user;

    // Generate JWT for the authenticated user
    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret', // Use env variable
      { expiresIn: '30d' }
    );

    // Redirect with the token and user details in the query string
    res.redirect(`${process.env.REDIRECT_URL}?token=${token}&role=${user.role}&id=${user._id}`);
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};