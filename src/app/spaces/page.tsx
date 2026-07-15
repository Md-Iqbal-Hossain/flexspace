// src/app/spaces/page.tsx
"use client";

import { useState, useEffect } from "react";
import SpaceGrid from "@/components/spaces/SpaceGrid";
import { SpaceData } from "@/components/spaces/SpaceCard";

export default function SpacesPage() {
  const [spaces, setSpaces] = useState<SpaceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpaces() {
      try {
        setIsLoading(true);
        // Call your Next.js API route directly
        const response = await fetch("/api/spaces");
        const json = await response.json();

        if (json.success) {
          setSpaces(json.data);
        } else {
          throw new Error(json.error || "Failed to load spaces.");
        }
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSpaces();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Explore Workspaces</h1>
          <p className="text-slate-500 text-xs font-medium">
            Live database feeds powered by MongoDB Atlas and Next.js APIs.
          </p>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl text-rose-700 text-sm">
            Failed to connect to database: {error}
          </div>
        )}

        {/* This grid component handles displaying the skeleton when isLoading is true */}
        <SpaceGrid spaces={spaces} isLoading={isLoading} />

      </div>
    </main>
  );
}