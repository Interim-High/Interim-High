"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "next/image";
import {StudentRequirements} from "@/types/admission.type";




const Requirements: StudentRequirements[] = [
    {
        Studenttype: "National Students",
        details: {
            // image: "/images/about/bills.jpg",
            list: [
                "Must meet the minimum required GPA or percentage and submit official transcripts from previous institutions.",
                "All necessary documents, including academic transcripts and identity proof, must be submitted correctly and within the deadline. Incomplete or false information will lead to disqualification.",
                "Admission is subject to the availability of seats in the program. If applications exceed the available capacity, priority will be given based on merit.",
                "A good disciplinary record is essential for admission.Any history of misconduct or fraudulent activities may lead to rejection.",
                "Admission is only confirmed once the required admission fee is paid within the specified deadline."
            ],
        },
    },
    {
        Studenttype: "International Students",
        details: {
            //image: "/images/about/bills.jpg",
            list: [
                "Must meet the minimum required GPA or equivalent academic qualifications and submit officially certified transcripts from recognized institutions.",
                "Required documents, including a valid passport, student visa, academic records, and proof of financial support, must be submitted correctly and within the deadline. Incomplete or false information will lead to disqualification.",
                "Admission is dependent on seat availability in the chosen program, and in case of excess applications, preference will be given based on academic merit.",
                "Students must maintain a clean disciplinary record, and any history of misconduct, fraudulent activities, or visa violations may result in rejection.",
                "Admission will only be confirmed after the required tuition fees and other necessary charges are paid within the stipulated deadline."
            ],
        },
    },
];

const RequirementsTab: React.FC = () => {
    const [value, setValue] = React.useState("0"); // Set default to first tab index

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="flex flex-row mt-16 p-4 justify-center items-center gap-10">

            <div className=" border-2 bg-[#EDEDED] w-1/2 rounded-2xl shadow-slate-500">
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList onChange={handleChange} aria-label="Admission Requirements Tabs">
                                {Requirements.map((requirement, index) => (
                                    <Tab key={index} label={requirement.Studenttype} value={index.toString()} />
                                ))}
                            </TabList>
                        </Box>

                        {Requirements.map((requirement, index) => (
                            <TabPanel key={index} value={index.toString()}>
                                <Box className="flex flex-row justify-between h-full items-center">
                                    {/* <Image src={requirement.details.image} alt={requirement.Studenttype} width={400} height={400} /> */}
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-xl font-bold mb-2">{requirement.Studenttype}</h1>
                                        <ul className="list-disc ml-5 flex flex-col gap-2">
                                            {requirement.details.list.map((item, i) => (
                                                <li key={i} className="mb-1">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Box>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div> 
            <div className="relative  w-[537px] h-[418px] ">
                {/* First Image: Positioned on the right side */}
                {/* <div className="absolute right-2 w-[450px] border border-red-600 rounded-[5px] h-[300px]"> */}
                <Image
                    src="/images/about/facilities1.png"
                    alt="Hero"
                    className="absolute right-2 "
                    width={450}
                    height={300}
                // objectPosition="center"
                />
                {/* </div> */}
                {/* Second Image: Smaller size, positioned at the bottom-left */}
                {/* <div className="absolute bottom-0 left-0 rounded-[5px] w-[355px] h-[237px]"> */}
                <Image
                    src="/images/about/facilities2.png"
                    alt="Hero"
                    className="absolute bottom-0 left-0"
                    // layout="fill"
                    width={355}
                    height={237}


                // objectFit="cover"
                // objectPosition="center"
                />
                {/* </div> */}
            </div>
            
            </div>
      
    );
};

export default RequirementsTab;
