import Image from "next/image";

const ApprovalCriterias: string[] = [
    "Applicants should have a basic understanding of computers. A foundation in programming is preferred but not required",
    "Applicants must provide accurate personal details. Any incomplete or incorrect information may result in disqualification",
    "Admission is subject to the availability of seats in the program. If the number of applications exceeds the available capacity, admission will be granted on a first-come, first-served basis",
    "Admission is only confirmed once the required admission fee is paid within the specified deadline."
];

function ApproveSection() {
    return (
        <div className="flex flex-row justify-evenly p-4 items-center mt-16 ">
            <div className=" flex flex-row  p-3 justify-between gap-20 items-center rounded-br-3xl rounded-tl-3xl w-[1200px] shadow-xl">
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
