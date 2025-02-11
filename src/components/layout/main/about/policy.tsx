import { CheckCircle, ChevronsRight } from "lucide-react";
import "@flaticon/flaticon-uicons/css/all/all.css"; // Import all icons

import Image from "next/image";
import Link from "next/link";
const policies: string[] = [
  "Institutional Policy",
  "Academic Integrity Policy",
  "Technology acceptable use policy",
  "Privacy policies",
  "Governance Policies",
];

function PolicySection() {
  return (
    <div className="  bg-[#EDEDED]  my-16 max-w-7xl mx-auto flex flex-row p-4 rounded-2xl justify-between items-center">
      <div className="relative  w-[537px] h-[418px] ">
        <Image
          src="/images/about/Facilities1.jpeg"
          alt="Hero"
          className="absolute left-2 rounded-lg "
          width={450}
          height={300}
        />

        <Image
          src="/images/about/facilities2.jpg"
          alt="Hero"
          className="absolute bottom-0 right-0 rounded-lg"
          width={355}
          height={237}
        />
      </div>
      <div className="flex flex-col h-fit justify-normal items-start space-y-4 mt-2 p-5 gap-2 w-96  bg-[#EDEDED] rounded-3xl">
        <span className="flex flex-col gap-4 items-start ">
          <h1 className="text-5xl font-normal text-orange-600">Our Policies</h1>
          <p className="text-[16px]">Know about our policies </p>
        </span>
        {policies.map((policy, index) => (
          <ul className="flex flex-col list-none pl-0 " key={index}>
            <li className="flex items-center space-y-2">
              <Image
                src="/images/about/policy.png"
                alt="policy"
                width={20}
                height={20}
              />
              <span>{policy}</span>
            </li>
          </ul>
        ))}
        <span className="flex flex-row space-y-1 space-x-2 rounded-xl w-full justify-end items-end text-red-800 p-2">
          <Link href={"/policy"}>Learn More</Link>
          <ChevronsRight className="text-red-800" size={20} />
        </span>
      </div>
    </div>
  );
}

export default PolicySection;
