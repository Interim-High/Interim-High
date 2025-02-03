import Image from "next/image";
import Link from "next/link";


type CardProps = {
    title?: string,
    personName? :string ,
    className?: string,
    description?: string,
    layout?: "achievement" | "program" | "governance" | "descriptionmodal",
    images?: string,
    skill?: string[],
    designation?: string,
   

}

const Card = ({ title,personName ,images, className, description, designation, skill, layout = "achievement" }: CardProps) => {
    return (
        <div>
            {
                layout === "achievement" && (
                    <div className="flex flex-col items-center justify-center p-1 bg-stone-300 overflow-hidden rounded-xl w-[275px] h-[fit] gap-2">
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
                        <div className=" w-full text-center gap-2 p-2 ">
                            <h1 className="text-lg font-semibold">{title}</h1>
                            <p className="text-justify text-sm text-gray-600 break-words line-clamp-4">
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
                    <div className="flex flex-col items-center border border-blue-400 justify-center p-2 bg-stone-300 overflow-hidden rounded-xl w-fit h-fit  gap-2">
                        <div className="overflow-hidden rounded-xl ">
                            {images && (
                                <Image
                                    src={images}
                                    alt={personName || "hero"}
                                    width={200}
                                    height={300}
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            )}
                        </div>
                        <div className=" w-full text-center gap-2 p-2 ">
                            <h1 className="text-lg font-semibold">{personName}</h1>
                            <h1 className="text-lg font-semibold">{designation}</h1>

                        </div>
                    </div>
                )
            }
            {
                layout === "descriptionmodal" && (
                    <div className={className}>
                        <div className="relative w-[500px] h-[550px]">
                        {images && (
                            <Image
                                src={images}
                                alt={personName || "hero"}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        )}
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-col">
                                <h1 className="text-4xl font-bold "> {title}</h1>
                                <p className="text-xl font-light text-[#1D1D1D]">{designation}</p>
                            </div>
                            <div className="flex flex-col gap-2 border-4 w-[400px]">
                                <h1 className="text-3xl font-semibold text-[#1D1D1D]"> Overview</h1>
                                <p className="text-xl text-justify break-words line-clamp-4">{description}</p>
                            </div>
                            <div className="flex flex-col">
                                <h1> Skills & Certifications</h1>
                                <div className="grid grid-cols-2 gap-2">
                                    {skill?.map((s, index) => (
                                        <span key={index} className="bg-gray-200 w-fit text-center p-2 px-4 rounded-3xl">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>

                )
            }
        </div>
    )
}
export default Card;