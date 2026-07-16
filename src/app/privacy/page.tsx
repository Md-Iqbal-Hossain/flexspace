import { ShieldCheck, Calendar, Lock, Globe } from "lucide-react";

export default function PrivacyTermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8 mb-8">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Compliance & Security</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Privacy Policy & Terms of Service</h1>
          <p className="text-xs text-slate-400 mt-1">Last revised: July 16, 2026</p>
        </div>

        {/* Content grid with stylized sections */}
        <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <section className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Globe className="w-4 h-4 text-indigo-600" />
              <h2>1. Agreement to Terms</h2>
            </div>
            <p className="text-xs text-slate-500">
              By registering an account and listing your workspace properties on FlexSpace, you agree to comply with our hosting rules and standard operational frameworks. Our API and services are designed to allow transparent host management and simplified user exploration.
            </p>
          </section>

          <section className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Lock className="w-4 h-4 text-indigo-600" />
              <h2>2. Information Security & Data Protection</h2>
            </div>
            <p className="text-xs text-slate-500">
              We care about your profile security. FlexSpace uses secure authentication tokens (JWT) to safeguard your hosting session credentials. Data stored in your workspace catalog (locations, hourly or daily rates, descriptions) are rendered dynamically on the explore portal and can be easily managed or permanently deleted by the listing host at any time.
            </p>
          </section>

          <section className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <h2>3. Listing Integrity Guidelines</h2>
            </div>
            <p className="text-xs text-slate-500">
              All hosts listing open desks, conference halls, or entire private offices must supply accurate location coordinates, true representative workspace descriptions, and precise pricing. FlexSpace reserves the right to suspend host accounts found inputting intentionally misleading or fraudulent workspace data.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}