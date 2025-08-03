import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Optional but recommended

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const { db } = await connectToDatabase();
    const users = db.collection("users");

    const user = await users.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 🔐 If using bcrypt for password hashing (recommended)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Do not return full user with password
    const { password: _, ...safeUser } = user;

    return NextResponse.json({ message: "Login successful", user: safeUser }, { status: 200 });

  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
