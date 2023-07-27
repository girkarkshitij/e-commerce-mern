import express from 'express'
const router = express.Router();
import Product from '../models/productModel.js';

// /api/products is defined in server.js

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).send('Product not found');
    }
    return res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }


  res.status(404).json({message: 'Product not found'})
});

export default router;
