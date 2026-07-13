export default function HowItWorks() {
  const stepList = [
    { step: "01", title: "Select a Space", desc: "Filter by location, room capacity, and available dynamic amenities." },
    { step: "02", title: "Confirm Secure Booking", desc: "Book instantly via hourly micro-transactions or corporate tokens." },
    { step: "03", title: "Check-In & Execute", desc: "Unlock doors with your digital keycard and start producing results." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Seamless Flow Architecture</h2>
        <p className="text-gray-500 text-sm">Get access to your premium space in under three minutes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
        {stepList.map((item, i) => (
          <div key={i} className="relative space-y-3 p-4">
            <span className="text-5xl font-extrabold text-indigo-100 block">{item.step}</span>
            <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}