import React from "react";
import { List } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/50  shadow-lg  ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src="/images/home/nav/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-3 rounded-lg shadow-lg"
          />
          {/* <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            DanpheLink
          </span> */}
        </div>

        <nav className="hidden md:flex space-x-8">
          {["About", "Contact", "Programs", "Events", "News & Updates"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/ & /, "")
                  .replace(/ /g, "-")}`}
                className="relative text-gray-700 font-medium group"
              >
                {/* <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 rounded-md transition duration-300"></span> */}
                <span className="relative hover:text-orange-600 transition duration-300">
                  {item}
                </span>
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <List size={28} />
        </button>
      </div>
    </header>
  );
}

export default Header;
