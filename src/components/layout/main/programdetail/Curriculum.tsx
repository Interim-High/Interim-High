import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For icons

const AccordionItem = ({ id, title, subjects, isOpen, toggleAccordion }) => (
  <div className="relative group cursor-pointer p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    <div
      onClick={() => toggleAccordion(id)}
      className="flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-500"
    >
      <span>{title}</span>
      {isOpen ? (
        <FaChevronUp className="text-xl text-blue-500" />
      ) : (
        <FaChevronDown className="text-xl text-blue-500" />
      )}
    </div>
    <div
      className={`absolute w-full bg-white dark:bg-gray-800 rounded-b-xl p-5 transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-10"
      }`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  </div>
);

function Curriculum() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const curriculumData = [
    {
      id: 1,
      title: "Semester 1",
      subjects: [
        "Introduction to Programming",
        "Data Structures",
        "Mathematics for Computer Science",
        "Basics of Web Development",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      subjects: [
        "Object-Oriented Programming",
        "Operating Systems",
        "Discrete Mathematics",
        "Introduction to Databases",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      subjects: [
        "Data Communication",
        "Computer Networks",
        "Theory of Computation",
        "Web Development with Frontend Technologies",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      subjects: [
        "Software Engineering",
        "Database Management Systems",
        "Digital Logic Design",
        "Mobile App Development",
      ],
    },
    {
      id: 5,
      title: "Semester 5",
      subjects: [
        "Software Engineering",
        "Database Management Systems",
        "Digital Logic Design",
        "Mobile App Development",
      ],
    },
    {
      id: 6,
      title: "Semester 6",
      subjects: [
        "Software Engineering",
        "Database Management Systems",
        "Digital Logic Design",
        "Mobile App Development",
      ],
    },
    {
      id: 7,
      title: "Semester 7",
      subjects: [
        "Software Engineering",
        "Database Management Systems",
        "Digital Logic Design",
        "Mobile App Development",
      ],
    },
    {
      id: 8,
      title: "Semester 8",
      subjects: [
        "Software Engineering",
        "Database Management Systems",
        "Digital Logic Design",
        "Mobile App Development",
      ],
    },
  ];

  return (
    <div className="mx-10 my-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Curriculum Structure
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {curriculumData.map((semester) => (
          <AccordionItem
            key={semester.id}
            id={semester.id}
            title={semester.title}
            subjects={semester.subjects}
            isOpen={openAccordion === semester.id}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
