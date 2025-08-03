import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  description: String,
  location: String,
  date: String,
  artistImage: String,
  eventImage: String,
  organizerEmail: String, // Logged-in user's email
  participants: [String], // Array of user emails or IDs
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.models.Event || mongoose.model("Event", eventSchema);
