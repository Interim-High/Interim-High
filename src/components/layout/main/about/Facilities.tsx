import { CheckCircle } from "lucide-react"; // Importing the CheckCircle icon
import Image from "next/image";

    const facility :string[]=[
        "Academic Facilities",
        "Parking Facilities",
        "Recreational Facilities",
        "Career Counselling",
        "ExtraCurricular Services"
    ]



function Facility() {
    return (
        <div className="flex flex-row mt-16  h-fit  justify-center items-center">
            <div className=" border-2 bg-[#EDEDED]  flex flex-row justify-center items-center p-4  rounded-2xl gap-[240px]">
            <div className="flex flex-col   gap-8">
                <span className="flex flex-col gap-2 items-start ">

                    <h1 className="text-5xl font-normal text-red-700">Our Facilities</h1>
                    <p className="text-[16px]">Different Campus Facilities for you   </p>
                </span>
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
        </div>
    );
}

export default Facility;
