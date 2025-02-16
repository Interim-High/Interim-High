"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { MainNav, MobileNav } from "@/components/layout/main/homepage/HomePage";
import { Details } from "@/components/layout/main/program/content";
import Curriculum from "@/components/layout/main/programdetail/Curriculum";
import Information from "@/components/layout/main/programdetail/Information";
import Main from "@/components/layout/main/programdetail/Main";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function ProgramDetailPage() {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const program = Details.find((p) => p.slug === slug);

  if (!program) {
    return <p className="text-center text-red-500">Program not found!</p>;
  }

  return (
    <div className="min-h-screen relative">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative">
        <Main title={program.title} image={program.imageSrc} />
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <Information />

      <Curriculum />
      <Footer />
    </div>
  );
}

export default ProgramDetailPage;
