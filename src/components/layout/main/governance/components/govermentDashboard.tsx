"use client";
import React, { useState } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SideNav from "./sidenav";
import { Governance } from "@/types/admission.type";
import Card from "../../about/card";
import { XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const governance: Governance = {
  Director: [
    {
      name: "Vijay Amrit Chaudary",
      images: "/images/governance/danphelink/vijay.jpg",
      designation: "Operational Head",
      description:
        "With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      email: "vijay@danphelink.com.np",
    },
  ],

  Advisor: [
    {
      name: "Dharti Bimali",
      images: "/images/governance/danphelink/dharti.png",
      designation: "career Counselor",
      description:
        "Dharti Bimali is a versatile professional who excels both as a seasoned Web Developer and a dedicated Career Counselor. With a strong background in project management, Dharti effectively oversees the development of web applications, ensuring they meet client requirements and industry standards. Her technical skills complement her ability to provide insightful career counseling to students, guiding them through their academic and professional journeys. Dharti’s empathetic approach and deep understanding of career pathways make her a trusted advisor for many. Her dual roles enable her to contribute significantly to both technical projects and students' personal growth.",
      email: "dhartii@danphelink.com.np",
    },
    {
      name: "Aarya Dahal",
      images: "/images/governance/danphelink/aarya.jpg",
      designation: "Cyber Security Advisor/ Student Counselor",
      description:
        "Aarya Dahal is an esteemed Cyber Security Advisor with extensive expertise in safeguarding digital assets and protecting against cyber threats. Her deep knowledge in the field of cyber security makes her an invaluable resource for organizations looking to strengthen their security measures. In addition to her technical role, Aarya is also a dedicated Student Counselor, providing guidance and support to students as they navigate their academic journeys. Her ability to blend technical expertise with compassionate counseling ensures that students receive holistic support. Aarya’s dual focus on security and student well-being underscores her commitment to making a positive impact in both domains.",
      email: "aarya@danphelink.com.np",
    },
  ],

  Faculty: [
    {
      name: "Rajat Dauli",
      images: "/images/governance/danphelink/rajat.jpg",
      designation: "Animation and VFX Artist",
      description:
        "The Founder and Creative Director of Fourth Dimension Visual Effects Pvt. Ltd. (4DVFX Studios) is a highly creative professional with over 22 years of experience in digital and VFX projects for Film and Television. He has completed VFX for over 100 films and notable TV projects, including major blockbusters from reputed production houses. He has also handled Television Commercials and Corporate Films for major brands across India. In addition to VFX, he produced the first 3D animated weekly series in eastern India, Jenie Jindabad,for Zee Bangla. His strong business acumen has established 4DVFX Studios as a leading name in the industry.",
      skills: [
        "Software Expertise as in Maya, Blender, and After Effects",
        " Motion Mastery",
        " 3D Modeling & Texturing",
        " Creative Vision",
      ],
      email: "info@4dvfxacademy.com",
    },
    {
      name: "Suman Gauchan",
      images: "/images/governance/danphelink/suman.jpg",
      designation: "Full Stack Developer",
      description:
        "Mr. Suman Gauchan is an accomplished JavaScript Engineer with over 5 years of experience building scalable, high-performing applications. Having worked on projects in healthcare, remittance, and streaming services, he excels in frontend and backend technologies, including React, Angular, Node.js, and AWS. Known for his expertise in crafting user-friendly interfaces and managing complex workflows, he brings real-world insights to the classroom. Mr. Suman is dedicated to mentoring future developers by making advanced concepts simple and actionable.",
      skills: ["ReactJs", "Angular", "NodeJs", "AWS"],
      email: "sumangauchan@gmail.com",
    },
    {
      name: "Gaurav Devkota",
      images: "/images/governance/danphelink/gaurav.jpg",
      designation: "Graphics Design Expert",
      description:
        "Mr. Gaurav Devkota is a seasoned graphic design professional with over four years of experience in crafting impactful visuals that elevate brand identities. His expertise lies in logo design, typography, packaging, and creating cohesive visual identities. With a proven track record in designing and executing campaigns that amplify brand presence and engage audiences effectively, Mr. Gaurav is committed to delivering creative solutions that leave a lasting impression. With extensive experience spanning industries such as education, hospitality, and consultancy, Mr. Gaurav excels at transforming concepts into visually compelling designs that connect with audiences.",
      skills: [
        "Creativity and Visual Ideation",
        "Proficiency in Design Tools",
        "Typography and Color Theory",
        "Communication and Collaboration",
      ],
      email: "gauravdevkota289@gmail.com",
    },
    {
      name: "Kiran Kumar Shah",
      images: "/images/governance/danphelink/kiran.jpg",
      designation: "CyberGuard Pro Expert",
      description:
        "Mr. Kiran Kumar Shah is a seasoned expert with 15+ years of experience in AML/CFT, cybersecurity, audit, and compliance. Holding certifications like CAMS, CISA, and CISSP, he has led initiatives such as goAML implementation and advanced transaction monitoring using data science. He is known for his engaging workshops and training, including sessions for the Asian Development Bank, Mr. Shah equips professionals with practical skills to excel in financial crime prevention and cybersecurity.",
      skills: [
        "Cybersecurity Expertise",
        "Incident Response",
        "Technical Proficiency",
        "Teaching and Mentoring",
        "Problem-Solving",
      ],
      email: "kiran.shah.acca@gmail.com",
    },
    {
      name: "Karishma Khadka",
      images: "/images/governance/danphelink/karishma.jpg",
      designation: "UI / UX Designer | Instructor",
      description:
        "From designing experiences to teaching them—shaping the next generation of UI/UX designers.",
      email: "karishmakhadka7@gmail.com",
    },
  ],
};
function Governancesection() {
  const [selectedPage, setSelectedPage] = useState<string>("Director");
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    images: string;
    designation: string;
    description: string;
    skills?: string[];
    email: string;
  } | null>(null);

  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedPerson]);

  const handleClick = (
    person:
      | (typeof governance.Director)[0]
      | (typeof governance.Advisor)[0]
      | (typeof governance.Faculty)[0]
  ) => {
    setSelectedPerson(person);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center p-2 lg:p-6">
      <div className="h-fit rounded-xl lg:rounded-2xl bg-white py-2">
        <SideNav onSelect={setSelectedPage} />
      </div>

      <div className="h-fit w-full p-4 lg:p-10">
        <h1 className="text-4xl text-orange-500 font-bold">{selectedPage}</h1>
        <div className="mt-4 w-fit rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10">
          {selectedPage === "Director" && (
            <>
              <h2 className="col-span-full text-justify text-base lg:text-xl font-base">
                Our Board Members oversee the functioning of the institution and
                guide students toward academic excellence.
              </h2>
              {governance.Director.map((person, index) => (
                <div
                  key={index}
                  className=" p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)}
                >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                  />
                </div>
              ))}
            </>
          )}

          {selectedPage === "Advisor" && (
            <>
              <h2 className="col-span-full text-base lg:text-xl font-normal">
                Our Advisors provide expert guidance to help us achieve our
                goals and navigate challenges.
              </h2>
              {governance.Advisor.map((person, index) => (
                <div
                  key={index}
                  className="border-2 border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)}
                >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                  />
                </div>
              ))}
            </>
          )}

          {selectedPage === "Faculty" && (
            <>
              <div className="col-span-full space-y-4 text-base lg:text-xl font-normal leading-normal">
                <p>
                  Our Faculty delivers top-tier education, shaping students'
                  futures with knowledge and passion.
                </p>
                <p>
                  Teachers attend national and international training and
                  collaborate globally to stay at the forefront of education.
                </p>
              </div>
              {governance.Faculty.map((person, index) => (
                <div
                  key={index}
                  className="border-2 border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)}
                >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                    email={person.email}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {selectedPerson && (
        <div className="w-full  mx-auto h-screen absolute inset-0 flex justify-center items-center  bg-black bg-opacity-50 z-50">
          <div className="relative flex flex-col lg:flex-row rounded-xl overflow-hidden lg:gap-10 bg-slate-100  h-[80vh] ">
            <div className="relative flex flex-col w-full p-6 lg:w-[700px] gap-6 overflow-y-scroll">
              <button
                onClick={() => setSelectedPerson(null)}
                className="absolute top-2 right-2 ml-auto p-1 bg-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="Close modal"
              >
                <XIcon className="text-white" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 h-auto   ">
                <div className="relative w-full h-48 lg:h-auto rounded-lg overflow-hidden  flex justify-center items-center">
                  <Image
                    src={selectedPerson.images || "/default-image.jpg"}
                    alt={selectedPerson.name || "Modal Image"}
                    layout="intrinsic"
                    width={300}
                    height={300}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col w-full justify-center pt-2 ">
                  <div className="flex flex-col ">
                    <h1 className="text-3xl font-bold text-[#1D1D1D]">
                      {selectedPerson.name}
                    </h1>
                    <p className="text-xl font-light text-[#4a4a4a]">
                      {selectedPerson.designation}
                    </p>
                    <Link
                      href={`mailto:${selectedPerson.email}`}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 mt-2"
                      aria-label={`Send email to ${selectedPerson.name}`}
                    >
                      <MailOutlineOutlinedIcon fontSize="medium" />
                      <p className="text-base font-normal">
                        {selectedPerson.email}
                      </p>
                    </Link>
                  </div>

                  {Array.isArray(selectedPerson.skills) &&
                    selectedPerson.skills.length > 0 && (
                      <div className="flex flex-col gap-4 mt-6">
                        <h2 className="text-2xl font-semibold text-[#1D1D1D]">
                          Skills & Certifications
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {selectedPerson.skills.map((s, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-center p-2 px-4 rounded-3xl text-sm font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <h2 className="text-3xl font-semibold text-[#1D1D1D]">
                  Overview
                </h2>
                <p className="text-base text-justify text-[#4a4a4a]">
                  {selectedPerson.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Governancesection;

// BACKUP----------------------------

{
  /* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 h-48 border border-black">
                <div className="relative w-full h-64 lg:h-auto border border-black">
                  <Image
                    src={selectedPerson.images || "/default-image.jpg"}
                    alt={selectedPerson.name || "Modal Image"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-[#1D1D1D]">
                      {selectedPerson.name}
                    </h1>
                    <p className="text-lg font-light text-[#4a4a4a]">
                      {selectedPerson.designation}
                    </p>
                  </div>

                  <Link
                    href={`mailto:${selectedPerson.email}`}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                    aria-label={`Send email to ${selectedPerson.name}`}
                  >
                    <MailOutlineOutlinedIcon fontSize="medium" />
                    <p className="text-base font-normal">
                      {selectedPerson.email}
                    </p>
                  </Link>

                  {Array.isArray(selectedPerson.skills) &&
                    selectedPerson.skills.length > 0 && (
                      <div className="flex flex-col gap-4 mt-6">
                        <h2 className="text-2xl font-semibold text-[#1D1D1D]">
                          Skills & Certifications
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {selectedPerson.skills.map((s, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-center p-2 px-4 rounded-3xl text-sm font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div> */
}
