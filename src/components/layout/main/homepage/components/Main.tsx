import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <main className="relative w-full">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/home/hero/hero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* <div className="flex flex-col items-center justify-center text-center px-6 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            MyWebsite
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          Discover amazing content, explore endless opportunities, and join our
          growing community. Your journey begins here.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/get-started"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="px-6 py-3 text-lg font-medium text-blue-600 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center space-y-6 relative -top-5">
        <h1 className="text-5xl font-bold text-gray-900 text-center">
          PADMAWATI International College
        </h1>

        <p className="text-lg md:text-xl text-gray-600 text-center tracking-wide">
          Embark Your Journey
        </p>

        <div className="flex space-x-4">
          <Link
            href="/contact"
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transition duration-300"
          >
            Contact Us
          </Link>

          <Link
            href="/apply"
            className="px-8 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div> */}

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
