import Image from "next/image";

function Hero() {
  return (
    <main className=" w-full h-fit">
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/program/hero.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-8xl font-bold">Our Events</h1>
          <p className="text-red-600 text-4xl mt-4">Explore our programs</p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
