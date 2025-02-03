"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { title } from "process";

function Main() {
  const [selectedProgram, setSelectedProgram] = useState("undergraduate");

  const undergraduate = [
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

      <div className="flex flex-col items-center space-y-8 relative">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
          DANPHELINK International College
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

      <div className="mx-28 bg-[#EBE3E3] py-5 my-5">
        <h1>Our Programs</h1>
        <p>
          Our programs offer a perfect balance of theoretical knowledge,
          practical application, and observational learning, creating dynamic
          and engaging environments beyond traditional classrooms.
        </p>
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setSelectedProgram("undergraduate")}
            className={`${
              selectedProgram === "undergraduate" && " border-b-2 border-black"
            }`}
          >
            Under graduate
          </button>
          <button
            className={`${
              selectedProgram === "postgraduate" && " border-b-2 border-black"
            }`}
            onClick={() => setSelectedProgram("postgraduate")}
          >
            Post graduate
          </button>
        </div>
        <div>
          <CarouselCards
            items={
              selectedProgram === "undergraduate" ? undergraduate : postgraduate
            }
          />
        </div>
      </div>
      <div className="flex px-28">
        {[
          {
            title: "Mission",
            content:
              "To empower students with quality education, innovation, and ethical values, fostering skilled and responsible global citizens",
            image: "/images/home/program/mission.svg",
          },
          {
            title: "Vision",
            content:
              "To empower students with quality education, innovation, and ethical values, fostering skilled and responsible global citizens.",
            image: "/images/home/program/vision.svg",
          },
          {
            title: "Value",
            content:
              "To be a hub of excellence, innovation, and community impact, shaping future leaders for a dynamic world.",
            image: "/images/home/program/value.svg",
          },
        ].map((program, index) => (
          <div className="flex bg-white flex-col justify-start items-center gap-4 px-2 py-6 hover:shadow-[inset_4px_4px_48px_0px_rgba(140,166,219,0.12)] hover:-translate-y-2 rounded-[24px] transition-all duration-300 ease-in-out group">
            <div className="w-[90px] h-[90px] bg-[#905555] rounded-full flex justify-center items-center group-hover:bg-[#5a5b57]">
              <div className="w-[70px] h-[70px] bg-gradient-to-tl from-[#510909] to-[#cecdcd] rounded-full flex justify-center items-center">
                <Image
                  src={program.image}
                  alt="Icon Description"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="self-stretch text-center text-[#510909] text-xl font-bold font-['Inter']">
              {program.title}
            </div>
            <div className="self-stretch text-center text-[#404040] text-[16px] font-normal font-['Roboto'] leading-relaxed">
              {program.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-28 bg-[#EBE3E3] py-5 my-5">
        <h1>
          News <span>&</span> Announcement
        </h1>
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setSelectedProgram("undergraduate")}
            className={`${
              selectedProgram === "undergraduate" && " border-b-2 border-black"
            }`}
          >
            Recent News
          </button>
          <button
            className={`${
              selectedProgram === "postgraduate" && " border-b-2 border-black"
            }`}
            onClick={() => setSelectedProgram("postgraduate")}
          >
            Announcement
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6 bg-[#7E7C7C] rounded-lg">
          <div className="col-span-1">
            <Image
              src="/images/home/news.png"
              alt="News"
              layout="responsive"
              width={357}
              height={295}
              className="object-cover object-center rounded-lg"
            />
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            {[
              {
                title: "Cultural Preservation in the Digital Age",
                date: "December 31, 2020",
                category: "MANAGEMENT",
              },
              {
                title: "Cultural Preservation in the Digital Age",
                date: "December 31, 2020",
                category: "ECONOMICS",
              },
              {
                title: "Cultural Preservation in the Digital Age",
                date: "December 31, 2020",
                category: "SCIENCE",
              },
            ].map((news, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-lg font-semibold text-gray-900">
                  {news.title}
                </h1>
                <p className="text-sm text-gray-700">{news.date}</p>
                <div className="mt-2 px-3 py-1 text-white text-xs font-medium uppercase rounded-lg bg-[#822929] w-max">
                  {news.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-28">
        <h1>Our Trusted Leaders</h1>
        <div className="flex justify-between">
          <div>
            <Image
              src="/images/home/leaders/leader1.png"
              alt="Leaders"
              layout="responsive"
              width={357}
              height={295}
              className="object-cover object-center rounded-lg"
            />
            <div>
              <h1>Kristina Subedi</h1>
              <p>Chairperson</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/home/leaders/leader2.png"
              alt="Leaders"
              layout="responsive"
              width={357}
              height={295}
              className="object-cover object-center rounded-lg"
            />
            <div>
              <h1>Dhurba Subedi</h1>
              <p>Chairperson</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/home/leaders/leader3.png"
              alt="Leaders"
              layout="responsive"
              width={357}
              height={295}
              className="object-cover object-center rounded-lg"
            />

            <div>
              <h1>Deepak Malla</h1>
              <p>HOD</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

const CarouselCards = ({ items }) => {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
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
          hovered ? "scale-90" : "scale-100"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={288}
          className="w-full h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full py-5 rounded-xl bg-[#2c2c2c] transition-opacity duration-300 transform ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="p-4 rounded-t-lg shadow-xl">
          <h3 className="text-lg font-bold text-[#F1822C]">{item.title}</h3>
          <p className="text-sm text-white">{item.description}</p>
          <Link href="/apply" className="block mt-5 text-[#F1822C]">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
