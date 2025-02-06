import Image from "next/image";

function HeroSection() {
  return (
      <div className="relative h-[350px] w-full sm:h-[400px] md:[450px] lg:[500px]">
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
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold">
            Our Events</h1>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-orange-600">
            From Learning to Celebration – Every Event Counts!
          </p>
        </div>
      </div>
  );
}

export default HeroSection;
