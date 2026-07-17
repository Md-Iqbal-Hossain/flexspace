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
// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";

// export async function GET(req: Request) {
//   try {
//     await dbConnect();

//     // Parse out query string options from the URL
//     const { searchParams } = new URL(req.url);
//     const search = searchParams.get("search") || "";
//     const location = searchParams.get("location") || "";
//     const minPrice = searchParams.get("minPrice") || "";
//     const maxPrice = searchParams.get("maxPrice") || "";
//     const sort = searchParams.get("sort") || "";
//     const page = parseInt(searchParams.get("page") || "1", 10);
//     const limit = parseInt(searchParams.get("limit") || "6", 10);

//     // 1. Build Query Object natively as an untyped flexible JavaScript map to stop linter errors
//     const query: Record<string, unknown> = {};

//     // Text Search Match (Title or Description)
//     if (search) {
//       (query as any).$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Filter 1: Location Matching
//     if (location) {
//       (query as any).location = { $regex: location, $options: "i" };
//     }

//     // Filter 2: Price Boundary Filters
//     if (minPrice || maxPrice) {
//       const priceQuery: Record<string, number> = {};
//       if (minPrice) priceQuery.$gte = Number(minPrice);
//       if (maxPrice) priceQuery.$lte = Number(maxPrice);
//       (query as any).price = priceQuery;
//     }

//     // 2. Determine sorting rules inline to bypass strict mapping limitations completely
//     let finalSort: any = { createdAt: -1 };
//     if (sort === "price-asc") finalSort = { price: 1 };
//     else if (sort === "price-desc") finalSort = { price: -1 };
//     else if (sort === "rating-desc") finalSort = { rating: -1 };

//     // 3. Pagination Aggregation calculations
//     const skip = (page - 1) * limit;
//     const totalItems = await Space.countDocuments(query);
//     const totalPages = Math.ceil(totalItems / limit);

//     // Execute query with inline sorting configuration parameters
//     const spaces = await Space.find(query)
//       .sort(finalSort)
//       .skip(skip)
//       .limit(limit);

//     return NextResponse.json({
//       success: true,
//       data: spaces,
//       pagination: {
//         totalItems,
//         totalPages,
//         currentPage: page,
//         limit,
//       },
//     });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// *******************

// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";

// export async function GET(req: Request) {
//   try {
//     await dbConnect();

//     // Parse out query string options from the URL
//     const { searchParams } = new URL(req.url);
//     const search = searchParams.get("search") || "";
//     const location = searchParams.get("location") || "";
//     const minPrice = searchParams.get("minPrice") || "";
//     const maxPrice = searchParams.get("maxPrice") || "";
//     const sort = searchParams.get("sort") || "";
//     const page = parseInt(searchParams.get("page") || "1", 10);
    
//     // 🟢 Read limit parameter raw to detect the "all" keyword
//     const limitParam = searchParams.get("limit");
//     const isFetchAll = limitParam === "all";
//     const limit = isFetchAll ? 0 : parseInt(limitParam || "6", 10); // 0 in mongoose limits matches nothing, meaning infinite fetch

//     // 1. Build Query Object
//     const query: Record<string, unknown> = {};

//     // Text Search Match (Title or Description)
//     if (search) {
//       (query as any).$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Filter 1: Location Matching
//     if (location) {
//       (query as any).location = { $regex: location, $options: "i" };
//     }

//     // Filter 2: Price Boundary Filters
//     if (minPrice || maxPrice) {
//       const priceQuery: Record<string, number> = {};
//       if (minPrice) priceQuery.$gte = Number(minPrice);
//       if (maxPrice) priceQuery.$lte = Number(maxPrice);
//       (query as any).price = priceQuery;
//     }

//     // 2. Determine sorting rules inline
//     let finalSort: any = { createdAt: -1 };
//     if (sort === "price-asc") finalSort = { price: 1 };
//     else if (sort === "price-desc") finalSort = { price: -1 };
//     else if (sort === "rating-desc") finalSort = { rating: -1 };

//     // 3. Pagination Aggregation calculations
//     const totalItems = await Space.countDocuments(query);
    
//     // Execute query (Skip skip & limit if limitParam is "all")
//     let spacesQuery = Space.find(query).sort(finalSort);
    
//     if (!isFetchAll) {
//       const skip = (page - 1) * limit;
//       spacesQuery = spacesQuery.skip(skip).limit(limit);
//     }
    
//     const spaces = await spacesQuery;
//     const totalPages = isFetchAll ? 1 : Math.ceil(totalItems / limit);

