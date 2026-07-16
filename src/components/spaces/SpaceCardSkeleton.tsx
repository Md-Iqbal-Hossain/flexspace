export default function SpaceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-pulse flex flex-col h-[420px]">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-slate-200" />
      
      {/* Content Skeleton */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Location / Meta Tag */}
          <div className="h-4 w-1/4 bg-slate-200 rounded-md" />
          {/* Title */}
          <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
          {/* Description */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-slate-200 rounded-md" />
            <div className="h-3 w-5/6 bg-slate-200 rounded-md" />
          </div>
        </div>

        {/* Footer Meta & Button Skeleton */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="h-5 w-20 bg-slate-200 rounded-md" />
          <div className="h-9 w-28 bg-slate-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}