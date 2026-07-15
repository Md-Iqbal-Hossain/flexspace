// src/app/api/seed/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Space from "@/models/Space";

const SEED_SPACES = [
  {
    title: "Elite Developer Desk",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    description: "Premium ergonomic setup with dynamic dual monitor arms, mechanical keyboard, and dedicated 1Gbps fiber optic internet.",
    price: 180,
    rating: 4.9,
    location: "Mirpur DOHS, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Executive Glass Corner Suite",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    description: "A secure, fully soundproof glass partition office designed for high-profile executive teams of up to 6 members.",
    price: 750,
    rating: 4.8,
    location: "Gulshan 2, Dhaka",
    availableDate: "Aug 01, 2026"
  },
  {
    title: "Silicon Valley Meeting Lounge",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    // image: "https://images.unsplash.com/photo-1517502884422-41eaacad0168?auto=format&fit=crop&w=600&q=80",
    description: "Equipped with smart digital interactive boards, high-definition conferencing arrays, and flexible modular seating layouts.",
    price: 50,
    rating: 4.7,
    location: "Banani, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Creative Studio Hub",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    description: "An inspiring open-concept workspace optimized with soft natural daylight, active plant life, and customizable studio lighting.",
    price: 290,
    rating: 5.0,
    location: "Uttara Sector 11, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Corporate Boardroom Hub",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80",
    description: "High-end corporate meeting layout with seating capacity for 16, professional audio presentation networks, and private buffet sideboard.",
    price: 120,
    rating: 4.6,
    location: "Dhanmondi 27, Dhaka",
    availableDate: "Aug 10, 2026"
  },
  {
    title: "Founders Dedicated Desk",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    description: "Exclusive dedicated desk in our premium quiet zone. Includes an adjustable standing desk and secure under-desk filing drawer storage.",
    price: 210,
    rating: 4.9,
    location: "Banani 11, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Skyline Terrace Workspace",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Work on an enclosed, temperature-controlled rooftop garden deck with panoramic views of the city skyline and fresh outdoor air.",
    price: 320,
    rating: 4.8,
    location: "Gulshan 1, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Micro team Private Studio",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    description: "Perfect for fast-moving startups. A fully-furnished private pod containing 4 ergonomic workstations and a whiteboard wall.",
    price: 480,
    rating: 4.7,
    location: "Karwan Bazar, Dhaka",
    availableDate: "Sep 01, 2026"
  },
  {
    title: "Zen Focus Cabin",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "A minimalist, hyper-focused solitary cabin engineered to eliminate external audio and visual distractions.",
    price: 130,
    rating: 4.5,
    location: "Mirpur 12, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "The Launchpad Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    description: "A stunning mini-theater event workspace perfect for tech demo launches, community workshops, and corporate keynotes.",
    price: 250,
    rating: 4.9,
    location: "Nikunja 2, Dhaka",
    availableDate: "Aug 15, 2026"
  },
  {
    title: "Industrial Loft Hotdesk",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    description: "Vibrant high-ceiling industrial loft structure built for freelancers and remote developers who thrive in communal workspaces.",
    price: 140,
    rating: 4.4,
    location: "Badda, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "High-Rise Executive Penthouse",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    description: "The ultimate corporate status space. Unmatched floor-to-ceiling glass views, private lounge seating, and standard butler service.",
    price: 990,
    rating: 5.0,
    location: "Gulshan Avenue, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Quiet Library Study Pod",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
    description: "Deep-work study pods modeled after university libraries. Absolute zero-talking rules apply, ensuring high levels of focus.",
    price: 95,
    rating: 4.6,
    location: "Dhanmondi R/A, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Smart Lab Workspace",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80",
    description: "A specialized electronics and IoT staging space. Safe soldering exhausts, anti-static work benches, and logic analyzers ready to use.",
    price: 400,
    rating: 4.8,
    location: "Mirpur DOHS, Dhaka",
    availableDate: "Aug 20, 2026"
  },
  {
    title: "The Oasis Creative Oasis",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    description: "Bohemian-style design space complete with beanbags, hammock relaxation corners, and warm, atmospheric fairy lighting layout.",
    price: 160,
    rating: 4.7,
    location: "Uttara Sector 3, Dhaka",
    availableDate: "Immediate Access"
  },
  {
    title: "Cyber Security Warzone Node",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    description: "Dedicated networking setup with an isolated local intranet, redundant hardware firewall switches, and real-time network traffic maps.",
    price: 600,
    rating: 4.9,
    location: "Banani, Dhaka",
    availableDate: "Immediate Access"
  }
];

export async function GET() {
  try {
    await dbConnect();

    // 1. Clear out any existing spaces so we start completely clean
    await Space.deleteMany({});

    // 2. Bulk insert the 16 new, beautifully structured space documents
    await Space.insertMany(SEED_SPACES);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully with 16 workspaces! Your collection is ready."
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || "Failed to seed data."
    }, { status: 500 });
  }
}