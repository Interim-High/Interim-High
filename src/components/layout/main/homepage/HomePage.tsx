"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Footer from "../../footer/Footer";
import Main from "./components/Main";
import Header from "../../header/Header";
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen">
      <MainNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="relative">
        <Main />

        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

export const MainNav = ({ toggleMenu, isMenuOpen }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src="/images/home/nav/AcademicLogoHeader.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-3"
          />
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          {[
            "Home",
            "About",
            "Contact",
            "Programs",
            "Events",
            "News & Updates",
          ].map((item) => {
            const href =
              item === "Home"
                ? "/"
                : `/${item
                    .toLowerCase()
                    .replace(/ & /, "")
                    .replace(/ /g, "-")}`;

            const isActive =
              item === "Home" ? pathname === href : pathname.startsWith(href);

            return (
              <Link
                key={item}
                href={href}
                className={`relative text-gray-700 font-medium transition duration-300 ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "hover:text-orange-600"
                }`}
              >
                {item}
              </Link>
            );
          })}

          <Link
            href="/admission"
            className="px-5 py-1 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Apply Now
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
    </header>
  );
};

export const MobileNav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-xl flex flex-col items-center p-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <nav className="flex flex-col  space-y-6  mt-10">
          {[
            "Home",
            "About",
            "Contact",
            "Programs",
            "Events",
            "News & Updates",
          ].map((item) => {
            const href =
              item === "Home"
                ? "/"
                : `/${item
                    .toLowerCase()
                    .replace(/ & /, "")
                    .replace(/ /g, "-")}`;

            return (
              <Link
                key={item}
                href={href}
                className="text-gray-700 text-xl font-medium hover:text-orange-600"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            );
          })}

          <Link
            href="/admission"
            className="mt-4 px-8 py-3 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

// BACKUP----------------------------
// "use client";
// import React from "react";
// import Header from "../../header/Header";
// import Footer from "../../footer/Footer";
// import Main from "./components/Main";
// import { List, X } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// function HomePage() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   return (
//     <div>
//       <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/50 shadow-lg">
//         <div className="container mx-auto flex items-center justify-between p-4">
//           <div className="flex items-center">
//             <Image
//               src="/images/home/nav/AcademicLogoHeader.png"
//               alt="Logo"
//               width={150}
//               height={150}
//               className="mr-3"
//             />
//           </div>

//           <nav className="hidden md:flex space-x-8 items-center">
//             {[
//               "Home",
//               "About",
//               "Contact",
//               "Programs",
//               "Events",
//               "News & Updates",
//             ].map((item) => {
//               const href =
//                 item === "Home"
//                   ? "/"
//                   : `/${item
//                       .toLowerCase()
//                       .replace(/ & /, "")
//                       .replace(/ /g, "-")}`;

//               const isActive =
//                 item === "Home" ? pathname === href : pathname.startsWith(href);

//               return (
//                 <Link
//                   key={item}
//                   href={href}
//                   className="relative text-gray-700 font-medium group"
//                 >
//                   <span
//                     className={`relative transition duration-300 ${
//                       isActive
//                         ? "text-orange-600 font-semibold"
//                         : "hover:text-orange-600"
//                     }`}
//                   >
//                     {item}
//                   </span>
//                 </Link>
//               );
//             })}

//             <Link
//               href="/admission"
//               className="px-5 py-1 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               Apply Now
//             </Link>
//           </nav>

//           <button
//             className="md:hidden p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? <X size={28} /> : <List size={28} />}
//           </button>
//         </div>
//       </header>
//       <div className="relative">
//         <Main />
//         <div
//           className={`fixed top-0 left-0 w-20 h-full bg-white shadow-lg flex flex-col items-center justify-center transition-transform duration-300 ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } z-50`}
//         >
//           <button
//             className="absolute top-6 right-6 p-2 text-gray-700 hover:text-red-500"
//             onClick={toggleMenu}
//             aria-label="Close Menu"
//           >
//             <X size={32} />
//           </button>

//           <nav className="flex flex-col items-center space-y-6 text-lg">
//             {[
//               "Home",
//               "About",
//               "Contact",
//               "Programs",
//               "Events",
//               "News & Updates",
//             ].map((item) => {
//               const href =
//                 item === "Home"
//                   ? "/"
//                   : `/${item
//                       .toLowerCase()
//                       .replace(/ & /, "")
//                       .replace(/ /g, "-")}`;

//               return (
//                 <Link
//                   key={item}
//                   href={href}
//                   className="text-gray-700 text-2xl font-medium hover:text-orange-600"
//                   onClick={toggleMenu}
//                 >
//                   {item}
//                 </Link>
//               );
//             })}

//             <Link
//               href="/admission"
//               className="mt-4 px-8 py-3 text-lg font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
//               onClick={toggleMenu} // Close menu on click
//             >
//               Apply Now
//             </Link>
//           </nav>
//         </div>

//         {isMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40 md:hidden"
//             onClick={toggleMenu}
//           ></div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default HomePage;
