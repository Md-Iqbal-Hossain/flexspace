'use client'
export default function Newsletter() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Get Exclusive Workspace Credits</h2>
        <p className="text-indigo-100 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          Join our weekly network digest to get token drop discounts, community workspace deals, and local startup updates.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input 
            type="email" 
            placeholder="Enter your professional email address" 
            required
            className="flex-grow bg-white text-slate-900 px-4 py-3 rounded-xl text-sm focus:outline-none placeholder-gray-400"
          />
          <button type="submit" className="bg-slate-900 hover:bg-slate-950 text-white font-semibold text-sm px-6 py-3 rounded-xl transition whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}