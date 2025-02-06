"use client";
import React, { useState } from "react";
import SideNav from "./sidenav";
import { Governance } from "@/types/admission.type";
import Card from "../../about/card";
import {Button, Modal} from "flowbite-react"
import { XIcon } from "lucide-react";



const governance: Governance = {
  Director: [
    { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    },
    
  ],

  Advisor: [
    { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    },
  ],

  Faculty: [
    { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    },
  ],

  Staff: [
    { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    }, { name: "Vijay", images: "/images/about/bills.jpg", designation: "Operational Head" ,
      description:"With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      skills:["Motion graphics", "photoshop", "multimedia"]
    },
  ],
};

function Governancesection() {
  const [selectedPage, setSelectedPage] = useState("Director");
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    images: string;
    designation: string;
    description: string;
    skills: string[];
  } | null>(null); 
  const handleClick = (person: typeof governance.Director[0]) => {
    setSelectedPerson(person); 
  };

 
  return (
    <div className="flex flex-row gap-4 justify-center p-6">
      <div className="h-fit bg-white py-4">
        <SideNav onSelect={setSelectedPage} />
      </div>
      <div className="h-fit w-full border border-red-500 p-10">
        <h1 className="text-4xl text-orange-500 font-bold">{selectedPage}</h1>
        <div className="mt-4 w-fit rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
          {/* Description for the selected page */}
          {selectedPage === "Director" && (
            <>
              <h2 className="col-span-full text-xl font-base">
                Our Board Members are highly trained and professionally experienced individuals who oversee the overall functioning of the institution. Their collective commitment to qualitative higher education, academic excellence, and student achievement helps guide every student in realizing their full educational potential.
              </h2>
              {governance.Director.map((person, index) => (
                <div key={index} 
                className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
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
              <h2 className="col-span-full text-xl font-normal ">Our Advisors provide valuable guidance and expertise, ensuring we stay on track to achieve our goals while facing the challenges of a rapidly changing world.</h2>
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
              <div className="col-span-full space-y-4 text-xl font-normal leading-normal">
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
                  />
                </div>
              ))}
            </>
          )}

          {selectedPage === "Staff" && (
            <>
              <h2 className="col-span-full text-xl font-normal ">Our Staff plays a critical role in supporting our day-to-day operations, providing the essential services that help students thrive both academically and personally.</h2>
              {governance.Staff.map((person, index) => (
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
        </div>
      </div>
      
      {selectedPerson && (
      
        <Modal dismissible show={!!selectedPerson} onClose={() => setSelectedPerson(null)} className="flex mx-auto mt-24 inset-0 z-[9999] backdrop-blur-lg justify-center items-center border h-fit w-fit">
      
          <Modal.Body >
        
          <XIcon onClick={() => setSelectedPerson(null)} className="text-red-700 float-end"/>
           <Card
           className="flex flex-row w-fit gap-2 "
           layout={"descriptionmodal"}
           description={selectedPerson.description}
           images={selectedPerson.images}
           designation={selectedPerson.designation}
           personName={selectedPerson.name}
           skill={selectedPerson.skills}
           />
          </Modal.Body>
        </Modal>
     
      )}
   
   </div>
  
    
  );
}

export default Governancesection;
