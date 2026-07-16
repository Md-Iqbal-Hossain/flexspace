// // src/app/api/spaces/route.ts
// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";

// export async function GET() {
//   try {
//     // 1. Establish the database connection pool
//     await dbConnect();

//     // 2. Query all spaces from the Space collection
//     const spaces = await Space.find({}).sort({ createdAt: -1 });

//     // 3. Respond with JSON data
//     return NextResponse.json({ success: true, data: spaces }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message || "Server Error" },
//       { status: 500 }
//     );
//   }
// }

// **********************************

// src/app/api/spaces/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Space from "@/models/Space";

export async function GET(req: Request) {
  try {
    await dbConnect();

    // Parse out query string options from the URL
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const location = searchParams.get("location") || "";
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";
    const sort = searchParams.get("sort") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);

    // 1. Build Query Object natively as an untyped flexible JavaScript map to stop linter errors
    const query: Record<string, unknown> = {};

    // Text Search Match (Title or Description)
    if (search) {
      (query as any).$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Filter 1: Location Matching
    if (location) {
      (query as any).location = { $regex: location, $options: "i" };
    }

    // Filter 2: Price Boundary Filters
    if (minPrice || maxPrice) {
      const priceQuery: Record<string, number> = {};
      if (minPrice) priceQuery.$gte = Number(minPrice);
      if (maxPrice) priceQuery.$lte = Number(maxPrice);
      (query as any).price = priceQuery;
    }

    // 2. Determine sorting rules inline to bypass strict mapping limitations completely
    let finalSort: any = { createdAt: -1 };
    if (sort === "price-asc") finalSort = { price: 1 };
    else if (sort === "price-desc") finalSort = { price: -1 };
    else if (sort === "rating-desc") finalSort = { rating: -1 };

    // 3. Pagination Aggregation calculations
    const skip = (page - 1) * limit;
    const totalItems = await Space.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    // Execute query with inline sorting configuration parameters
    const spaces = await Space.find(query)
      .sort(finalSort)
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      success: true,
      data: spaces,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}