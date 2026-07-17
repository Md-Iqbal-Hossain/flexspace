"use client";
import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function FeedbackPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;
    
    // Simulate API submission
    setSubmitted(true);
    setSubject("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full">
            Help Us Improve
          </span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">
            Share Your Feedback
          </h1>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Have a suggestion, found a bug, or want to request a feature? Let our product team know!
          </p>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs font-semibold flex items-center gap-3 mb-6 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <p className="font-bold text-emerald-950">Thank you for your feedback!</p>
              <p className="text-emerald-700/80 mt-0.5">We review every submission carefully to build a better workspace experience.</p>
            </div>
          </div>
        )}

        {/* Form Box */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Feature Request: Multi-day discounts"
                className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Message Details
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Submit Feedback
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}