import { connectDB } from "@/lib/db";
import Event from "@/models/Event";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { eventId } = await req.json();
  const email = session.user.email;

  await Event.findByIdAndUpdate(eventId, {
    $addToSet: { participants: email },
  });

  return new Response("Registered", { status: 200 });
}
