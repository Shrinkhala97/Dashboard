const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Signup controller for admin
exports.signupAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin user
    const newUser = new User({ username, password: hashedPassword, role: 'admin' });
    await newUser.save();

    res.status(201).json({ message: 'Admin user created successfully' });
  } catch (error) {
    console.error('Error signing up admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Signup controller for regular user
exports.signupUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new regular user
    const newUser = new User({ username, password: hashedPassword, role: 'user' });
    await newUser.save();

    res.status(201).json({ message: 'Regular user created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
