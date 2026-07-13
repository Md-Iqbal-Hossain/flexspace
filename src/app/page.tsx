// src/app/page.tsx
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <main className="w-full bg-slate-50">
      <Hero />
      <Stats />
      <Features />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </main>
  );
}