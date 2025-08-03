import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_EVENT_URI;

  if (!uri) {
    throw new Error("MongoDB URI not set");
  }

  if (isConnected) return;

  try {
    mongoose.set("bufferCommands", false);
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri); // cleaner, no deprecated options
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
