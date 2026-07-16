// src/app/explore/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

interface PaginationInfo {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

function ExploreContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state elements for managing current workspace assets
  const [spaces, setSpaces] = useState<SpaceData[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Read current configuration rules straight from the active browser URL parameters
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const sort = searchParams.get("sort") || "";

  // Re-run database queries every time URL search filters change
  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams(searchParams.toString());
    
    fetch(`/api/spaces?${query.toString()}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setSpaces(resData.data);
          setPagination(resData.pagination);
        }
      })
      .catch((err) => console.error("Filter request error:", err))
      .finally(() => setLoading(false));
  }, [searchParams]);

  // Utility logic to dynamically update specific parameters in the URL query string
  const updateUrlParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    
    // Fallback to page 1 whenever filters change to prevent out-of-bounds displays
    if (!updates.hasOwnProperty("page")) {
      params.set("page", "1");
    }

    router.push(`/explore?${params.toString()}`);
  };

  return (
    <main className="max-w-6xl mx-auto p-4 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Workspaces</h1>
        <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
          ← Back Home
        </Link>
      </div>

      {/* Control Panels: Search, Multi-field Filters, and Sorting Actions */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
        
        {/* Module A: Main keyword query search input */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold text-gray-500">Search Keywords</label>
          <input
            type="text"
            placeholder="e.g. Creative Desk..."
            value={search}
            onChange={(e) => updateUrlParams({ search: e.target.value })}
            className="w-full bg-white border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-blue-600 text-gray-800"
          />
        </div>

        {/* Filter 1: Location Matching Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold text-gray-500">Location Filter</label>
          <select
            value={location}
            onChange={(e) => updateUrlParams({ location: e.target.value })}
            className="w-full bg-white border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-blue-600 text-gray-800"
          >
            <option value="">All Locations</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Filter 2: Max Price Limit Input */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold text-gray-500">Max Budget ($/day)</label>
          <input
            type="number"
            placeholder="Any price"
            value={maxPrice}
            onChange={(e) => updateUrlParams({ maxPrice: e.target.value })}
            className="w-full bg-white border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-blue-600 text-gray-800"
          />
        </div>

        {/* Sort Options Control Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold text-gray-500">Sorting Rules</label>
          <select
            value={sort}
            onChange={(e) => updateUrlParams({ sort: e.target.value })}
            className="w-full bg-white border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-blue-600 text-gray-800"
          >
            <option value="">Sort: Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Highest Rated</option>
          </select>
        </div>

        {/* Reset Filters Option */}
        <div>
          <button
            onClick={() => router.push("/explore")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium text-sm rounded-lg py-2 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Listing Cards Grid Section */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="h-72 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : spaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <Link
              href={`/spaces/${space._id}`}
              key={space._id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
                <img
                  src={space.image || "/placeholder.jpg"}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {space.title}
                  </h3>
                  <p className="text-xs text-gray-400">📍 {space.location}</p>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-100 font-medium">
                  <span className="text-amber-500">★ {space.rating.toFixed(1)}</span>
                  <span className="text-gray-900 font-bold">${space.price}/day</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 border rounded-xl">
          <p className="text-gray-500">No workspace listings match your current criteria.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-6">
          <button
            disabled={pagination.currentPage <= 1}
            onClick={() => updateUrlParams({ page: String(pagination.currentPage - 1) })}
            className="px-4 py-2 border rounded-lg text-sm font-medium bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors text-gray-800"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page <strong>{pagination.currentPage}</strong> of {pagination.totalPages}
          </span>
          <button
            disabled={pagination.currentPage >= pagination.totalPages}
            onClick={() => updateUrlParams({ page: String(pagination.currentPage + 1) })}
            className="px-4 py-2 border rounded-lg text-sm font-medium bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors text-gray-800"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

// Next.js 15 requires useSearchParams to be wrapped inside a Suspense block for static build optimization
export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading Explore Screen...</div>}>
      <ExploreContent />
    </Suspense>
  );
}