import Image from "next/image";
import React from "react";

function Main({ title, image }) {
  return (
    <main className="w-full relative">
      <HeroSection
        title={title}
        subtitle="Explore our programs"
        imageSrc={image || "/images/program/hero.png"}
      />
    </main>
  );
}

export default Main;

const HeroSection = ({ title, subtitle, imageSrc }) => (
  <div className="min-h-[60vh] w-full">
    <Image
      src={imageSrc}
      alt="Hero Background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />

    <div className="absolute inset-0 bg-black opacity-60"></div>

    <div className="relative flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-white text-8xl font-bold">{title}</h1>
      {/* <p className="text-red-600 text-4xl mt-4">{subtitle}</p> */}
    </div>
  </div>
);
