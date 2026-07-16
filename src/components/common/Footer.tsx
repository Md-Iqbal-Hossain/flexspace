// // src/components/common/Footer.tsx
// import Link from "next/link";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-slate-400 text-sm py-12 border-t border-slate-900 w-full mt-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-white font-bold text-lg mb-4">FlexSpace</h3>
//           <p className="text-slate-400 leading-relaxed max-w-sm">
//             Premium, production-ready flexible workspace finder layout built for modern job hunts.
//           </p>
//         </div>
//         <div>
//           <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 flex flex-col">
//             <Link href="/about" className="hover:text-white transition">About Vision</Link>
//             <Link href="/spaces" className="hover:text-white transition">Explore Items</Link>
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-white font-semibold mb-4">Contact Info</h4>
//           <ul className="space-y-3">
//             <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Mirpur DOHS, Dhaka</li>
//             <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-400" /> +880 1322 901105</li>
//             <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-400" /> support@flexspace.com</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// **************

// src/components/common/Footer.tsx
// import Link from "next/link";
// import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 w-full mt-auto">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
//         {/* Brand Column */}
//         <div className="space-y-4">
//           <Link href="/" className="flex items-center gap-2 text-xl font-black text-white tracking-tight">
//             <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
//               <Briefcase className="w-4 h-4" />
//             </div>
//             <span>Flex<span className="text-indigo-500">Space</span></span>
//           </Link>
//           <p className="text-slate-400 leading-relaxed text-xs">
//             Premium, production-ready flexible workspace finder layout built for modern job hunts and rapid corporate micro-booking.
//           </p>
          
//           {/* Social Icons Container with Safe Inline SVGs */}
//           <div className="flex items-center gap-3 pt-2">
//             {/* GitHub SVG */}
//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
//               aria-label="GitHub"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 standard 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
//               </svg>
//             </a>

//             {/* LinkedIn SVG */}
//             <a 
//               href="https://linkedin.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
//               aria-label="LinkedIn"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//               </svg>
//             </a>

//             {/* Twitter/X SVG */}
//             <a 
//               href="https://twitter.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
//               aria-label="Twitter"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//             </a>

//             {/* Facebook SVG */}
//             <a 
//               href="https://facebook.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
//               aria-label="Facebook"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Explore Links */}
//         <div>
//           <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Explore</h4>
//           <ul className="space-y-2.5 flex flex-col text-xs">
//             <Link href="/" className="hover:text-white transition duration-150">Home Platform</Link>
//             <Link href="/spaces" className="hover:text-white transition duration-150">All Workspaces</Link>
//             <Link href="/about" className="hover:text-white transition duration-150">Our Vision</Link>
//           </ul>
//         </div>

//         {/* Security Links */}
//         <div>
//           <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Security</h4>
//           <ul className="space-y-2.5 flex flex-col text-xs">
//             <Link href="/login" className="hover:text-white transition duration-150">Login Gate</Link>
//             <Link href="/register" className="hover:text-white transition duration-150">Registration Portal</Link>
//           </ul>
//         </div>

//         {/* Contact Info Column */}
//         <div className="space-y-4">
//           <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Contact Info</h4>
//           <ul className="space-y-3 text-xs">
//             <li className="flex items-start gap-2.5">
//               <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" /> 
//               <span>Mirpur DOHS, Dhaka, Bangladesh</span>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <Phone className="w-4 h-4 text-indigo-500 shrink-0" /> 
//               <span>+880 1322 901105</span>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <Mail className="w-4 h-4 text-indigo-500 shrink-0" /> 
//               <a href="mailto:support@flexspace.com" className="hover:text-white transition duration-150">
//                 support@flexspace.com
//               </a>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Copyright Strip */}
//       <div className="border-t border-slate-900 bg-slate-950/80 py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
//           <p>© {currentYear} FlexSpace Network. All rights reserved.</p>
//           <div className="flex gap-6">
//             <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
//             <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// *******************************

import Link from "next/link";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 w-full mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-black text-white tracking-tight">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
              <Briefcase className="w-4 h-4" />
            </div>
            <span>Flex<span className="text-indigo-500">Space</span></span>
          </Link>
          <p className="text-slate-400 leading-relaxed text-xs">
            Premium, production-ready flexible workspace finder layout built for modern job hunts and rapid corporate micro-booking.
          </p>
          
          {/* Social Icons Container with Safe Inline SVGs */}
          <div className="flex items-center gap-3 pt-2">
            {/* GitHub SVG */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter/X SVG */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Explore</h4>
          <ul className="space-y-2.5 flex flex-col text-xs">
            <Link href="/" className="hover:text-white transition duration-150">Home Platform</Link>
            <Link href="/spaces" className="hover:text-white transition duration-150">All Workspaces</Link>
            <Link href="/privacy" className="hover:text-white transition duration-150">Privacy & Terms</Link>
          </ul>
        </div>

        {/* Security Links */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Security</h4>
          <ul className="space-y-2.5 flex flex-col text-xs">
            <Link href="/login" className="hover:text-white transition duration-150">Login Gate</Link>
            <Link href="/register" className="hover:text-white transition duration-150">Registration Portal</Link>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Contact Info</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" /> 
              <span>Mirpur DOHS, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-indigo-500 shrink-0" /> 
              <span>+880 1322 901105</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-indigo-500 shrink-0" /> 
              <Link href="/contact" className="hover:text-white transition duration-150">
                support@flexspace.com
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} FlexSpace Network. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/privacy" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition">Support Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}