import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Event from "@/models/Event";

export async function POST(req) {
  const form = await req.formData();
  await connectToDatabase();

  const uploadToCloudinary = async (file) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
    const uploaded = await cloudinary.uploader.upload(base64, {
      folder: "eventnexa",
    });
    return uploaded.secure_url;
  };

  try {
    const artistImage = await uploadToCloudinary(form.get("artistImage"));
    const eventImage = await uploadToCloudinary(form.get("eventImage"));

    const event = await Event.create({
      title: form.get("title"),
      artist: form.get("artist"),
      category: form.get("category"),
      description: form.get("description"),
      location: form.get("location"),
      date: form.get("date"),
      artistImage,
      eventImage,
    });

    // Emit to socket clients
    global.io?.emit("new_event", event);

    return NextResponse.json(event, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

export async function GET() {
  await connectToDatabase();
  const events = await Event.find().sort({ date: -1 });
  return NextResponse.json(events);
}
