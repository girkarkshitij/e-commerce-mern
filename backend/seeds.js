// script to import sample data from backend/data to Mongodb atlas

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import users from "./data/users.js";
import products from "./data/products.js";
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {

  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const sampleUsers = await User.insertMany(users);

    const adminUser = sampleUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {...product, user: adminUser};
    });

    await Product.insertMany(sampleProducts);
    console.log("✅✅✅✅✅✅ Database imported ✅✅✅✅✅✅");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("❌❌❌❌❌❌ Database deleted ❌❌❌❌❌❌");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

