"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Details } from "./content";
import Select from "@/components/shared/selectoption";

const categoryMap = {
  all: "All",
  "web-development": "Web Development",
  "cyber-security": "Cyber Security",
  marketing: "Marketing",
  design: "Design",
  "data-analysis": "Data Analytics",
  animation: "Animation",
};
const options = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web-development" },
  { label: "Cyber Security", value: "cyber-security" },
  { label: "Marketing", value: "marketing" },
  { label: "Design", value: "design" },
  { label: "Data Analytics", value: "data-analysis" },
  { label: "Animation", value: "animation" },
];
const toHyphenatedFormat = (category) => {
  return category.toLowerCase().replace(/\s+/g, "-");
};
export default function CardSection() {
  const handleCategoryChange = (e, selectedCategory) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (selectedCategory === "all") {
      setFilteredCourses(Details);
    } else {
      setFilteredCourses(
        Details.filter(
          (course) =>
            course.category.toLowerCase().replace(/\s+/g, "-") ===
            selectedCategory
        )
      );
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(Details);

  useEffect(() => {
    const filtered = Details.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        toHyphenatedFormat(course.category) === selectedCategory;
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="py-5">
      <div className="p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-4 gap-4">
          <p className="text-lg font-semibold text-gray-700">{`${categoryMap[selectedCategory]} (${filteredCourses.length})`}</p>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
            />

            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={options}
              className="w-full md:w-auto py-2 px-2"
            />
          </div>
        </div>
      </div>
<<<<<<<<< Temporary merge branch 1
      <div className="px-28 py-8">
=========
      <div className="md:px-28 px-6 py-8">
=======
      <div className="px-28 py-8">
>>>>>>> e10cbb13e06b9c9551be41d2554814f33f40d50c
        <h1 className="text-4xl text-orange-600 font-bold mb-6"><span className="text-[#164561] ">Available </span>Courses</h1>
        <div className="grid grid-rows-1 border-red-500 md:grid-cols-3 gap-6 md:gap-6">
          {filteredCourses.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ imageSrc, title, description, category, slug }) => (
  <div className="relative bg-white pb-2 rounded-lg overflow-hidden shadow-lg">
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 line-clamp-3 text-sm my-6">{description}</p>
      <Link
        href={`/programs/${slug}`}
        className=" bg-[#FF6D04] text-white px-4 py-2 rounded-md "
      >
        Read More
      </Link>
    </div>
    <div className="absolute top-2 right-2 bg-[#FF6D04] text-white text-xs font-medium px-3 py-1 rounded-lg">
      {category}
    </div>
  </div>
);

// function CardGrid({ title, data }) {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">{title}</h1>
//       <div className="grid grid-rows-1 md:grid-cols-3 gap-6">
//         {data.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }
