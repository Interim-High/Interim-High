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
        </div>
    )
}