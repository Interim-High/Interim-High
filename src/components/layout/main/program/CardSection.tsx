"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Details } from "./content";
import { Search } from "./search";

export default function CardSection() {
  const [filteredCourses, setFilteredCourses] = useState(Details);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "all") {
      setFilteredCourses(Details); // Show all courses
    } else {
      setFilteredCourses(
        Details.filter(
          (course) => course.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
        )
      );
    }
  };

  return (
    <div>
      <Search onCategoryChange={handleCategoryChange} />
      <div className="px-28">
        <CardGrid title={"Available Courses"} data={filteredCourses} />
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

function CardGrid({ title, data }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

