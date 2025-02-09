import Image from "next/image";

function AboutHero() {
    return (
        <div className="relative w-full h-[60vh] ">
            <div className="relative w-full h-full">
                <Image
                    src="/images/about/abouthero.png"
                    alt="Hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center">
                    About Us
                </h1>
                <p className="text-orange-600 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center mt-2">
                    Get To Know Us
                </p>
            </div>
        </div>
    );
}

export default AboutHero;
