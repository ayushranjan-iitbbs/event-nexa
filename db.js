import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_EVENT_URI;

  if (!uri) {
    throw new Error("MongoDB URI not set");
  }

  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
