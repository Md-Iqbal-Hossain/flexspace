import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
      <div className="max-w-3xl mx-auto z-10 space-y-6">
        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-wider">
          The Future of Remote Work
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Premium Workspaces <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">On-Demand, Everywhere</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Book fully equipped hot desks, high-tech meeting rooms, and private offices instantly. No long-term commitments.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/spaces" className="bg-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 flex items-center gap-2">
            Explore Available Spaces <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#features" className="bg-white/5 border border-white/10 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}