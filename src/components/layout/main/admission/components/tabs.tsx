"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "next/image";
import { StudentRequirements } from "@/types/admission.type";
import { Requirements } from "./Requirements";

const RequirementsTab: React.FC = () => {
    const [value, setValue] = React.useState("0"); // Set default to first tab index

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row mt-16 p-2 xl:p-4 justify-evenly lg:items-center gap-10">
            <div className=" border-2 bg-[#EDEDED] w-full lg:w-1/2 rounded-2xl shadow-slate-500">
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
                                        <h1 className="text-xl md:text-2xl font-bold mb-2">{requirement.Studenttype}</h1>
                                        <ul className="list-disc ml-5 flex flex-col gap-2">
                                            {requirement.details.list.map((item, i) => (
                                                <li key={i} className="text-base md:text-lg mb-1">
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
            <div className="relative max-md:w-full lg:w-[537px] h-fit md:h-[200px] lg:h-[418px] ">
                <div className="static md:absolute overflow-hidden right-0 md:right-2 w-full  top-0 lg:w-[450px] rounded-[5px] h-[250px] md:h-[300px]">
                    <Image
                        src="/images/admission/requirement/requiremnt1.png"
                        alt="Hero"
                        // className="absolute right-2 object-cover rounded-xl "
                        // width={450}
                        // height={300}
                        fill
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="absolute max-lg:hidden overflow-hidden bottom-0 left-0 rounded-[5px] w-[250px] h-[180px] md:w-[355px] md:h-[220px]">
                    <Image
                        src="/images/admission/requirement/requirement2.png"
                        alt="Hero"
                        //className="absolute bottom-0 left-0 rounded-xl"
                        layout="fill"
                        // width={355}
                        // height={237}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </div>

        </div>

    );
};

export default RequirementsTab;
