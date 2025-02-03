import Image from "next/image";

const ApprovalCriterias: string[] = [
    "Applicants must meet the minimum academic qualifications, including the required GPA or percentage in previous academic records.",
    "All necessary documents, including academic transcripts and identity proof, must be submitted correctly and within the deadline. Incomplete or false information will lead to disqualification.",
    "Admission is subject to the availability of seats in the program. If applications exceed the available capacity, priority will be given based on merit.",
    "A good disciplinary record is essential for admission. Any history of misconduct or fraudulent activities may lead to rejection.",
    "Admission is only confirmed once the required admission fee is paid within the specified deadline."
];

function ApproveSection() {
    return (
        <div className="flex flex-row justify-evenly p-4 items-center mt-16 ">
            <div className=" flex flex-row  p-3 justify-between gap-20 items-center rounded-bl-3xl rounded-tr-3xl w-[1200px] shadow-xl"> 
                <div className="flex flex-col gap-3 w-1/2 p-2">
                    <h1 className="text-4xl text-red-700">Approval Criteria</h1>
                    <ul className="mt-2 list-disc pl-5">
                        {ApprovalCriterias.map((Criteria, index) => (
                            <li key={index} className="text-justify text-lg">{Criteria}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={"/images/admission/approve/approve.jpg"}
                    alt="student"
                    width={500}
                    height={250}
                    className=" rounded-br-3xl rounded-tl-3xl"
                    objectFit="cover"
                />
            </div>
            </div>
        
    );
}

export default ApproveSection;
