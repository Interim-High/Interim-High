"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { underCards } from "@/components/layout/main/program/CardSection";
import Curriculum from "@/components/layout/main/programdetail/Curriculum";
import Information from "@/components/layout/main/programdetail/Information";
import Main from "@/components/layout/main/programdetail/Main";
import { useParams } from "next/navigation";
import React from "react";

function ProgramDetailPage() {
  const { slug } = useParams();
  const program = underCards.find((p) => p.slug === slug);

  if (!program) {
    return <p className="text-center text-red-500">Program not found!</p>;
  }
  console.log(program);
  return (
    <div>
      <Header />
      <Main title={program.title} image={program.imageSrc} />
      <Information />

      <Curriculum />
      <Footer />
    </div>
  );
}

export default ProgramDetailPage;
