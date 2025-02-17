import Image from "next/image";
import { Achievementdetails, images } from "./details";



function Hero() {
  return (
    <div>
      <div className="  mt-14 flex flex-col justify-center items-center gap-9">
        <h1 className="text-5xl text-orange-600 font-semibold"> Achievements</h1>
        <div className=" grid grid-cols-4 gap-4 w-fit ">
          {images.map((image, index) => (
            <div key={index} className="w-fit h-fit border border-black">
              <Image
                src={`/images/about/${image.name}.${image.extension}`}
                alt={image.name}
                width={295}
                height={255}
                className="object-center object-cover aspect-[3/2]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-2 lg:mt-16">
            <div className="flex flex-col gap-8 lg:gap-16  p-4 lg:p-8 justify-center text-center items-center">
                {
                    Achievementdetails.map((detail,index)=>(
                        <div className="flex flex-col justify-center items-center gap-4  max-w-6xl" key={index}>
                            <h1 className=" text-3xl lg:text-4xl font-normal text-orange-600"> {detail.title}</h1>
                            <p className=" text-lg lg:text-xl text-[#1E1E1E] text-justify">{detail.description}</p>
                            </div>
                    ))
                }

            </div>


        </div>
    </div>
  );
}
export default Hero;
