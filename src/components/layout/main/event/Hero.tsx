import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative w-full h-[60vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/events/hero/HeroImg.png"
          alt="Hero"
          // width={1536}
          // height={45}
          layout="fill"
          className="object-center object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight">
          Our Events
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-500 mt-2 sm:mt-4">
          From Learning to Celebration - Every Event Counts!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
