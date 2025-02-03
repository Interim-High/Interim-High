import Image from "next/image";

function HeroSection() {
    return (
        <main className="relative w-full h-[450px]">
            <div className="relative w-full h-[60vh]">
                <div className="absolute inset-0">
                    <Image
                    src = "/images/newsandupdates/Hero.png"
                    alt = "Hero"
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
                    <h1 className="text-8xl text-white font-bold">News and Updates</h1>
                    <p className="text-4xl text-red-600">Be notified with us.</p>
                </div>
            </div>

        </main>

    )
}

export default HeroSection;