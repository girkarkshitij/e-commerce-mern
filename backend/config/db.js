import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`######### Mongodb connected to ${conn.connection.host} ###########`);
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
