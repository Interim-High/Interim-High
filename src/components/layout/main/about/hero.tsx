import Image from "next/image";

function AboutHero() {
  return (
    <div className="relative w-full h-[2000px]">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/about/abouthero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Centered Text */}
        <div className="absolute h-[60vh] w-full text-center top-0  p-[70px]">
          
          
          <h1 className="text-white text-8xl font-bold">About Us</h1>
          <p className="text-red-500 text-[40px]">Get to know us</p>
            
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
