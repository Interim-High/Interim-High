import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <main className="relative w-full h-[2000px]">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/home/hero/hero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
          PADMAWATI International College
        </h1>

        <p className="text-lg md:text-xl text-gray-700 text-center tracking-wide">
          Embark Your Journey
        </p>

        <div className="flex space-x-6 mt-6">
          <Link
            href="/contact"
            className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-200 via-gray-300 to-gray-200 rounded-full shadow-xl hover:from-orange-300 hover:via-gray-400 hover:to-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/apply"
            className="px-10 py-4 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
