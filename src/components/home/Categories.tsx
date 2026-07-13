import Link from "next/link";
import { Monitor, Users, Building, ArrowRight } from "lucide-react";

export default function Categories() {
  const categoryList = [
    { icon: Monitor, name: "Hot Desks", desc: "Flexible open-plan seating options." },
    { icon: Users, name: "Meeting Rooms", desc: "High-tech audio/video integrated presentation spaces." },
    { icon: Building, name: "Private Offices", desc: "Fully furnished dynamic suites for corporate teams." }
  ];

  return (
    <section className="bg-slate-100 py-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Spaces Tailored to Your Needs</h2>
          <p className="text-gray-500 text-sm">Whether you are an individual nomad or a growing team, we have your back.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryList.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden group hover:border-indigo-500 transition duration-300">
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{cat.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{cat.desc}</p>
                <Link href="/spaces" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  Browse Category <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}