import Image from "next/image";

function AboutHero() {
  return (
    <div className="relative w-full h-[2000px]">
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
       
        <div className="absolute h-[60vh] w-full text-center flex flex-col justify-center items-center">
          
          
          <h1 className="text-white text-8xl font-bold">About Us</h1>
          <p className="text-red-500 text-[40px]">Get to know us</p>
            
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
