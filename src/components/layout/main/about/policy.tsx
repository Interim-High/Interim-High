import { ChevronsRight } from "lucide-react";
import "@flaticon/flaticon-uicons/css/all/all.css";

import Image from "next/image";
import Link from "next/link";

const policies: string[] = [
  "Institutional Policy",
  "Academic Integrity Policy",
  "Technology Acceptable Use Policy",
  "Privacy Policies",
  "Governance Policies",
];

function PolicySection() {
  return (
    <div className="bg-[#EDEDED] my-16 max-w-7xl mx-auto flex flex-row p-6 rounded-2xl justify-stretch  items-center">
      <div className="hidden md:block relative w-[500px] h-[400px] border border-radius">
        <Image
          src="/images/about/Facilities1.jpeg"
          alt="Facility 1"
          className="absolute left-1 rounded-lg"
          width={500}
          height={320}
        />
        <Image
          src="/images/about/facilities2.jpg"
          alt="Facility 2"
          className="absolute bottom-0 -right-20 rounded-lg"
          width={340}
          height={230}
        />
      </div>

      <div className="flex flex-col h-fit items-start space-y-4 p-5 rounded-3xl ">
        <h1 className="text-5xl font-semibold text-orange-600">Our Policies</h1>
        <p className="text-[16px] text-gray-700">Know about our policies</p>

        <ul className="list-none space-y-3">
          {policies.map((policy, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src="/images/about/policy.png"
                alt="Policy"
                width={20}
                height={20}
              />
              <span className="text-gray-800">{policy}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 text-red-800 font-medium hover:underline">
          <Link href="/policy">Learn More</Link>
          <ChevronsRight size={20} />
        </div>
      </div>
    </div>
  );
}

export default PolicySection;
