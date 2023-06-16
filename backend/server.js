import express from 'express';
import products from './data/products.js';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Server is now running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log('Backend is listening on' + PORT);
});
