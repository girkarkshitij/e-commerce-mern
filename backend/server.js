import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is now running...');
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log('Backend is listening on' + PORT);
});
