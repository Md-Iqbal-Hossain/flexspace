// // src/lib/db.ts
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// // Declare global cache variable cleanly for Next.js hot-reloading context
// declare global {
//   var mongooseGlobal: MongooseCache | undefined;
// }

// let cached = global.mongooseGlobal;

// if (!cached) {
//   cached = global.mongooseGlobal = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached!.conn) return cached!.conn;

//   if (!cached!.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
//       return mongooseInstance;
//     });
//   }
  
//   cached!.conn = await cached!.promise;
//   return cached!.conn;
// }

// *********************************

// src/lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot-reloading
 * in development. This prevents connections from growing exponentially.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;