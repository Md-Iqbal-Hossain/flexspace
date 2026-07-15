// "use client";
// import { useState } from "react";
// import { Mail, KeyRound, ArrowRight } from "lucide-react";

// interface LoginFormProps {
//   onSubmit: (email: string, pass: string) => void;
//   isLoading: boolean;
// }

// export default function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(email, password);
//   };

//   const triggerDemo = () => {
//     setEmail("developer.iqbal@flexspace.com");
//     setPassword("SecurePass2026!");
//   };

//   return (
//     <div className="space-y-4">
//       {/* 1-Click Fast Track Demo Login Action Box */}
//       <button
//         type="button"
//         onClick={triggerDemo}
//         className="w-full bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200/60 text-indigo-700 text-xs font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
//       >
//         ⚡ Click Here for 1-Touch Demo Login
//       </button>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Email */}
//         <div className="space-y-1">
//           <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Email Address</label>
//           <div className="relative">
//             <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <input
//               type="email"
//               placeholder="you@company.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
//               required
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="space-y-1">
//           <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Password</label>
//           <div className="relative">
//             <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
//               required
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-400 text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2"
//         >
//           {isLoading ? (
//             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//           ) : (
//             <>
//               <span>Authenticate Workspace</span>
//               <ArrowRight className="w-4 h-4" />
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// ******************************

// src/components/auth/LoginForm.tsx
"use client";
import { useState } from "react";
import { Mail, KeyRound, ArrowRight } from "lucide-react";

interface LoginFormProps {
  onSubmit: (email: string, pass: string) => void;
  isLoading: boolean;
}

export default function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Input */}
      <div className="space-y-1">
        <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-1">
        <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">
          Password
        </label>
        <div className="relative">
          <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-400 text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <>
            <span>Authenticate Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}