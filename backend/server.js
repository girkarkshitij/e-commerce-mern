import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is now running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((prod) => prod._id === Number(req.params.id));
  res.json(product);
})

app.listen(PORT, () => {
  console.log('Backend is listening on' + PORT);
});
