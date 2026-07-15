// src/components/spaces/SpaceCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, DollarSign, Calendar } from "lucide-react";

export interface SpaceData {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  availableDate: string;
}

interface SpaceCardProps {
  space: SpaceData;
}

export default function SpaceCard({ space }: SpaceCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden w-full">
      {/* Unified Aspect-Ratio Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        <Image
          src={space.image}
          alt={space.title}
          fill
          sizes="(max-w-7xl) 25vw, (max-w-md) 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />
        {/* Absolute Rating Badge overlay */}
        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[10px] font-black flex items-center gap-1">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
          <span>{space.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Structured Card Context Window - flex-1 pushes button down evenly */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-slate-900 font-extrabold text-sm tracking-tight line-clamp-1 group-hover:text-indigo-600 transition">
            {space.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
            {space.description}
          </p>
        </div>

        {/* --- Unified Meta Grid System --- */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 pt-1 text-[11px] font-semibold text-slate-600 border-t border-slate-50">
          <div className="flex items-center gap-1.5 min-w-0">
            <DollarSign className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate text-slate-900">${space.price}/mo</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0 justify-end">
            <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="truncate">{space.availableDate}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0 col-span-2">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate">{space.location}</span>
          </div>
        </div>

        {/* Card Action Anchor Alignment Anchor */}
        <div className="pt-2 mt-auto">
          <Link 
            href={`/spaces/${space._id}`}
            className="w-full bg-slate-50 group-hover:bg-indigo-600 border border-slate-200 group-hover:border-indigo-600 text-slate-800 group-hover:text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center text-center cursor-pointer shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}