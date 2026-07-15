// // src/app/api/auth/login/route.ts
// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import { User } from "@/models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//     }

//     await connectToDatabase();

//     // Look up the user in MongoDB
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "Invalid email or password credentials" }, { status: 401 });
//     }

//     // Compare the client string password with the encrypted DB hash
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return NextResponse.json({ error: "Invalid email or password credentials" }, { status: 401 });
//     }

//     // Issue a signed JSON Web Token valid for 1 day
//     const token = jwt.sign(
//       { userId: user._id, email: user.email, name: user.name },
//       process.env.JWT_SECRET!,
//       { expiresIn: "1d" }
//     );

//     return NextResponse.json({
//       message: "Authentication successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email }
//     }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }

// ********************************

// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Import the default optimized dbConnect function
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 1. Validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // 2. Database Connection
    await dbConnect();

    // 3. User Verification
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password credentials" }, { status: 401 });
    }

    // 4. Password Verification
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({ error: "Invalid email or password credentials" }, { status: 401 });
    }

    // 5. Issue JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    // 6. Return Response
    return NextResponse.json({
      message: "Authentication successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    }, { status: 200 });

  } catch (error) {
    // Safely check error types to bypass TypeScript 'any' restrictions cleanly
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}