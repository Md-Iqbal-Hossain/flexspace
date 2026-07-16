// "use client";
// import { useState } from "react";
// import { User, Mail, KeyRound, ArrowRight } from "lucide-react";

// interface RegisterFormProps {
//   onSubmit: (name: string, email: string, pass: string) => void;
//   isLoading: boolean;
// }

// export default function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(name, email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Full Name */}
//       <div className="space-y-1">
//         <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Full Name</label>
//         <div className="relative">
//           <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Md. Iqbal Hossain"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
//             required
//           />
//         </div>
//       </div>

//       {/* Email */}
//       <div className="space-y-1">
//         <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Email Address</label>
//         <div className="relative">
//           <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           <input
//             type="email"
//             placeholder="you@company.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
//             required
//           />
//         </div>
//       </div>

//       {/* Password */}
//       <div className="space-y-1">
//         <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Password</label>
//         <div className="relative">
//           <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           <input
//             type="password"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
//             required
//           />
//         </div>
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isLoading}
//         className="w-full bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-400 text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2"
//       >
//         {isLoading ? (
//           <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//         ) : (
//           <>
//             <span>Register Credentials</span>
//             <ArrowRight className="w-4 h-4" />
//           </>
//         )}
//       </button>
//     </form>
//   );
// }

// ****************************

"use client";
import { useState } from "react";
import { User, Mail, KeyRound, ArrowRight, Eye, EyeOff } from "lucide-react"; // 🟢 Added Eye & EyeOff imports

interface RegisterFormProps {
  onSubmit: (name: string, email: string, pass: string) => void;
  isLoading: boolean;
}

export default function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 🟢 Toggle tracking state parameter status

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div className="space-y-1">
        <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Full Name</label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Md. Iqbal Hossain"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Email Address</label>
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

      {/* Password with dynamic view switching element */}
      <div className="space-y-1">
        <label className="text-slate-700 text-xs font-bold uppercase tracking-wider block">Password</label>
        
        {/* Relative outer parent wrapper */}
        <div className="relative">
          <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            // 🟢 Toggles standard inputs between secure dots or readable clear text properties
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // 🟢 pr-12 added to prevent text strings from bleeding under the right floating button icon
            className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 pl-10 pr-12 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
            required
          />
          
          {/* 🟢 Action toggle layout button styled to float inside the right boundary */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-600 transition cursor-pointer"
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
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
            <span>Register Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}