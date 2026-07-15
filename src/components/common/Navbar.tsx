"use client";
import { useState, useEffect } from "react";
import Link from "next/navigation";
import { useRouter } from "next/navigation";
import { Menu, X, Briefcase, LayoutDashboard, PlusCircle, Compass, Home, Info } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // Sync state tracking across page operations
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("flexspace_auth");
      setIsLoggedIn(token === "authenticated");
    };

    checkAuthStatus();
    window.addEventListener("storage_auth_update", checkAuthStatus);
    return () => window.removeEventListener("storage_auth_update", checkAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("flexspace_auth");
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <button onClick={() => router.push("/")} className="flex items-center gap-2 text-xl font-black text-slate-900 tracking-tight text-left cursor-pointer">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
              <Briefcase className="w-4 h-4" />
            </div>
            <span>Flex<span className="text-indigo-600">Space</span></span>
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-wider">
            {!isLoggedIn ? (
              <>
                {/* MINIMUM 3 ROUTES (LOGGED OUT) */}
                <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <button onClick={() => router.push("/spaces")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Compass className="w-3.5 h-3.5" /> Explore
                </button>
                <button onClick={() => router.push("/about")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Info className="w-3.5 h-3.5" /> About Us
                </button>
                
                <div className="h-4 w-px bg-slate-200 mx-2"></div>
                <button 
                  onClick={() => router.push("/login")}
                  className="bg-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition cursor-pointer normal-case tracking-normal"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                {/* MINIMUM 5 ROUTES (LOGGED IN) */}
                <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <button onClick={() => router.push("/spaces")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Compass className="w-3.5 h-3.5" /> Explore
                </button>
                <button onClick={() => router.push("/about")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <Info className="w-3.5 h-3.5" /> About Us
                </button>
                <button onClick={() => router.push("/dashboard")} className="text-indigo-600 font-extrabold transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                </button>
                <button onClick={() => router.push("/spaces/add")} className="hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer uppercase">
                  <PlusCircle className="w-3.5 h-3.5" /> Add Space
                </button>

                <div className="h-4 w-px bg-slate-200 mx-2"></div>
                <button 
                  onClick={handleLogout} 
                  className="bg-slate-900 hover:bg-red-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition cursor-pointer normal-case tracking-normal"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 rounded-lg hover:bg-slate-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}