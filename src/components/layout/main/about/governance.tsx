import { useState } from "react";
import Card from "./card";
import Carousel from "./carousel";
import Button from "./button";

type GovernanceBody = {
    header: string;
    description: string;
    id: string
    PersonCard: {
        name: string;
        role: string;
        image: string;
    }[];
};
const governanceSections: GovernanceBody[] = [
    {
        header: "Board of Directors",
        id: crypto.randomUUID(),
        description: "",
        PersonCard: [
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            }
        ]
    },
    {
        header: "Advisor",
        description: ",ksjfpoweh",
        id: crypto.randomUUID(),
        PersonCard: [
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            }
        ]
    },
];

function Governance() {
    const [selectedBoard, setSelectedBoard] = useState<GovernanceBody>(governanceSections[0]);

    const handleSelectedBoard = (id: string) => {
        const member = governanceSections.find((m) => m.id === id);
        if (member) {
            setSelectedBoard(member);
        }
    };
    return (
        <div>

            {/* 
        <Card
        className="flex border-2 border-red-600 w-fit flex-row  gap-4"
        designation="operational Head"
        layout="descriptionmodal"
        title={"manish"}
         images={"/images/about/facilities1.png"}
         description={"ojrieoqwutn8cbytmp;j4pontv09t798yrthijiogl;km0[wvi547t5347j9v584uerhj0[8yithvjuvj9y54h4j045yhtuij340798ythui4908yhu4iirjtoir98hrrio08uyhiok09u8hijoiuhjpoighcjkoiujuiuc2ug8y434urpt9u4wi5grtnw0r9t8p4o3i5gh39r[p9w4orcjk9uo8rjqckpijuibjfokj"}
         skill={["flutter jwenk","developers","cyber security"]}
  /> */}
            {/* <Carousel/> */}
            <h2 className="text-3xl font-normal mb-4 text-red-700">Meet our Teams</h2>

            {
                governanceSections.map((section) => (
                    <Button
                        key={section.id}
                        label={section.header}
                        onClick={() => handleSelectedBoard(section.id)}
                        className={`px-4 py-2 rounded-lg ${selectedBoard?.id === section.id
                                ? "bg-green-500 text-white"
                                : "bg-blue-500 text-black"
                            }`}
                      
                    />
                    
                ))
            }

            {selectedBoard && (
                <div className="w-[1234px] flex flex-col p-4  gap-8 rounded-lg shadow-lg">
                  {
                    selectedBoard.description &&(
                        <p> {selectedBoard.description}</p>
                    )
                  }
                    <div className="flex flex-row gap-3 p-2 w-fit max-h-[340px] border border-red-500">
                        {selectedBoard.PersonCard.map((person, personIndex) => (
                            <Card
                                key={personIndex}
                                layout="governance"
                                images={person.image}
                                personName={person.name}
                                designation={person.role}
                            />
                        ))}
                    </div>
                </div>
            )}


        </div>
    )
}
export default Governance;