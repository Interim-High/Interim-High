"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { MainNav, MobileNav } from "@/components/layout/main/homepage/HomePage";
import HeroSection from "@/components/layout/main/newsupdates/hero";
import MainSection from "@/components/layout/main/newsupdates/mainsection";
import { useState } from "react";

function NewsandUpdates() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen relative">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative">
        <HeroSection />
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MainSection />
      <Footer />
    </div>
  );
}
export default NewsandUpdates;
