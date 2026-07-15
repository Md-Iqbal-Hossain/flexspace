// export default function Stats() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
//       <div className="bg-white rounded-2xl border border-gray-100 shadow-xl grid grid-cols-2 lg:grid-cols-4 p-6 md:p-8 text-center divide-x divide-gray-100">
//         <div>
//           <p className="text-3xl md:text-4xl font-bold text-slate-900">120+</p>
//           <p className="text-gray-500 text-xs mt-1">Premium Locations</p>
//         </div>
//         <div>
//           <p className="text-3xl md:text-4xl font-bold text-slate-900">45k+</p>
//           <p className="text-gray-500 text-xs mt-1">Active Nomads</p>
//         </div>
//         <div>
//           <p className="text-3xl md:text-4xl font-bold text-slate-900">99.8%</p>
//           <p className="text-gray-500 text-xs mt-1">Uptime SLA Wi-Fi</p>
//         </div>
//         <div>
//           <p className="text-3xl md:text-4xl font-bold text-slate-900">4.9/5</p>
//           <p className="text-gray-500 text-xs mt-1">User Satisfaction</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// **********************

// src/components/home/Stats.tsx
export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
      {/* Removed -mt-12 to prevent overlapping your Hero's interactive slider.
        Switched from 'divide-x' to clean border styles that adapt correctly on mobile viewports.
      */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-lg grid grid-cols-2 lg:grid-cols-4 p-6 md:p-8 text-center gap-y-6 lg:gap-y-0">
        
        {/* Stat 1 */}
        <div className="border-r border-slate-100 last:border-r-0 lg:border-r">
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">120+</p>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-1.5">Premium Locations</p>
        </div>

        {/* Stat 2 */}
        <div className="lg:border-r border-slate-100">
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">45k+</p>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-1.5">Active Nomads</p>
        </div>

        {/* Stat 3 */}
        <div className="border-r border-slate-100 last:border-r-0 lg:border-r">
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">99.8%</p>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-1.5">Uptime SLA Wi-Fi</p>
        </div>

        {/* Stat 4 */}
        <div>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">4.9/5</p>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-1.5">User Satisfaction</p>
        </div>

      </div>
    </section>
  );
}