//     return NextResponse.json({
//       success: true,
//       data: spaces,
//       pagination: {
//         totalItems,
//         totalPages,
//         currentPage: isFetchAll ? 1 : page,
//         limit: isFetchAll ? totalItems : limit,
//       },
//     });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// *********************************

// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";

// // ========================================================
// // 1. GET METHOD HANDLER (Search, Filters & Pagination)
// // ========================================================
// export async function GET(req: Request) {
//   try {
//     await dbConnect();

//     // Parse out query string options from the URL
//     const { searchParams } = new URL(req.url);
//     const search = searchParams.get("search") || "";
//     const location = searchParams.get("location") || "";
//     const minPrice = searchParams.get("minPrice") || "";
//     const maxPrice = searchParams.get("maxPrice") || "";
//     const sort = searchParams.get("sort") || "";
//     const page = parseInt(searchParams.get("page") || "1", 10);
    
//     // Read limit parameter raw to detect the "all" keyword
//     const limitParam = searchParams.get("limit");
//     const isFetchAll = limitParam === "all";
//     const limit = isFetchAll ? 0 : parseInt(limitParam || "6", 10); 

//     // Build Query Object
//     const query: Record<string, unknown> = {};

//     // Text Search Match (Title or Description)
//     if (search) {
//       (query as any).$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Filter 1: Location Matching
//     if (location) {
//       (query as any).location = { $regex: location, $options: "i" };
//     }

//     // Filter 2: Price Boundary Filters
//     if (minPrice || maxPrice) {
//       const priceQuery: Record<string, number> = {};
//       if (minPrice) priceQuery.$gte = Number(minPrice);
//       if (maxPrice) priceQuery.$lte = Number(maxPrice);
//       (query as any).price = priceQuery;
//     }

//     // Determine sorting rules inline
//     let finalSort: any = { createdAt: -1 };
//     if (sort === "price-asc") finalSort = { price: 1 };
//     else if (sort === "price-desc") finalSort = { price: -1 };
//     else if (sort === "rating-desc") finalSort = { rating: -1 };

//     // Pagination Aggregation calculations
//     const totalItems = await Space.countDocuments(query);
    
//     // Execute query (Skip skip & limit if limitParam is "all")
//     let spacesQuery = Space.find(query).sort(finalSort);
    
//     if (!isFetchAll) {
//       const skip = (page - 1) * limit;
//       spacesQuery = spacesQuery.skip(skip).limit(limit);
//     }
    
//     const spaces = await spacesQuery;
//     const totalPages = isFetchAll ? 1 : Math.ceil(totalItems / limit);

//     return NextResponse.json({
//       success: true,
//       data: spaces,
//       pagination: {
//         totalItems,
//         totalPages,
//         currentPage: isFetchAll ? 1 : page,
//         limit: isFetchAll ? totalItems : limit,
//       },
//     });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// // ========================================================
// // 2. POST METHOD HANDLER (Add Space & Schema Validation Fix)
// // ========================================================
// export async function POST(req: Request) {
//   try {
//     // Connect to the database cluster
//     await dbConnect();

//     // Extract JSON payload sent by your frontend form
//     const body = await req.json();
    
//     // Destructure availableDate along with other database properties
//     const { 
//       title, 
//       shortDescription, 
//       description, 
//       price, 
//       location, 
//       image, 
//       rating, 
//       availableDate 
//     } = body;

//     // Simple validation safeguard check for baseline required values
//     if (!title || !shortDescription || !description || !price || !location) {
//       return NextResponse.json(
//         { success: false, error: "Missing required workspace fields." },
//         { status: 400 }
//       );
//     }

//     // Set fallback unsplash image layout asset if the field was left blank by host
//     const defaultImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

//     // Instantiate data using Mongoose schema matching requirement patterns exactly
//     const newSpace = new Space({
//       title,
//       shortDescription,
//       description,
//       price,
//       location,
//       image: image && image.trim() !== "" ? image : defaultImage,
//       rating: rating || 5.0,
//       // Failsafe backup date assignment rule to guarantee compliance
//       availableDate: availableDate || new Date().toISOString().split('T')[0],
//     });

//     // Commit to MongoDB
//     await newSpace.save();

//     return NextResponse.json({
//       success: true,
//       data: newSpace,
//       message: "Workspace successfully listed."
//     }, { status: 201 });

//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Failed to record resource.";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// *********************************

// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Space from "@/models/Space";
// // If you are using jsonwebtoken to sign/verify tokens, import it:
// // import jwt from "jsonwebtoken";

