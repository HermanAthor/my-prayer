import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI;

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongodbUri!);
      console.log("database connected");
    }
  } catch (error) {
    console.log(error);
  }
};
