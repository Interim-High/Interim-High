// "use client";
// import Select from "@/components/shared/selectoption";
// import { useState } from "react";
// import { Details } from "./content";

// const categoryMap = {
//   all: "All",
//   "web-development": "Web Development",
//   "cyber-security": "Cyber Security",
//   marketing: "Marketing",
//   design: "Design",
//   "data-analysis": "Data Analytics",
//   animation: "Animation",
// };

// const toHyphenatedFormat = (category) => {
//   return category.toLowerCase().replace(/\s+/g, "-");
// };

// export function Search({ onCategoryChange }) {
//   const options = [
//     { label: "All", value: "all" },
//     { label: "Web Development", value: "web-development" },
//     { label: "Cyber Security", value: "cyber-security" },
//     { label: "Marketing", value: "marketing" },
//     { label: "Design", value: "design" },
//     { label: "Data Analytics", value: "data-analysis" },
//     { label: "Animation", value: "animation" },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     onCategoryChange(value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredCourses = Details.filter((course) => {
//     const matchesCategory =
//       selectedCategory === "all" ||
//       toHyphenatedFormat(course.category) === selectedCategory;
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm);
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="p-4 space-y-4">
//       <div className="flex justify-between items-center px-28">
//         <p className="text-lg font-medium">{`${categoryMap[selectedCategory]} (${filteredCourses.length})`}</p>

//         <input
//           type="text"
//           placeholder="Search courses..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="border border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <Select
//           value={selectedCategory}
//           onChange={(e) => handleCategoryChange(e.target.value)}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import Select from "@/components/shared/selectoption";
import { useState, useEffect } from "react";
import { Details } from "./content";

const categoryMap = {
  all: "All",
  "web-development": "Web Development",
  "cyber-security": "Cyber Security",
  marketing: "Marketing",
  design: "Design",
  "data-analysis": "Data Analytics",
  animation: "Animation",
};

const toHyphenatedFormat = (category) => {
  return category.toLowerCase().replace(/\s+/g, "-");
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

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center px-28">
        <p className="text-lg font-medium">{`${categoryMap[selectedCategory]} (${filteredCourses.length})`}</p>

        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          options={options}
        />
      </div>

      {/* Render Filtered Courses */}
      <div className="grid grid-cols-3 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
}

// BACKUP-------------------

// export function Search({ onCategoryChange }) {
//   const options = [
//     { label: "All", value: "all" },
//     { label: "Web Development", value: "web-development" },
//     { label: "Cyber Security", value: "cyber-security" },
//     { label: "Marketing", value: "marketing" },
//     { label: "Design", value: "design" },
//     { label: "Data Analytics", value: "data-analysis" },
//     { label: "Animation", value: "animation" },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     onCategoryChange(value);
//   };

//   const filteredCourses =
//     selectedCategory === "all"
//       ? Details
//       : Details.filter((course) => {
//           return toHyphenatedFormat(course.category) === selectedCategory;
//         });

//   return (
//     <div className="p-4 space-y-4 ">
//       <div className="flex justify-between px-28 ">
//         <p>{`${categoryMap[selectedCategory]} (${filteredCourses.length})`}</p>
//         <div>{/* search bar to search courses by name */}</div>
//         <Select
//           value={selectedCategory}
//           onChange={(e) => handleCategoryChange(e.target.value)}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

{
  /* <div className="flex justify-end mr-24"></div> */
}
{
  /* <div>
    <Input placeholder="Search Course" value={searchTerm} onChange={handleInputChange} />
  </div> */
}
