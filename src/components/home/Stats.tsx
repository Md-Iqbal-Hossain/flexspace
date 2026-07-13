export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl grid grid-cols-2 lg:grid-cols-4 p-6 md:p-8 text-center divide-x divide-gray-100">
        <div>
          <p className="text-3xl md:text-4xl font-bold text-slate-900">120+</p>
          <p className="text-gray-500 text-xs mt-1">Premium Locations</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold text-slate-900">45k+</p>
          <p className="text-gray-500 text-xs mt-1">Active Nomads</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold text-slate-900">99.8%</p>
          <p className="text-gray-500 text-xs mt-1">Uptime SLA Wi-Fi</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold text-slate-900">4.9/5</p>
          <p className="text-gray-500 text-xs mt-1">User Satisfaction</p>
        </div>
      </div>
    </section>
  );
}