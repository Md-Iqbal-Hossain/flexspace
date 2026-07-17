"use client";
import React from "react";
import { Building2, Users, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">
            About FlexSpace
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Bridging the gap between dynamic professionals and flexible, inspiring workspaces around the globe.
          </p>
        </div>

        {/* Brand Mission Statement */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-10 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2.5">
            <Target className="w-5 h-5 text-indigo-600" /> Our Mission
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At FlexSpace, we believe that where you work directly impacts how you think, create, and collaborate. We built this platform to empower freelancers, startups, and established enterprises to instantly search, list, and book high-productivity workspaces on a flexible, day-to-day basis without complex lease agreements.
          </p>
        </div>

        {/* Grid Highlight Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Curated Spaces</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every desk, executive suite, and creative studio listed is vetted for connectivity and comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Built for Community</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect with fellow digital nomads, developers, and creators sharing the workspace environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Flexible Terms</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Simple day-by-day bookings. No long term bonds or hidden maintenance expenses.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}