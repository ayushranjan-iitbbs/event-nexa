import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const { db } = await connectToDatabase(); // Connect using your function
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const result = await users.insertOne({ name, email, password });

    return NextResponse.json(
      { message: "Signup successful", user: { id: result.insertedId, name, email } },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
