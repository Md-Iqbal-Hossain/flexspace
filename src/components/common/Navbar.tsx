// src/components/common/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Temporary hardcoded true/false to check the dynamic 3 routes vs 5 routes condition
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <Briefcase className="w-6 h-6" />
            <span>FlexSpace</span>
          </Link>

          {/* Desktop Links (Will change routes depending on login state) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/spaces" className="hover:text-indigo-600 transition">Explore</Link>
            <Link href="/about" className="hover:text-indigo-600 transition">About Us</Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
                <button 
                  onClick={() => setIsLoggedIn(false)} 
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-red-100 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Sign In
              </Link>
            )}
          </div>

          {/* Hamburger Mobile Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 flex flex-col text-sm font-medium text-gray-600">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-indigo-600">Home</Link>
          <Link href="/spaces" onClick={() => setIsOpen(false)} className="py-2 hover:text-indigo-600">Explore</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 hover:text-indigo-600">About Us</Link>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="py-2 hover:text-indigo-600">Dashboard</Link>
              <button onClick={() => { setIsLoggedIn(false); setIsOpen(false); }} className="w-full text-left py-2 text-red-600">Logout</button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center bg-indigo-600 text-white py-2 rounded-md block mt-2">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
}