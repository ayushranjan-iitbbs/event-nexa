import { connectDB } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  await connectDB();
  const Event = (await import("@/models/Event")).default;

  const events = await Event.find().sort({ date: 1 });
  return Response.json(events);
}

export async function POST(req) {
  try {
    await connectDB();
    const Event = (await import("@/models/Event")).default;

    const formData = await req.formData();
    const fields = ["title", "artist", "category", "description", "location", "date"];
    const data = {};

    for (const field of fields) {
      data[field] = formData.get(field);
    }

    // Upload artist image
    const artistImageFile = formData.get("artistImage");
    const artistBuffer = await artistImageFile.arrayBuffer();
    const artistBase64 = Buffer.from(artistBuffer).toString("base64");

    const artistRes = await cloudinary.uploader.upload(
      `data:${artistImageFile.type};base64,${artistBase64}`,
      { folder: "eventnexa/artists" }
    );

    // Upload event image
    const eventImageFile = formData.get("eventImage");
    const eventBuffer = await eventImageFile.arrayBuffer();
    const eventBase64 = Buffer.from(eventBuffer).toString("base64");

    const eventRes = await cloudinary.uploader.upload(
      `data:${eventImageFile.type};base64,${eventBase64}`,
      { folder: "eventnexa/events" }
    );

    data.artistImage = artistRes.secure_url;
    data.eventImage = eventRes.secure_url;

    const newEvent = await Event.create(data);
    return Response.json(newEvent);
  } catch (err) {
    console.error("Event creation failed:", err);
    return new Response("Event creation failed", { status: 500 });
  }
}
