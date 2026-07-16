// // src/app/login/page.tsx
// "use client";

// import { useState, useEffect, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { ShieldAlert, CheckCircle2 } from "lucide-react";
// import LoginForm from "@/components/auth/LoginForm";
// import SocialAuth from "@/components/auth/SocialAuth";

// function LoginContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);

//   // Check if user redirected back successfully after registering an account database record
//   useEffect(() => {
//     if (searchParams.get("registered") === "true") {
//       setShowSuccessAlert(true);
//     }
//   }, [searchParams]);

//   const handleLoginSubmit = async (email: string, pass: string) => {
//     setError("");
//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password: pass })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Authentication failed");
//       }

//       // Save token signatures securely into browser application context memory
//       localStorage.setItem("flexspace_auth", "authenticated");
//       localStorage.setItem("flexspace_token", data.token);
      
//       // Dispatch explicit update event to lock-in the 5 routes layout state transformation
//       window.dispatchEvent(new Event("storage_auth_update"));
      
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message || "Invalid credential validation token match.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 space-y-6">
      
//       <div className="text-center space-y-2">
//         <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back to FlexSpace</h1>
//         <p className="text-gray-500 text-xs font-medium">Access your scheduled workspace network.</p>
//       </div>

//       {showSuccessAlert && (
//         <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
//           <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
//           <span>Account created successfully! Please sign in below.</span>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
//           <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
//           <span>{error}</span>
//         </div>
//       )}

//       <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
      
//       <SocialAuth />

//       <p className="text-center text-xs font-medium text-gray-500">
//         New to our workspace network?
//         <button
//           type="button"
//           onClick={() => router.push("/register")}
//           className="text-indigo-600 font-bold hover:underline transition ml-1 cursor-pointer"
//         >
//           Create an account
//         </button>
//       </p>
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
//       <Suspense fallback={
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center min-h-[350px]">
//           <span className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></span>
//         </div>
//       }>
//         <LoginContent />
//       </Suspense>
//     </main>
//   );
// }

// *******************************************

// src/app/login/page.tsx
// "use client";

// import { useState, useEffect, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { ShieldAlert, CheckCircle2 } from "lucide-react";
// import LoginForm from "@/components/auth/LoginForm";
// import SocialAuth from "@/components/auth/SocialAuth";

// function LoginContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);

//   // Check if user redirected back successfully after registering an account database record
//   useEffect(() => {
//     if (searchParams.get("registered") === "true") {
//       setShowSuccessAlert(true);
//     }
//   }, [searchParams]);

//   const handleLoginSubmit = async (email: string, pass: string) => {
//     setError("");
//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password: pass })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Authentication failed");
//       }

//       // Save token signatures securely into browser application context memory
//       localStorage.setItem("flexspace_auth", "authenticated");
//       localStorage.setItem("flexspace_token", data.token);
      
//       // Dispatch explicit update event to lock-in the 5 routes layout state transformation
//       window.dispatchEvent(new Event("storage_auth_update"));
      
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message || "Invalid credential validation token match.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 space-y-6">
      
//       <div className="text-center space-y-2">
//         <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back to FlexSpace</h1>
//         <p className="text-gray-500 text-xs font-medium">Access your scheduled workspace network.</p>
//       </div>

//       {showSuccessAlert && (
//         <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
//           <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
//           <span>Account created successfully! Please sign in below.</span>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
//           <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
//           <span>{error}</span>
//         </div>
//       )}

//       <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
      
//       <SocialAuth />

//       <p className="text-center text-xs font-medium text-gray-500">
//         New to our workspace network?
//         <button
//           type="button"
//           onClick={() => router.push("/register")}
//           className="text-indigo-600 font-bold hover:underline transition ml-1 cursor-pointer"
//         >
//           Create an account
//         </button>
//       </p>
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
//       <Suspense fallback={
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center min-h-[350px]">
//           <span className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></span>
//         </div>
//       }>
//         <LoginContent />
//       </Suspense>
//     </main>
//   );
// }

// **************************************

"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";
import SocialAuth from "@/components/auth/SocialAuth";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Check if user redirected back successfully after registering an account database record
  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setShowSuccessAlert(true);
    }
  }, [searchParams]);

  const handleLoginSubmit = async (email: string, pass: string) => {
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Save token signatures securely into browser application context memory
      localStorage.setItem("flexspace_auth", "authenticated");
      localStorage.setItem("flexspace_token", data.token);
      
      // Dispatch explicit update event to lock-in the 5 routes layout state transformation
      window.dispatchEvent(new Event("storage_auth_update"));
      
      // 🟢 REDIRECT FIX: Changed from "/dashboard" to "/" to load the home page natively on sign-in success
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Invalid credential validation token match.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 space-y-6">
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back to FlexSpace</h1>
        <p className="text-gray-500 text-xs font-medium">Access your scheduled workspace network.</p>
      </div>

      {showSuccessAlert && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Account created successfully! Please sign in below.</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5">
          <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
      
      <SocialAuth />

      <p className="text-center text-xs font-medium text-gray-500">
        New to our workspace network?
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="text-indigo-600 font-bold hover:underline transition ml-1 cursor-pointer"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
      <Suspense fallback={
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center min-h-[350px]">
          <span className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></span>
        </div>
      }>
        <LoginContent />
      </Suspense>
    </main>
  );
}