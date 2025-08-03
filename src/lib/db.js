import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_EVENT_URI;

if (!MONGODB_URI) throw new Error("MongoDB URI not set");

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
