"use client";
import { useRouter } from "next/navigation";

export default function SocialAuth() {
  const router = useRouter();

  const handleSocialRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <div className="space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <span className="relative bg-white px-3 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
          Or Continue With
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button 
          type="button" 
          onClick={handleSocialRedirect} 
          className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.94 1 12 1 7.24 1 3.2 3.73 1.24 7.72l3.84 2.98C6.02 7.54 8.78 5.04 12 5.04z"/>
            <path fill="#4285F4" d="M23.48 12.25c0-.82-.07-1.6-.2-2.35H12v4.45h6.44c-.28 1.47-1.11 2.72-2.35 3.56l3.66 2.84c2.14-1.98 3.37-4.89 3.37-8.5z"/>
            <path fill="#FBBC05" d="M5.08 14.7C4.84 13.98 4.7 13.21 4.7 12c0-1.21.14-1.98.38-2.7L1.24 6.32C.45 7.97 0 9.91 0 12c0 2.09.45 4.03 1.24 5.68l3.84-2.98z"/>
            <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-4.3 1.09-3.22 0-5.98-2.5-6.92-5.66l-3.84 2.98C3.2 20.27 7.24 23 12 23z"/>
          </svg>
          Google
        </button>
        
        <button 
          type="button" 
          onClick={handleSocialRedirect} 
          className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>
      </div>
    </div>
  );
}