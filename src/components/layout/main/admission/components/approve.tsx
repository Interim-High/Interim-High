import Image from "next/image";
import { ApprovalCriterias } from "./Requirements";



function ApproveSection() {
    return (
        <div className="p-2">
            <div className=" flex lg:flex-row flex-col p-3 md:mx-auto gap-10 md:gap-20 justify-center items-center rounded-br-3xl rounded-tl-3xl w-md md:w-full drop-shadow-xl">
                <div className="flex flex-col gap-3 w-full lg:w-1/2 p-2">
                    <h1 className="text-2xl md:text-4xl text-red-700">Approval Criteria</h1>
                    <ul className="mt-2 list-disc pl-5">
                        {ApprovalCriterias.map((Criteria, index) => (
                            <li key={index} className="text-justify text-base md:text-lg xl:text-xl">{Criteria}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={"/images/admission/approve/approve.jpg"}
                    alt="student"
                    width={600}
                    height={250}
                    className=" rounded-br-3xl md:space-x-6 rounded-tl-3xl"
                    objectFit="cover"
                />
            </div>
        </div>

    );
}

export default ApproveSection;