// // ========================================================
// // 1. GET METHOD HANDLER (Search, Filters & Pagination)
// // ========================================================
// export async function GET(req: Request) {
//   try {
//     await dbConnect();

//     // Parse out query string options from the URL
//     const { searchParams } = new URL(req.url);
//     const search = searchParams.get("search") || "";
//     const location = searchParams.get("location") || "";
//     const minPrice = searchParams.get("minPrice") || "";
//     const maxPrice = searchParams.get("maxPrice") || "";
//     const sort = searchParams.get("sort") || "";
//     const page = parseInt(searchParams.get("page") || "1", 10);
    
//     // Read limit parameter raw to detect the "all" keyword
//     const limitParam = searchParams.get("limit");
//     const isFetchAll = limitParam === "all";
//     const limit = isFetchAll ? 0 : parseInt(limitParam || "6", 10); 

//     // Build Query Object
//     const query: Record<string, unknown> = {};

//     // Text Search Match (Title or Description)
//     if (search) {
//       (query as any).$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Filter 1: Location Matching
//     if (location) {
//       (query as any).location = { $regex: location, $options: "i" };
//     }

//     // Filter 2: Price Boundary Filters
//     if (minPrice || maxPrice) {
//       const priceQuery: Record<string, number> = {};
//       if (minPrice) priceQuery.$gte = Number(minPrice);
//       if (maxPrice) priceQuery.$lte = Number(maxPrice);
//       (query as any).price = priceQuery;
//     }

//     // Determine sorting rules inline
//     let finalSort: any = { createdAt: -1 };
//     if (sort === "price-asc") finalSort = { price: 1 };
//     else if (sort === "price-desc") finalSort = { price: -1 };
//     else if (sort === "rating-desc") finalSort = { rating: -1 };

//     // Pagination Aggregation calculations
//     const totalItems = await Space.countDocuments(query);
    
//     // Execute query (Skip skip & limit if limitParam is "all")
//     let spacesQuery = Space.find(query).sort(finalSort);
    
//     if (!isFetchAll) {
//       const skip = (page - 1) * limit;
//       spacesQuery = spacesQuery.skip(skip).limit(limit);
//     }
    
//     const spaces = await spacesQuery;
//     const totalPages = isFetchAll ? 1 : Math.ceil(totalItems / limit);

