// // src/app/api/spaces/[id]/route.ts
// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await dbConnect();
//     const { id } = params;

//     const space = await Space.findById(id);
//     if (!space) {
//       return NextResponse.json({ success: false, error: "Space workspace not found" }, { status: 404 });
//     }

//     // Fetch up to 3 related items in the same location, excluding this current item
//     const relatedSpaces = await Space.find({
//       location: space.location,
//       _id: { $ne: id }
//     }).limit(3);

//     return NextResponse.json({
//       success: true,
//       data: space,
//       related: relatedSpaces
//     });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// ****************************

// src/app/api/spaces/[id]/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Space from "@/models/Space";

// 🟢 1. Explicitly type params as a Promise containing the id string
export async function GET(
  req: Request, 
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    await dbConnect();

    // 🟢 2. Await the params promise before destructuring properties
    const { id } = await params;

    const space = await Space.findById(id);
    if (!space) {
      return NextResponse.json({ success: false, error: "Space workspace not found" }, { status: 404 });
    }

    // Fetch up to 3 related items in the same location, excluding this current item
    const relatedSpaces = await Space.find({
      location: space.location,
      _id: { $ne: id }
    }).limit(3);

    return NextResponse.json({
      success: true,
      data: space,
      related: relatedSpaces
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}