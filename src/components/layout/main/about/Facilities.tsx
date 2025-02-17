import { CheckCircle } from "lucide-react"; // Importing the CheckCircle icon
import Image from "next/image";

const facility: string[] = [
  "Academic Facilities",
  "Parking Facilities",
  "Recreational Facilities",
  "Career Counselling",
  "ExtraCurricular Services",
];

function Facility() {
  return (
    <div className="border-2 mx-auto max-lg-w-fit  bg-[#EDEDED] mt-16 flex flex-row justify-between items-center p-4 max-w-7xl rounded-2xl">
      <div className="flex flex-col max-lg:w-full gap-8 mx-6">
        <h1 className="text-4xl font-semibold text-orange-600"><span className="text-[#164561] ">Our</span> Facilities</h1>
        <p className="text-[16px]">Different Campus Facilities for you </p>
        {facility.map((facility, index) => (
          <ul className="flex flex-col list-none pl-0" key={index}>
            <li className="flex items-center space-x-4">
              <CheckCircle className="text-orange-600" size={20} />
              <span>{facility}</span>
            </li>
          </ul>
        ))}
      </div>
      <div className="max-md:hidden md:relative w-[537px] h-[418px] ">
        <Image
          src="/images/about/aboutfacility3.png"
          alt="Hero"
          className="absolute right-2 "
          width={450}
          height={300}
          // style={{ height: "auto", width: "auto" }}
        />

        <Image
          src="/images/about/aboutfacility2.png"
          alt="Hero"
          className="absolute bottom-0 left-0"
          width={355}
          height={237}
          // style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
}

export default Facility;