//     return NextResponse.json({
//       success: true,
//       data: spaces,
//       pagination: {
//         totalItems,
//         totalPages,
//         currentPage: isFetchAll ? 1 : page,
//         limit: isFetchAll ? totalItems : limit,
//       },
//     });
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// // ========================================================
// // 2. POST METHOD HANDLER (Protected Admin Route Only)
// // ========================================================
// export async function POST(req: Request) {
//   try {
//     // 🔒 BACKEND GUARD: Get authorization token from Headers
//     const authHeader = req.headers.get("Authorization");
    
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return NextResponse.json(
//         { success: false, error: "Access Denied: Missing authorization token." },
//         { status: 401 }
//       );
//     }

//     const token = authHeader.split(" ")[1];

//     /**
//      * 🛡️ ROLE VALIDATION SYSTEM
//      * Decode or verify your JWT payload to confirm the sender's identity.
//      * Below is an example matching the "admin@admin.com" structure.
//      */
//     let isAdmin = false;

//     try {
//       // Option A (If using a real JWT setup):
//       // const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "fallback");
//       // if (decoded.role === "admin" || decoded.email.includes("admin")) { isAdmin = true; }
      
//       // Option B (Simple verification for mockup tokens):
//       // Since our login endpoint generates a token containing user identity details:
//       const decodedPayload = Buffer.from(token.split(".")[1] || "", "base64").toString("utf-8");
//       const parsedUser = JSON.parse(decodedPayload);
      
//       if (parsedUser.email?.toLowerCase().includes("admin") || parsedUser.role === "admin") {
//         isAdmin = true;
//       }
//     } catch (tokenErr) {
//       // If parsing failed but you are using mock tokens, fallback to a raw string check:
//       if (token.includes("admin")) {
//         isAdmin = true;
//       }
//     }

//     // 🛑 Block anyone who isn't a verified Admin (e.g. mama@mami.com)
//     if (!isAdmin) {
//       return NextResponse.json(
//         { success: false, error: "Access Denied: Only Admin accounts can add listings." },
//         { status: 403 }
//       );
//     }

//     // --- Proceeding with data mutation ---
//     await dbConnect();

//     const body = await req.json();
//     const { 
//       title, 
//       shortDescription, 
//       description, 
//       price, 
//       location, 
//       image, 
//       rating, 
//       availableDate 
//     } = body;

//     if (!title || !shortDescription || !description || !price || !location) {
//       return NextResponse.json(
//         { success: false, error: "Missing required workspace fields." },
//         { status: 400 }
//       );
//     }

//     const defaultImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

//     const newSpace = new Space({
//       title,
//       shortDescription,
//       description,
//       price,
//       location,
//       image: image && image.trim() !== "" ? image : defaultImage,
//       rating: rating || 5.0,
//       availableDate: availableDate || new Date().toISOString().split('T')[0],
//     });

//     await newSpace.save();

//     return NextResponse.json({
//       success: true,
//       data: newSpace,
//       message: "Workspace successfully listed."
//     }, { status: 201 });

//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Failed to record resource.";
//     return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
//   }
// }

// ************************************

export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Space from "@/models/Space";

// ========================================================
// 1. GET METHOD HANDLER (Search, Filters & Pagination)
// ========================================================
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
    
    // Read limit parameter raw to detect the "all" keyword
    const limitParam = searchParams.get("limit");
    const isFetchAll = limitParam === "all";
    const limit = isFetchAll ? 0 : parseInt(limitParam || "6", 10); 

    // Build Query Object
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

    // Determine sorting rules inline
    let finalSort: any = { createdAt: -1 };
    if (sort === "price-asc") finalSort = { price: 1 };
    else if (sort === "price-desc") finalSort = { price: -1 };
    else if (sort === "rating-desc") finalSort = { rating: -1 };

    // Pagination Aggregation calculations
    const totalItems = await Space.countDocuments(query);
    
    // Execute query (Skip skip & limit if limitParam is "all")
    let spacesQuery = Space.find(query).sort(finalSort);
    
    if (!isFetchAll) {
      const skip = (page - 1) * limit;
      spacesQuery = spacesQuery.skip(skip).limit(limit);
    }
    
    const spaces = await spacesQuery;
    const totalPages = isFetchAll ? 1 : Math.ceil(totalItems / limit);

    return NextResponse.json({
      success: true,
      data: spaces,
      pagination: {
        totalItems,
        totalPages,
        currentPage: isFetchAll ? 1 : page,
        limit: isFetchAll ? totalItems : limit,
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

// ========================================================
// 2. POST METHOD HANDLER (Protected Admin Route Only)
// ========================================================
export async function POST(req: Request) {
  try {
    // 🔒 BACKEND GUARD: Get authorization token from Headers
    const authHeader = req.headers.get("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, error: "Access Denied: Missing authorization token." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    let isAdmin = false;

    try {
      // 🛡️ Safe check: Parse token safely to verify if it's a valid structured JWT
      const tokenParts = token.split(".");
      if (tokenParts.length === 3) {
        const decodedPayload = Buffer.from(tokenParts[1], "base64").toString("utf-8");
        const parsedUser = JSON.parse(decodedPayload);
        
        if (parsedUser.email?.toLowerCase().includes("admin") || parsedUser.role === "admin") {
          isAdmin = true;
        }
      } else {
        // Fallback checks for simple development string tokens
        if (token.toLowerCase().includes("admin")) {
          isAdmin = true;
        }
      }
    } catch (tokenErr) {
      // Fallback check if JSON parsing crashes
      if (token.toLowerCase().includes("admin")) {
        isAdmin = true;
      }
    }

    // 🛑 Block unauthorized users from listing workspaces
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: "Access Denied: Only Admin accounts can add listings." },
        { status: 403 }
      );
    }

    // --- Proceeding with database listing registration ---
    await dbConnect();

    const body = await req.json();
    const { 
      title, 
      shortDescription, 
      description, 
      price, 
      location, 
      image, 
      rating, 
      availableDate 
    } = body;

    if (!title || !shortDescription || !description || !price || !location) {
      return NextResponse.json(
        { success: false, error: "Missing required workspace fields." },
        { status: 400 }
      );
    }

    const defaultImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

    const newSpace = new Space({
      title,
      shortDescription,
      description,
      price,
      location,
      image: image && image.trim() !== "" ? image : defaultImage,
      rating: rating || 5.0,
      availableDate: availableDate || new Date().toISOString().split('T')[0],
    });

    await newSpace.save();

    return NextResponse.json({
      success: true,
      data: newSpace,
      message: "Workspace successfully listed."
    }, { status: 201 });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to record resource.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}