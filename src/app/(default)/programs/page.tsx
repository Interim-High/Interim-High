"use client";
import React, { useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { MainNav, MobileNav } from "@/components/layout/main/homepage/HomePage";
import CardSection from "@/components/layout/main/program/CardSection";
import Hero from "@/components/layout/main/program/Main";

function ProgramPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen relative">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative">
        <Hero />
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <CardSection />
      <Footer />
    </div>
  );
}

export default ProgramPage;
