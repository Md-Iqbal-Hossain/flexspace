// src/components/spaces/SpaceGrid.tsx
"use client";
import SpaceCard, { SpaceData } from "./SpaceCard";

interface SpaceGridProps {
  spaces: SpaceData[];
  isLoading: boolean;
}

export default function SpaceGrid({ spaces, isLoading }: SpaceGridProps) {
  // Production Skeleton Content Loop (Displays 4 matching layout containers)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl border border-slate-200/60 p-4 space-y-4 shadow-sm w-full animate-pulse flex flex-col"
          >
            {/* Aspect-Ratio Box Skeleton Overlay */}
            <div className="aspect-[4/3] bg-slate-200 rounded-xl w-full"></div>
            {/* Text Title Strings Skeleton Block */}
            <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
            {/* Description Lines Skeleton Blocks */}
            <div className="space-y-2">
              <div className="h-3 bg-slate-200 rounded-md w-full"></div>
              <div className="h-3 bg-slate-200 rounded-md w-5/6"></div>
            </div>
            {/* Metadata Rows Skeleton Blocks */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
              <div className="h-3 bg-slate-200 rounded-md w-2/3 ml-auto"></div>
            </div>
            {/* Button Component Skeleton Box */}
            <div className="h-9 bg-slate-200 rounded-xl w-full mt-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  // Fallback state if database records are empty
  if (spaces.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/60 p-8 w-full">
        <p className="text-slate-500 text-sm font-medium">No active workspaces match your target index query.</p>
      </div>
    );
  }

  // Active Grid execution layout layer
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {spaces.map((space) => (
        <SpaceCard key={space._id} space={space} />
      ))}
    </div>
  );
}