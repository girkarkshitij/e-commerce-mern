import express from "express";
const router = express.Router();
import Order from "../models/orderModel.js";
import { protect } from "../middleware/authMiddleware.js";

// /api/orders is defined in server.js

// @desc    Add order items
// @route   POST /api/orders
// @access  Private
router.post("/", protect, async (req, res) => {
  res.send("add order items");
});

// @desc    Get logged in user orders
// @route   GET /api/orders/mine
// @access  Private
router.get("/mine", protect, async (req, res) => {
  res.send("get my orders");
});

// @desc    Update order as paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.put("/:id/pay", protect, async (req, res) => {
  res.send("update order as paid");
});

export default router;
