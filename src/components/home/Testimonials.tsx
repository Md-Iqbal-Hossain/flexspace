export default function Testimonials() {
  const reviews = [
    { text: "FlexSpace completely revolutionized how our remote engineering team collaborates. Booking shared glass boardrooms for sprints takes seconds.", author: "Sarah Jenkins", role: "CTO, CloudScale Inc." },
    { text: "The fiber internet speeds here are absolutely stellar. The environment is professional and free from cafe distractions.", author: "Rahat Karim", role: "Full-Stack Web Developer" }
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Approved by Elite Professionals</h2>
          <p className="text-gray-400 text-sm">Hear what industry-leading engineers and remote startup founders think.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((test, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4">
              <p className="text-gray-300 text-sm italic leading-relaxed">"{test.text}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{test.author}</h4>
                <p className="text-indigo-400 text-xs">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}