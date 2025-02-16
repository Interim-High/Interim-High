"use client";
import { useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { MainNav, MobileNav } from "../homepage/HomePage";
import Achievement from "./Achievement";
import AboutAdventure from "./adventure";
import Facility from "./Facilities";
import Governance from "./governance";
//import Governance from "./governance";
import AboutHero from "./hero";
import PolicySection from "./policy";
import StorySection from "./story";

function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen relative">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative">
        <AboutHero />
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <AboutAdventure />
      <StorySection />
      <Achievement />
      <Governance />
      <Facility />
      <PolicySection />
      <Footer />
    </div>
  );
}
export default AboutPage;
