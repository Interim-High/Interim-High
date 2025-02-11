import Image from "next/image";

function HeroSection() {
  return (
    <main className="relative w-full h-[350px]">
      <div className="absolute inset-0">
        <Image
          src="/images/newsandupdates/Hero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 px-4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold">
          News and Updates
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-orange-600">
          Be notified with us.
        </p>
      </div>
    </main>
  );
}

export default HeroSection;
