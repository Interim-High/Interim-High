import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <main className="relative w-full h-[2000px]">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/home/hero/herosection.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col items-center space-y-8 relative">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
          Danphelink Academy
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
            href="/admission"
            className="px-10 py-4 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-16 px-28">
        <div className="flex flex-row bg-[#EBE3E3] w-full rounded-xl p-10 gap-6  ">
          <div className="max-w-lg p-5">
            <h1 className="text-3xl font-bold text-red-700 mb-4">
              Your College Adventure
            </h1>
            <p className="text-lg text-justify">
              Embark on a path of personal and professional growth with us,
              where innovation meets opportunity.
            </p>
            <Link
              href="/apply"
              className="mt-6 inline-block px-10 py-4 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-500 hover:text-white hover:scale-105"
            >
              Read More
            </Link>
          </div>

          <div>
            <Image
              src="/images/about/adventure.png"
              alt="Academic Adventure"
              layout="responsive"
              width={357}
              height={295}
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <h1>Our Programs</h1>
        <p>
          Our programs offer a perfect balance of theoretical knowledge,
          practical application, and observational learning, creating dynamic
          and engaging environments beyond traditional classrooms.
        </p>
      </div>
    </main>
  );
}

export default Main;
