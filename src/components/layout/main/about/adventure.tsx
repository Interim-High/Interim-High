import Image from "next/image";

function AboutAdventure() {
  return (
    <div className="flex justify-center items-center w-full  mt-16">
        <div className=" flex flex-row w-fit bg-[#EBE3E3] rounded-xl relative gap-2 p-10 "> 

        <div className="border  w-[729px] h-auto p-5">
        <h1 className="text-3xl text-red-700 font-bold mb-4">Academic Adventure</h1>
        <p className="text-lg text-justify">
          Danphelink is a leading institution committed to academic excellence,
          innovation, and holistic development. Located in kamalpokhari,01, we offer
          diverse programs, expert faculty, and modern facilities to prepare
          students for a dynamic world. Beyond academics, we foster community
          engagement and personal growth, empowering students to make meaningful
          contributions to society. Join us and shape your future with
          opportunity and purpose.
        </p>
      </div>

      <div className="relative w-[357px] h-[295px]">
        <Image
          src="/images/about/adventure.png"
          alt="Academic Adventure"
          fill
          className="object-cover object-center"
        />
      </div>
        </div>
      
    </div>
  );
}

export default AboutAdventure;
