"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ContactHero from "@/components/layout/main/contact/hero";
import MainContact from "@/components/layout/main/contact/Main";
import { MainNav, MobileNav } from "@/components/layout/main/homepage/HomePage";
import { useState } from "react";

function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen relative">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative">
        <ContactHero />
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MainContact />
      <Footer />
    </div>
  );
}

export default ContactPage;
