import Image from "next/image";
type achievementProps = {
    name: string,
    extension: string,
}
const images: achievementProps[] = [
    {
        name: "Artistic",
        extension:"png",

    },
    {
        name: "Artistic",
        extension:"png",

    },
    {
        name: "Athletic",
        extension:"png",

    },
    {
        name: "Athletic",
        extension:"png",

    },
    {
        name: "Artistic",
        extension:"png",

    },
    {
        name: "Artistic",
        extension:"png",

    },
    {
        name: "Artistic",
        extension:"png",

    },
    {
        name: "Artistic",
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
                    <div key={index} className="w-fit  ">
                        <Image
                            src={`/images/achievement/${image.name}.${image.extension}`}
                            alt={image.name}
                            width={295}
                            height={255}
                        />
                    </div>
                ))
            }
            </div>

        </div>
    )
}
export default Hero;