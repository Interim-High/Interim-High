import Image from "next/image";

function HeroSection() {
  return (
    <main className="relative w-full h-[2000px]">
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/events/hero/HeroImg.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-8xl font-bold">Our Events</h1>
          <p className="text-red-700 text-4xl mt-4">
            From Learning to Celebration – Every Event Counts!
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
