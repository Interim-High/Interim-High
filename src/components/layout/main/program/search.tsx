"use client"
import Input from "@/components/shared/input";
import Select from "@/components/shared/selectoption";
import { useState } from "react";
import { Details } from "./content";

// Mapping categories to hyphenated format for comparison
const categoryMap = {
  "all": "All",
  "web-development": "Web Development",
  "cyber-security": "Cyber Security",
  "marketing": "Marketing",
  "design": "Design",
  "data-analysis": "Data Analytics",
  "animation": "Animation",
};

// Helper function to convert category name to hyphenated format for comparison
const toHyphenatedFormat = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

export function Search({ onCategoryChange }) {
  const options = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web-development" },
    { label: "Cyber Security", value: "cyber-security" },
    { label: "Marketing", value: "marketing" },
    { label: "Design", value: "design" },
    { label: "Data Analytics", value: "data-analysis" },
    { label: "Animation", value: "animation" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const filteredCourses = selectedCategory === "all"
    ? Details
    : Details.filter(course => {
        return toHyphenatedFormat(course.category) === selectedCategory;
      });

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-start ml-24">
        <p>{`${categoryMap[selectedCategory]} (${filteredCourses.length})`}</p>
      </div>
      <div className="flex justify-end mr-24">
        <Select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          options={options}
        />
      </div>
      {/* <div>
        <Input placeholder="Search Course" value={searchTerm} onChange={handleInputChange} />
      </div> */}
    </div>
  );
}
