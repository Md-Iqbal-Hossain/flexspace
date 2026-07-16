"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapPin, DollarSign, Star, Calendar, ArrowRight } from "lucide-react";
import SpaceCardSkeleton from "@/components/spaces/SpaceCardSkeleton";

interface Workspace {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating?: number;
  availableFrom?: string;
}

// 🟢 EXPANDED TO 8 BEAUTIFUL FALLBACK SPACES
const FALLBACK_SPACES: Workspace[] = [
  {
    _id: "fallback-1",
    title: "The Creative Loft",
    description: "An open, light-filled industrial loft perfect for collaborative teams and creators looking for inspiration.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    price: 15,
    location: "Downtown",
    rating: 4.9,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-2",
    title: "Quiet Focus Studio",
    description: "Premium sound-isolated single desks designed for deep work, software engineering, and private calls.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
    price: 12,
    location: "Midtown",
    rating: 4.8,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-3",
    title: "Sleek Executive Boardroom",
    description: "Fully equipped glass conference room with high-definition AV, whiteboard walls, and fast fiber internet.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600",
    price: 45,
    location: "Financial District",
    rating: 5.0,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-4",
    title: "Zen Garden Workspaces",
    description: "A gorgeous indoor-outdoor setup surrounded by green plants and gentle natural lighting.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=600",
    price: 18,
    location: "Greenwood",
    rating: 4.7,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-5",
    title: "Innovators Hub",
    description: "Dynamic shared desk community space where local web developers, designers, and startup founders connect.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600",
    price: 10,
    location: "Silicon Alley",
    rating: 4.6,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-6",
    title: "Skyline Suite Lounge",
    description: "Top-floor shared workspace offering sweeping 360-degree city views, artisan coffee, and premium leather seating.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
    price: 30,
    location: "West End",
    rating: 4.9,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-7",
    title: "The Workshop Garage",
    description: "An industrial-chic studio tailored for makers, designers, and engineers needing tactile workspace.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    price: 22,
    location: "Brooklyn",
    rating: 4.7,
    availableFrom: new Date().toISOString()
  },
  {
    _id: "fallback-8",
    title: "The Penthouse Suite",
    description: "High-end corporate workspaces designed to host elite clients, VIP summits, and collaborative pitches.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600",
    price: 55,
    location: "Uptown",
    rating: 4.9,
    availableFrom: new Date().toISOString()
  }
];

export default function FeaturedSpaces() {
  const router = useRouter();
  const [spaces, setSpaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedSpaces() {
      try {
        // 🟢 1. FETCH LIMIT CHANGED TO 8
        const res = await fetch("/api/spaces?limit=8");
        if (res.ok) {
          const data = await res.json();
          
          let fetchedArray: Workspace[] = [];
          if (Array.isArray(data)) {
            fetchedArray = data;
          } else if (data.spaces && Array.isArray(data.spaces)) {
            fetchedArray = data.spaces;
          } else if (data.data && Array.isArray(data.data)) {
            fetchedArray = data.data;
          }

          if (fetchedArray.length > 0) {
            setSpaces(fetchedArray);
          } else {
            console.warn("API returned empty array. Loading beautiful fallback spaces instead.");
            setSpaces(FALLBACK_SPACES);
          }
        } else {
          console.warn(`API returned status ${res.status}. Loading beautiful fallback spaces.`);
          setSpaces(FALLBACK_SPACES);
        }
      } catch (error) {
        console.error("Failed fetching live database spaces. Showing local mock spaces:", error);
        setSpaces(FALLBACK_SPACES);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedSpaces();
  }, []);

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Curated Coworking
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Featured Workspaces
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            Handpicked professional environments designed to boost your daily focus and productivity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? // 🟢 2. SKELETON LOADERS CHANGED TO GENERATE 8
              Array.from({ length: 8 }).map((_, index) => (
                <SpaceCardSkeleton key={index} />
              ))
            : // 🟢 3. SLICE CHANGED TO RENDER UP TO 8
              spaces.slice(0, 8).map((space) => (
                <div 
                  key={space._id} 
                  className="group bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/80 transition duration-300 flex flex-col h-[420px] overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={space.image || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"} 
                      alt={space.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-indigo-600" />
                      {space.location}
                    </div>
                  </div>

                  {/* Body Info Layout */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {space.availableFrom ? new Date(space.availableFrom).toLocaleDateString() : "Available Now"}
                        </span>
                        {space.rating && (
                          <span className="flex items-center gap-1 font-semibold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                            <Star className="w-3 h-3 fill-amber-500" />
                            {space.rating}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-indigo-600 transition">
                        {space.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {space.description}
                      </p>
                    </div>

                    {/* Pricing and Action Link */}
                    <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Hourly Rate</span>
                        <span className="text-slate-900 font-black text-lg flex items-center">
                          <DollarSign className="w-4 h-4 text-slate-600 -mr-0.5" />
                          {space.price}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => router.push(`/spaces/${space._id}`)}
                        className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-indigo-700 active:scale-[0.98] transition cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => router.push("/explore")}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-lg shadow-slate-900/10 active:scale-[0.98] cursor-pointer"
          >
            Explore More Spaces
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}