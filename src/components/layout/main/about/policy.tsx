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
            <div className="  bg-[#EDEDED]  mt-16 w-[1340px] mx-auto flex flex-row  p-4  rounded-2xl justify-between items-center">
            <div className="relative  w-[537px] h-[418px] ">
                    <Image
                        src="/images/about/facilities1.png"
                        alt="Hero"
                        className="absolute left-2 "
                       width={450}
                       height={300}
                    />
               
                    <Image
                        src="/images/about/facilities2.png"
                        alt="Hero"
                        className="absolute bottom-0 right-0"
                        width={355}
                        height={237}
                    />
            </div>
            <div className="flex flex-col h-fit justify-normal items-start border-2 mt-2 p-5 gap-2 w-96 backdrop:bg-slate-500 bg-[#EDEDED] rounded-3xl">
                           <span className="flex flex-col gap-4 items-start ">
           
                               <h1 className="text-5xl font-normal text-red-700">Our Policies</h1>
                               <p className="text-[16px]">Know about our policies  </p>
                           </span>
                           {
                               policies.map((policy,index)=>(
                                   <ul className="flex flex-col list-none pl-0 " key={index}>
                                   <li className="flex items-center space-x-2">
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
                  <span className="flex flex-row space-y-1 space-x-2 rounded-xl w-full justify-end items-end text-red-400 p-2">
                            <Link href={"/policy"}>Learn More</Link>
                            <ChevronsRight className="text-red-500" size={20} />

                        </span>   
                       </div>
            </div>
    
    );
}

export default PolicySection;
