"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
            Contact Support
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3">How can we assist you?</h1>
          <p className="text-slate-500 text-sm mt-2">
            Have questions about listing your workspace or booking a corporate unit? Reach out, and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Support Channels Block */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4">Direct Touchpoints</h2>
              
              <div className="space-y-4 text-xs font-medium text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Email Us</p>
                    <p className="text-slate-800 text-sm mt-0.5">support@flexspace.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Call Support</p>
                    <p className="text-slate-800 text-sm mt-0.5">+1 (800) 555-FLEX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Headquarters</p>
                    <p className="text-slate-800 text-sm mt-0.5">100 Pine Street, Suite 1200<br />San Francisco, CA 94111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Message Block */}
          <div className="md:col-span-2">
            <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-slate-900">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-bold">Send a Secure Message</h2>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex flex-col items-center text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3" />
                  <h3 className="text-sm font-bold">Message Transmitted Successfully!</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Thank you for contacting FlexSpace. A system specialist has been assigned to your query and will reply shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Md. Iqbal Hossain"
                        className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="iqbal@company.com"
                        className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1.5">How can we help?</label>
                    <textarea 
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your inquiry in details..."
                      className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-600/10"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}