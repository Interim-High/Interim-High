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
      
            <div className="m-auto bg-[#EDEDED] mt-16 flex flex-row items-center justify-between px-8 max-w-7xl rounded-2xl">
            <div className="flex flex-col gap-6">
                {/* <span className="flex flex-col gap-2 items-start "> */}

                    <h1 className="text-5xl font-normal text-orange-600">Our Facilities</h1>
                    <p className="text-[16px]">Different Campus Facilities for you   </p>
                {/* </span> */}
                {
                    facility.map((facility,index)=>(
                        <ul className="flex flex-col list-none pl-0 gap-4" key={index}>
                        <li className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500" size={20} />
                            <span>{facility}</span>
                        </li>
                       </ul>
                    ))
                }


            </div>
            <div className="relative w-[537px] h-[418px] p-4">
               
                    <Image
                        src="/images/about/facilities1.png"
                        alt="Hero"
                        className="absolute right-2 "
                       width={450}
                       height={300}
                       style={{ height: "auto", width: "auto" }}
                    />
              
                    <Image
                        src="/images/about/facilities2.png"
                        alt="Hero"
                        className="absolute bottom-0 left-0"
                        width={355}
                        height={237}
                        style={{ height: "auto", width: "auto" }}
                    />
              
            </div>
            </div>
     
    );
}

export default Facility;
