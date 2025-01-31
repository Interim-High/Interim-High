import Image from "next/image";

function AboutHero() {
    return (
        <div className="relative w-full h-fit">
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 ">
                    <Image
                        src="/images/about/abouthero.png"
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white text-8xl font-bold">About Us</h1>
                    <p className="text-red-600 text-4xl mt-4">
                       Get to know us
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
