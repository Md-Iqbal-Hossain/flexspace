// src/app/spaces/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface SpaceData {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  availableDate: string;
}

export default function SpaceDetailsPage() {
  const { id } = useParams();
  const [space, setSpace] = useState<SpaceData | null>(null);
  const [related, setRelated] = useState<SpaceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/spaces/${id}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setSpace(resData.data);
          setRelated(resData.related);
        } else {
          setError(resData.error);
        }
      })
      .catch(() => setError("Failed to fetch workspace information"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-4 animate-pulse space-y-6">
        <div className="h-64 sm:h-96 bg-gray-200 rounded-xl w-full" />
        <div className="h-8 bg-gray-200 w-1/3 rounded" />
        <div className="h-20 bg-gray-200 w-full rounded" />
      </div>
    );
  }

  if (error || !space) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-red-500 font-semibold">{error || "Workspace not found"}</p>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block font-medium">
          ← Back to Workspaces
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-4 md:py-8 space-y-8">
      {/* Back navigation anchor */}
      <Link href="/" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors inline-block">
        ← Back to all spaces
      </Link>

      {/* 1. Media Section */}
      <section className="w-full h-[240px] sm:h-[400px] relative rounded-xl overflow-hidden shadow-inner bg-gray-100">
        <img 
          src={space.image || "/placeholder.jpg"} 
          alt={space.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-xs sm:text-sm rounded-full backdrop-blur-sm">
          ★ {space.rating.toFixed(1)} Rating
        </div>
      </section>

      {/* Core Split-Grid Module */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left Aspect: Overview Description */}
        <div className="md:col-span-2 bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{space.title}</h1>
            <p className="text-gray-500 text-sm flex items-center gap-1">📍 {space.location}</p>
          </div>
          
          <hr className="border-gray-100" />
          
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-gray-800">Description / Overview</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {space.description}
            </p>
          </div>
        </div>

        {/* Right Aspect: Specifications Widget */}
        <div className="w-full">
          <section className="bg-gray-50 p-5 sm:p-6 rounded-xl border border-gray-200 space-y-4">
            <h2 className="text-base font-bold text-gray-900">Key Information</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500">Rental Rate</span>
                <span className="font-bold text-gray-900">${space.price} / day</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500">Availability</span>
                <span className="font-semibold text-gray-800">{space.availableDate}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm shadow shadow-blue-200 mt-2">
              Book Workspace Now
            </button>
          </section>
        </div>
      </div>

      {/* 3. Related Workspace Items */}
      {related.length > 0 && (
        <section className="pt-6 border-t border-gray-100 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Related Items in {space.location}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link 
                href={`/spaces/${item._id}`} 
                key={item._id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-40 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={item.image || "/placeholder.jpg"} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">📍 {item.location}</p>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm pt-2 border-t border-gray-50 font-medium">
                    <span className="text-amber-500">★ {item.rating.toFixed(1)}</span>
                    <span className="text-gray-900 font-bold">${item.price}/day</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}