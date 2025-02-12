"use client"
import Input from "@/components/shared/input";
import Select from "@/components/shared/selectoption";
import { useState } from "react";
import { Details } from "./content";

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
  
    return (
      <div className="p-4 space-y-4">
        <div>
          <p>{`All Courses (${Details.length})`}</p>
        </div>
        <div>
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
  