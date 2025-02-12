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
            <div className="max-md:hidden relative w-[537px] h-[418px] ">
               
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
