import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';import { XIcon } from 'lucide-react';
;
import Image from "next/image";
import Link from "next/link";
import Button from './button';


type CardProps = {
    title?: string,
    personName?: string,
    className?: string,
    description?: string,
    layout?: "achievement" | "program" | "governance" | "descriptionmodal",
    images?: string,
    skill?: string[],
    email?: string,
    designation?: string,
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void

}

const Card = ({ title, personName, images, className, email, description, designation, skill, layout = "achievement" ,onClick}: CardProps) => {
    return (
        <div>
            {
                layout === "achievement" && (
                    <div className="flex flex-col items-center justify-center p-2 bg-stone-300 overflow-hidden rounded-xl w-fit md:w-[275px] h-fit gap-2">
                        <div className="overflow-hidden rounded-xl ">
                            {images && (
                                <Image
                                    src={images}
                                    alt={title || "no image"}
                                    width={275}
                                    height={241}
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            )}
                        </div>
                        <div className=" w-full  gap-2 p-2 ">
                            <h1 className="text-lg text-center font-semibold">{title}</h1>
                            <p className="text-justify text-sm text-gray-600 break-words line-clamp-5">
                                {description}
                            </p>
                        </div>

                        <div className=" rounded-xl w-full text-center bg-orange-400 p-2">
                            <Link href={"/achievement-detail"}>Learn More</Link>
                        </div>
                    </div>

                )
            }
            {
                layout === "governance" && (
                    <div className="flex flex-col items-center bg-[#EDEDED] justify-centeoverflow-hidden w-fit h-fit rounded-2xl  gap-2">
                        <div className=" overflow-hidden rounded-lg">
                            {images && (
                                <Image
                                    src={images}
                                    alt={personName || "hero"}
                                    width={450}
                                    height={320}
                                    style={{ objectFit: "fill", aspectRatio: "1/1" }}
                                />
                            )}
                        </div>
                        <div className=" w-full text-center gap-2 p-2 ">
                            <h1 className="text-lg font-semibold">{personName}</h1>
                            <h1 className="text-lg font-semibold text-slate-700">{designation}</h1>

                        </div>
                    </div>
                )
            }
            {
                layout === "descriptionmodal" && (
                    <div className={className}>
                        {/* <div className="w-[500px] h-[550px] overflow-hidden flex items-center justify-center bg-gray-100">
                        {images && (
                            <Image
                                src={images}
                                alt={personName || "hero"}
                                width ={500}
                                height={550}
                                className="object-cover w-full h-full"
                            />
                        )}
                        </div> */}
                        <div className="relative w-[500px] h-[550px] lg:my-auto overflow-hidden">
                            {images && (<Image
                                src={images}
                                alt={personName || "hero"}
                                fill
                                objectFit="cover"
                                className="brightness-100 contrast-100 saturate-150"
                            />
                            )}
                            <div className="absolute w-[500px] h-[550px]  opacity-15 bg-black"></div>
                        </div>


                        <div className="flex flex-col w-[700px] gap-4 p-2">
                        <button onClick={onClick} className="ml-auto">
    <XIcon />
</button>

                            <div className="flex flex-col gap-1">
                                <h1 className="text-4xl font-bold "> {personName}</h1>
                               
                                <p className="text-xl font-light text-[#1D1D1D]">{designation}</p>
                            </div>

                            <Link href={`mailto:${email}`} className="flex flex-row items-center w-fit gap-2">
                                <MailOutlineOutlinedIcon fontSize="large" className="rounded-lg  " />

                                <p className="text-xl text-red-500 font-normal text-center ">{email} </p>
                            </Link>

                            <div className="flex flex-col gap-2 w-full">
                                <h1 className="text-3xl font-semibold text-[#1D1D1D]"> Overview</h1>
                                <p className="text-lg text-justify font-normal break-words">{description}</p>
                            </div>
                            {Array.isArray(skill) && skill.length > 0 && (
                                <div className="flex flex-col gap-4">
                                    <h1>Skills & Certifications</h1>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.map((s, index) => (
                                            <span key={index} className="bg-gray-200 w-fit text-center p-2 px-4 rounded-3xl">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>

                )
            }
        </div>
    )
}
export default Card;