import Image from "next/image";
type achievementProps = {
    name: string,
    extension: string,
}
const images: achievementProps[] = [
    {
        name: "academy",
        extension:"png",

    },
    {
        name: "institutional",
        extension:"png",

    },
    {
        name: "student",
        extension:"png",

    },
    {
        name: "workshop",
        extension:"png",

    },
    {
        name: "institution2",
        extension:"png",

    },
    {
        name: "student",
        extension:"png",

    },
    {
        name: "workshop",
        extension:"png",

    },
    {
        name: "institutional",
        extension:"png",

    },

]


function Hero() {
    return (
        <div className="  mt-14 flex flex-col justify-center items-center gap-9">
            <h1 className="text-5xl text-red-700"> Achievements</h1>
            <div  className=" grid grid-cols-4 gap-4 w-fit ">
            {
                images.map((image, index) => (
                    <div key={index} className="w-fit h-fit border border-black">
                        <Image
                            src={`/images/about/${image.name}.${image.extension}`}
                            alt={image.name}
                            width={295}
                            height={255}
                            className="object-center object-cover aspect-[3/2]"
                        />
                    </div>
                ))
            }
            </div>

        </div>
    )
}
export default Hero;