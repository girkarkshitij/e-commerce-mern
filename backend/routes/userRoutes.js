import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

// /api/users is defined in server.js

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
router.post("/", async (req, res) => {
  res.send("register user");
});

// @desc    Logout user / clear token
// @route   POST /api/users/logout
// @access  Private
router.post("/logout", async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get("/profile", async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
router.put("/profile", async (req, res) => {
  res.send("update user profile");
});

export default router;
