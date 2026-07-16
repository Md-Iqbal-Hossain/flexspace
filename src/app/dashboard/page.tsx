"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Settings, LayoutDashboard, ArrowRight, Loader2 } from "lucide-react";

export default function DashboardPortal() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("flexspace_auth");
    if (token !== "authenticated") {
      router.replace("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Host Console</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, Host</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your shared office inventory, list new properties, and track system status.</p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Add Space */}
          <div 
            onClick={() => router.push("/spaces/add")}
            className="group bg-white border border-slate-200/70 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-500/50 transition duration-300 cursor-pointer flex flex-col justify-between h-56"
          >
            <div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">List a New Workspace</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Publish a new office, conference room, or desk space to start receiving bookings today.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mt-4">
              Get Started <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 2: Manage Spaces */}
          <div 
            onClick={() => router.push("/spaces/manage")}
            className="group bg-white border border-slate-200/70 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-900/40 transition duration-300 cursor-pointer flex flex-col justify-between h-56"
          >
            <div>
              <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-slate-900 group-hover:text-white transition duration-300">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">Manage Listings</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Monitor your 16+ active workspace properties, view customer pages, or remove listings.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mt-4 group-hover:text-indigo-600 transition">
              Open Inventory Table <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}