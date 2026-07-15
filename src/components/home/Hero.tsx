// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative h-[65vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white px-4 text-center overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
//       <div className="max-w-3xl mx-auto z-10 space-y-6">
//         <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-wider">
//           The Future of Remote Work
//         </span>
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
//           Premium Workspaces <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">On-Demand, Everywhere</span>
//         </h1>
//         <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
//           Book fully equipped hot desks, high-tech meeting rooms, and private offices instantly. No long-term commitments.
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
//           <Link href="/spaces" className="bg-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 flex items-center gap-2">
//             Explore Available Spaces <ArrowRight className="w-4 h-4" />
//           </Link>
//           <a href="#features" className="bg-white/5 border border-white/10 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition">
//             Learn More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// *******************************

// src/components/home/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  // Interactive element state: Let users preview desks vs scale impact in real-time
  const [teamSize, setTeamSize] = useState("5");

  const scrollToFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white px-4 text-center overflow-hidden">
      {/* Visual background ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Decorative floating blurred orbs for animation flow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 space-y-6 flex flex-col items-center">
        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-wider inline-flex items-center gap-1.5 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" /> The Future of Remote Work
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl">
          Premium Workspaces <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
            On-Demand, Everywhere
          </span>
        </h1>
        
        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Book fully equipped hot desks, high-tech meeting rooms, and private offices instantly. No long-term commitments.
        </p>

        {/* --- Interactive Element: Workspace Matcher Widget --- */}
        <div className="w-full max-w-sm bg-slate-900/60 border border-slate-800 backdrop-blur-md p-4 rounded-2xl shadow-xl space-y-3 mx-auto">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium">Interactive Setup: Team Size</span>
            <span className="text-indigo-400 font-bold">{teamSize} Members</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none"
          />
          <div className="text-[11px] text-slate-500 text-left flex justify-between">
            <span>Estimated Allocation: <strong>{Math.ceil(Number(teamSize) * 1.2)} Hotdesks</strong></span>
            <span className="text-indigo-400 font-semibold">Ready to route</span>
          </div>
        </div>
        {/* -------------------------------------------------- */}

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Link href="/spaces" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/20 flex items-center gap-2 group cursor-pointer">
            Explore Available Spaces 
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <button 
            onClick={scrollToFeatures} 
            className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition duration-150 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Clear visual flow chevron directing users downwards */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <button 
          onClick={scrollToFeatures}
          className="text-slate-500 hover:text-indigo-400 transition p-2 cursor-pointer" 
          aria-label="Scroll down to features"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}