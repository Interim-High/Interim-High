"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { useParams } from "next/navigation";
import React from "react";

function ProgramDetailPage() {
  const { slug } = useParams();
  return (
    <div>
      <Header />
      {slug}
      <Footer />
    </div>
  );
}

export default ProgramDetailPage;
