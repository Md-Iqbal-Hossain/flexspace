// src/models/Space.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISpace extends Document {
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  availableDate: string;
}

const SpaceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 5.0 },
    location: { type: String, required: true },
    availableDate: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent compiling model multiple times during Next.js fast-refresh cycles
export default mongoose.models.Space || mongoose.model<ISpace>("Space", SpaceSchema);