import Image from "next/image";

export default function Head (){
    return (
        <div className="flex items-center flex-col p-4">
            <Image
            src="/images/Footer/AcademicLogoHeader.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-cover object-center"
            />
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-2xl text-white">Danphelink Academy</h2>
                <p className="text-gray-300">Founded in 2024</p>
            </div>
        </div>
    )
}