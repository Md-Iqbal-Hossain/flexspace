// src/app/register/page.tsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ShieldAlert } from "lucide-react";
// import RegisterForm from "@/components/auth/RegisterForm";
// import SocialAuth from "@/components/auth/SocialAuth";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleRegisterSubmit = async (name: string, email: string, pass: string) => {
//     setError("");
//     setIsLoading(true);

//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid, corporate email structure.");
//       setIsLoading(false);
//       return;
//     }

//     if (pass.length < 6) {
//       setError("Security error: Password must be at least 6 characters.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password: pass })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Registration failed");
//       }

//       // SUCCESS: Push directly to login layout with registration success parameter flag
//       router.push("/login?registered=true");
//     } catch (err: any) {
//       setError(err.message || "Registration gateway failure. Please retry.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
//       <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 space-y-6">
        
//         <div className="text-center space-y-2">
//           <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Enterprise Account</h1>
//           <p className="text-gray-500 text-xs font-medium">Sign up to begin micro-booking modern corporate units.</p>
//         </div>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
//             <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
//             <span>{error}</span>
//           </div>
//         )}

//         <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
        
//         <SocialAuth />

//         <p className="text-center text-xs font-medium text-gray-500">
//           Already possessing credentials?
//           <button
//             type="button"
//             onClick={() => router.push("/login")}
//             className="text-indigo-600 font-bold hover:underline transition ml-1 cursor-pointer"
//           >
//             Sign in here
//           </button>
//         </p>
//       </div>
//     </main>
//   );
// }

// **************************************

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialAuth from "@/components/auth/SocialAuth";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterSubmit = async (name: string, email: string, pass: string) => {
    setError("");
    setIsLoading(true);

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid, corporate email structure.");
      setIsLoading(false);
      return;
    }

    if (pass.length < 6) {
      setError("Security error: Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: pass })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // SUCCESS: Push directly to login layout with registration success parameter flag
      router.push("/login?registered=true");
    } catch (err: any) {
      setError(err.message || "Registration gateway failure. Please retry.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Enterprise Account</h1>
          <p className="text-gray-500 text-xs font-medium">Sign up to begin micro-booking modern corporate units.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
        
        <SocialAuth />

        <p className="text-center text-xs font-medium text-gray-500">
          Already possessing credentials?
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-indigo-600 font-bold hover:underline transition ml-1 cursor-pointer"
          >
            Sign in here
          </button>
        </p>
      </div>
    </main>
  );
}