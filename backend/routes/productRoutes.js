import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

// /api/products is defined in server.js

router.get("/", async (req, res) => {
  let products = await Product.find({});

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "Product not found" });
    }
    return res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }

  res.status(404).json({ msg: "Product not found" });
});

export default router;
