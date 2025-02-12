"use client";
import React, { useState } from "react";
import SideNav from "./sidenav";
import { Governance } from "@/types/admission.type";
import Card from "../../about/card";
import { Button, Modal } from "flowbite-react"
import { XIcon } from "lucide-react";
import { governance } from "./Details";


function Governancesection() {
  const [selectedPage, setSelectedPage] = useState("Director");
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    images: string;
    designation: string;
    description: string;
    skills?: string[];
    email: string;
  } | null>(null);
  const handleClick = (person: typeof governance.Director[0]) => {
    setSelectedPerson(person);
  };


  return (
    <div className="flex flex-col lg:flex-row  gap-4 justify-center p-2 lg:p-6">
      <div className="h-fit rounded-xl lg:rounded-2xl bg-white py-2">
        <SideNav onSelect={setSelectedPage} />
      </div>
      <div className="h-fit w-full p-4 lg:p-10">
        <h1 className="text-4xl text-orange-500 font-bold">{selectedPage}</h1>
        <div className="mt-4 w-fit rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 gap-y-10">
          {selectedPage === "Director" && (
            <>
              <h2 className="col-span-full text-justify text-base lg:text-xl font-base">
                Our Board Members are highly trained and professionally experienced individuals who oversee the overall functioning of the institution. Their collective commitment to qualitative higher education, academic excellence, and student achievement helps guide every student in realizing their full educational potential.
              </h2>
              {governance.Director.map((person, index) => (
                <div key={index}
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

          {selectedPage === "Advisor" && (
            <>
              <h2 className="col-span-full text-base lg:text-xl  font-normal ">Our Advisors provide valuable guidance and expertise, ensuring we stay on track to achieve our goals while facing the challenges of a rapidly changing world.</h2>
              {governance.Advisor.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)} >
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
                  Our Faculty is dedicated to delivering top-tier education, shaping the future of our students with their knowledge, innovation, and passion for teaching.
                </p>
                <p>
                  Our teachers frequently attend various types of training organized by foremost academic organizations, national or international, and frequently interact, formally or informally, with professionals from various parts of the world either in Nepal itself or sometimes by traveling abroad themselves.
                </p>
              </div>
              {governance.Faculty.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)} >
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

        <Modal dismissible show={!!selectedPerson} onClose={() => setSelectedPerson(null)} popup className=" w-fit h-fit m-auto">
        <Modal.Body className="">
        <Card
              className="flex flex-col lg:flex-row rounded-xl overflow-hidden lg:gap-10 bg-slate-100"
              onClick={()=>setSelectedPerson(null)}
              layout={"descriptionmodal"}
              description={selectedPerson.description}
              images={selectedPerson.images}
              designation={selectedPerson.designation}
              personName={selectedPerson.name}
              skill={selectedPerson.skills}
              email={selectedPerson.email}
            />
        </Modal.Body>
      </Modal>
      )}
    </div>
  );
}

export default Governancesection;
