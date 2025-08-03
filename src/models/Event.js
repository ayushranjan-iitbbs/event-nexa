import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  description: String,
  location: String,
  date: Date,
  artistImage: String,
  eventImage: String,
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
