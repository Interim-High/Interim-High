import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { Details } from "../program/content";

function Information() {
  const { slug } = useParams();
  const program = Details.find((p) => p.slug === slug);
  return (
    <div className="flex flex-col lg:flex-row  lg:mx-28  relative  mx-4 lg:items-start my-5">
      <div className="w-full lg:max-w-[45%] aspect-[4/3]">
        <Image
          // src="/images/program/prd1.png"
          src={program?.imageSrc ?? "/default-image.jpg"} 
          alt="program image"
          layout="responsive"
          width={719}
          height={540}
          className="w-full h-full object-cover rounded-tl-[60px] rounded-tr-[2px] rounded-br-[60px] rounded-bl-[2px]"
        />
      </div>

      <div className=" absolute lg:relative w-full lg:max-w-[50%] bg-[#D8D1D1] p-6 lg:p-8 rounded-2xl right-20 mt-14 flex flex-col gap-6 shadow-lg h-fit">
        <h2 className="text-2xl lg:text-3xl font-semibold text-black">
          {/* Bachelor of Engineering (B.E.) */}
          {program?.title}
        </h2>

        <p className="text-sm lg:text-base text-black leading-relaxed text-justify">
          {program?.description}
        </p>

        <button className="bg-[#EFEDED] text-black px-6 py-3 text-lg font-medium rounded-md self-start hover:bg-gray-300 transition-all">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Information;
