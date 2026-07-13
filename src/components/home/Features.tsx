import { Zap, Shield, Clock } from "lucide-react";

export default function Features() {
  const featuresList = [
    { icon: Zap, title: "Gigabit Fiber Networks", desc: "Redundant high-speed internet links with enterprise fallback setups." },
    { icon: Shield, title: "Secure 24/7 Access", desc: "Smart card digital key system for seamless booking check-ins anytime." },
    { icon: Clock, title: "Flexible Hourly Booking", desc: "Only pay for the exact hours or days you actually spend working." }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Built for Enterprise Productivity</h2>
        <p className="text-gray-500 text-sm">Every element optimized to give you and your team a distraction-free environment.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresList.map((feat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
              <feat.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{feat.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}