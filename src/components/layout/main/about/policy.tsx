import { CheckCircle,ChevronsRight} from "lucide-react"; 
import '@flaticon/flaticon-uicons/css/all/all.css'; // Import all icons

import Image from "next/image";
import Link from "next/link";
const policies :string[]=[
    "Institutional Policy",
    "Academic Integrity Policy",
    "Technology acceptable use policy",
    "Privacy policies",
    "Governance Policies"
]

function PolicySection() {
    return (
        <div className="flex flex-row mt-16  h-fit justify-center items-center">
            <div className="  bg-[#EDEDED]  flex flex-row justify-center items-center p-4  rounded-2xl gap-10">
           
            <div className="relative  w-[537px] h-[418px] ">
             
                {/* <div className="absolute right-2 w-[450px] border border-red-600 rounded-[5px] h-[300px]"> */}
                    <Image
                        src="/images/about/facilities1.png"
                        alt="Hero"
                        className="absolute left-2 "
                       width={450}
                       height={300}
                        // objectPosition="center"
                    />
                {/* </div> */}
                {/* <div className="absolute bottom-0 left-0 rounded-[5px] w-[355px] h-[237px]"> */}
                    <Image
                        src="/images/about/facilities2.png"
                        alt="Hero"
                        className="absolute bottom-0 right-0"
                        // layout="fill"
                        width={355}
                        height={237}
                        

                        // objectFit="cover"
                        // objectPosition="center"
                    />
                {/* </div> */}
            </div>
            <div className="flex flex-col border-2 p-5 gap-2 w-96 backdrop:bg-slate-500 bg-[#EDEDED] rounded-3xl">
                           <span className="flex flex-col gap-4 items-start ">
           
                               <h1 className="text-5xl font-normal text-red-700">Our Policies</h1>
                               <p className="text-[16px]">Know about our policies  </p>
                           </span>
                           {
                               policies.map((policy,index)=>(
                                   <ul className="flex flex-col list-none pl-0 " key={index}>
                                   <li className="flex items-center space-x-2">
                                       {/* <CheckCircle className="text-green-500" size={20} /> */}
                                       <Image
                                       src="/images/about/policy.png"
                                       alt="policy"
                                       width={20}
                                       height={20}

                                       />
                                       <span>{policy}</span>
                                   </li>
                                  </ul>
                               ))
                           }
                  <div className="flex flex-row space-y-1 space-x-2 rounded-xl w-full justify-end items-end text-red-400 p-2">
                            <Link href={"/policy"}>Learn More</Link>
                            <ChevronsRight className="text-red-500" size={20} />

                        </div>
                           {/* <ul className="flex flex-col list-none pl-0 gap-4">
                               <li className="flex items-center space-x-2">
                                   <CheckCircle className="text-green-500" size={20} />
                                   <span>Facility 1</span>
                               </li>
                               <li className="flex items-center space-x-2">
                                   <CheckCircle className="text-green-500" size={20} />
                                   <span>Facility 2</span>
                               </li>
                               <li className="flex items-center space-x-2">
                                   <CheckCircle className="text-green-500" size={20} />
                                   <span>Facility 3</span>
                               </li>
                           </ul> */}
           
                       </div>
            </div>
        </div>
    );
}

export default PolicySection;
