"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Details } from "../../program/content";
import AdventureImage from "../../about/adventureImage";
const programs = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
];

function Main() {
  const [selectedProgram, setSelectedProgram] = useState("undergraduate");
  const [selectedCategory, setSelectedCategory] = useState("recent-news");

  const categories = [
    { id: "recent-news", label: "Recent News" },
    { id: "announcement", label: "Announcement" },
  ];

  const newsItems = [
    {
      title: "Cultural Preservation in the Digital Age",
      date: "December 31, 2020",
      category: "Web Development",
    },
    {
      title: "The Impact of AI on Modern Economics",
      date: "January 15, 2021",
      category: "Workshop",
    },
    {
      title: "Scientific Breakthroughs in Renewable Energy",
      date: "March 22, 2021",
      category: "Event",
    },
  ];

  const undergraduate = [
    {
      title: "Web Development",
      description:
        "Learn the fundamentals of computer science and programming.",
      image: "/images/home/program/computer.png",
    },
    {
      title: "Cyber Security",
      description:
        "Learn the fundamentals of business administration and management.",
      image: "/images/home/program/business.webp",
    },
    {
      title: "Nursing",
      description: "Learn the fundamentals of nursing and patient care.",
      image: "/images/home/program/nurse.webp",
    },
    {
      title: "Computer Science",
      description:
        "Learn the fundamentals of computer science and programming.",
      image: "/images/home/program/computer.png",
    },
    {
      title: "Business Administration",
      description:
        "Learn the fundamentals of business administration and management.",
      image: "/images/home/program/business.webp",
    },
    {
      title: "Nursing",
      description: "Learn the fundamentals of nursing and patient care.",
      image: "/images/home/program/nurse.webp",
    },
  ];
  const postgraduate = [
    {
      title: "Computer Science 1",
      description:
        "Learn the fundamentals of computer science and programming.",
      image: "/images/home/program/computer.png",
    },
    {
      title: "Business Administration 2",
      description:
        "Learn the fundamentals of business administration and management.",
      image: "/images/home/program/business.webp",
    },
    {
      title: "Nursing",
      description: "Learn the fundamentals of nursing and patient care.",
      image: "/images/home/program/nurse.webp",
    },
    {
      title: "Computer Science",
      description:
        "Learn the fundamentals of computer science and programming.",
      image: "/images/home/program/computer.png",
    },
    {
      title: "Business Administration",
      description:
        "Learn the fundamentals of business administration and management.",
      image: "/images/home/program/business.webp",
    },
    {
      title: "Nursing",
      description: "Learn the fundamentals of nursing and patient care.",
      image: "/images/home/program/nurse.webp",
    },
  ];
  return (
    <main className="relative w-full">
      <div className="relative h-[55vh] w-full">
        <Image
          src="/images/home/hero/herosection.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">
            Danphelink Academy
          </h1>

          <p className="text-lg md:text-xl text-gray-200 tracking-wide mt-4 animate-fade-in">
            Embark Your Journey with Excellence
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <Link
              href="/contact"
              className="px-10 py-4 text-lg font-semibold text-white bg-orange-600 rounded-full shadow-xl hover:bg-orange-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/admission"
              className="relative px-10 py-4 text-lg font-semibold text-orange-600 border-2 border-orange-600 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-16 px-28">
        <div className="flex flex-row bg-gradient-to-tl from-[#dcc7c7] to-[#afafaf] w-full  rounded-xl p-10 gap-6  ">
          <div className=" p-5">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
              <span className="text-[#164561]">Your College </span>Adventure
            </h1>
            <p className="text-lg text-justify">
              Embark on a path of personal and professional growth with us,
              where innovation meets opportunity.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block px-10 py-4 text-lg font-semibold text-orange-600 border-2 border-orange-600 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-500 hover:text-white hover:scale-105"
            >
              Read More
            </Link>
          </div>

          <div>
            <AdventureImage />
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-28  py-8 my-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-4">
          <span className="text-[#164561]">Our </span>Programs
        </h1>
        <p className="text-center text-gray-700 max-w- mx-auto">
          Our programs offer a perfect balance of theoretical knowledge,
          practical application, and observational learning, creating dynamic
          and engaging environments beyond traditional classrooms.
        </p>

        {/* <div className="flex justify-center space-x-6 my-6 border-b border-gray-300 pb-2">
          {programs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSelectedProgram(id)}
              className={`px-4 py-2 text-lg font-medium transition-all duration-300 ${
                selectedProgram === id
                  ? "border-b-4 border-black text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div> */}

        <div>
          <CarouselCards
            items={
              // selectedProgram === "undergraduate" ? undergraduate : postgraduate
              Details
            }
          />
        </div>
      </div>

      <div className="px-8 md:px-20 lg:px-28 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Mission",
              content:
                "To empower students with quality education, innovation, and ethical values, fostering skilled and responsible global citizens.",
              image: "/images/home/program/mission.svg",
            },
            {
              title: "Vision",
              content:
                "To foster innovation, empower learners with essential skills, and inspire meaningful impact through inclusive and transformative education.",
              image: "/images/home/program/vision.svg",
            },
            {
              title: "Value",
              content:
                "To be a hub of excellence, innovation, and community impact, shaping future leaders for a dynamic world.",
              image: "/images/home/program/value.svg",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 p-8  rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-[100px] h-[100px] bg-orange-600 rounded-full flex justify-center items-center transition-all duration-300  group-hover:bg-[#5a5b57] shadow-md">
                <div className="w-[75px] h-[75px] bg-gradient-to-tl from-[#164561] to-[#164561] rounded-full flex justify-center items-center">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={40}
                    height={40}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-[#164561]">
                {program.title}
              </h2>

              <p className="text-lg text-gray-600 font-medium leading-relaxed px-4">
                {program.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 md:mx-28 py-10 my-10 rounded-lg shadow-xl ">
        <h1 className="text-4xl font-bold text-center text-[#164561] mb-6">
          News <span className="text-orange-600">&</span> Updates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6  ">
          <div className="w-full flex justify-center">
            <Image
              src="/images/home/news.png"
              alt="News"
              width={400}
              height={300}
              className="object-cover object-center rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-5">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h1 className="text-lg font-semibold text-gray-900">
                  {news.title}
                </h1>
                <p className="text-sm text-gray-600">{news.date}</p>
                <div className="mt-3 px-4 py-1 text-white text-xs font-medium uppercase rounded-full bg-orange-700 w-max shadow-sm">
                  {news.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Leadears type */}
      <div className="mx-5 md:mx-28 py-12 my-20 text-center  rounded-3xl ">
        <h1 className="text-4xl font-extrabold text-[#164561] mb-12 tracking-wide">
          Meet Our <span className="text-orange-600">Trusted</span> Partners
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              img: "/images/home/leaders/Tnvc.png",
              link: "https://4dvfx.com",
            },
            {
              img: "/images/home/leaders/ssarrownex.png",
              link: "https://www.4dvfxacademy.com/",
            },
            {
              img: "/images/home/leaders/Academy.svg",
              link: "https://zuitt.co/",
            },
            {
              img: "/images/home/leaders/thinkThank.png",
              link: "https://www.arrownex.com/",
            },
          ].map((partner, index) => (
            <Link
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative backdrop-blur-xl bg-slate-600 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={partner.img}
                alt="Partner Logo"
                width={227}
                height={195}
                className="object-cover object-center rounded-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-50 to-transparent rounded-2xl opacity-30"></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;

type CarouselCardsProps = {
  items: Array<{
    id: Number;
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    slug: string;
  }>;
};

const CarouselCards = ({ items }: CarouselCardsProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto relative mt-5 pt-5">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <HoverCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-10  rounded-full "></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-10  "></div>
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
        style={{
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

const HoverCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer group overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`transition-transform duration-300 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      >
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={500}
          height={288}
          className="w-full h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div
        className={`absolute bottom-0 left-5 w-[90%] py-2 rounded-xl bg-[#2c2c2c] transition-opacity duration-300 transform ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="p-2 rounded-t-lg shadow-xl">
          <h3 className="text-lg font-bold text-[#F1822C]">{item.title}</h3>
          <p className="text-sm text-white">{item.description}</p>
          <Link
            href={`/programs/${item.slug}`}
            className="block mt-5 text-[#F1822C]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
