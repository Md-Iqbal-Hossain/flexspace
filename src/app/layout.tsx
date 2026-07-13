// src/app/layout.tsx
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata = {
  title: "FlexSpace | Premium Workspace Booking",
  description: "Book hot desks, meeting rooms, and private offices cleanly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* pt-16 protects components from hiding under the fixed header */}
        <div className="pt-16 flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}