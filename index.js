console.log("Hello! It is working!");

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => {
    console.error("Database connection error:", error);
    console.error("Error details:", error.message);
  });