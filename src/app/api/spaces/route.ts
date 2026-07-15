// src/app/api/spaces/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Space from "@/models/Space";

export async function GET() {
  try {
    // 1. Establish the database connection pool
    await dbConnect();

    // 2. Query all spaces from the Space collection
    const spaces = await Space.find({}).sort({ createdAt: -1 });

    // 3. Respond with JSON data
    return NextResponse.json({ success: true, data: spaces }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}