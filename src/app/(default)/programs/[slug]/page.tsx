"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { MainNav, MobileNav } from "@/components/layout/main/homepage/HomePage";
import { Details } from "@/components/layout/main/program/content";
import Curriculum from "@/components/layout/main/programdetail/Curriculum";
import Information from "@/components/layout/main/programdetail/Information";
import Main from "@/components/layout/main/programdetail/Main";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function ProgramDetailPage() {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const program = Details.find((p) => p.slug === slug);

  if (!program) {
    return(
      
      <div className="flex flex-col justify-center items-center w-full h-screen p-6 bg-gradient-to-br from-orange-200 via-gray-300 to-gray-200 shadow-lg rounded-lg">
       <Image
       src= "/images/program/programerror.png"
       alt='error page'
       height= {600}
       width={600}

       />
        <p className="mt-3 text-2xl text-red-600">Oops! The program you're looking for doesn't exist.</p>
        <Link href="/" passHref className='text-xl font-semibold text-orange-600 p-4  rounded-full  mt-2 border border-orange-600 hover:bg-orange-600 hover:text-white'>
         Go Back
         </Link>
      </div>
    )
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
