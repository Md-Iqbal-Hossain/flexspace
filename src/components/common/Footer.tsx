// src/components/common/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm py-12 border-t border-slate-900 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">FlexSpace</h3>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            Premium, production-ready flexible workspace finder layout built for modern job hunts.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 flex flex-col">
            <Link href="/about" className="hover:text-white transition">About Vision</Link>
            <Link href="/spaces" className="hover:text-white transition">Explore Items</Link>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Mirpur DOHS, Dhaka</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-400" /> +880 1322 901105</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-400" /> support@flexspace.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}