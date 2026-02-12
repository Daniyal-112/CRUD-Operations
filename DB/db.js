import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`MongoDB Error ${error}`);
  }
};

export default connectDB;