"use client";
import React, { useState } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SideNav from "./sidenav";
import { Governance } from "@/types/admission.type";
import Card from "../../about/card";
import { XIcon } from "lucide-react";
import { governance } from "./Details";


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
