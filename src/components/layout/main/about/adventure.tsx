import Image from "next/image";
import AdventureImage from "./adventureImage";

function AboutAdventure() {
  return (
    // <div className="flex justify-center items-center w-full border mt-16">
        <div className="flex flex-col md:flex-row mt-16 bg-[#EBE3E3] rounded-xl m-auto items-center justify-between max-w-7xl relative gap-8 p-4 md:p-10 "> 

        <div className="w-ful h-auto ">
        <h1 className="text-2xl md:text-3xl text-orange-600 font-bold mb-4"><span className="text-[#164561]">Academic </span>Adventure</h1>
        <p className=" text-base tracking-normal  md:text-lg text-justify">
          Danphelink is a leading institution committed to academic excellence,
          innovation, and holistic development. Located in kamalpokhari,01. we offer
          diverse programs, expert faculty, and modern facilities to prepare
          students for a dynamic world. Beyond academics, we foster community
          engagement and personal growth, empowering students to make meaningful
          contributions to society. Join us and shape your future with
          opportunity and purpose.
        </p>
      </div> 

      <div className="w-fit h-[295px]">
       <AdventureImage/>
      </div>
       </div>
      
    // </div>
  );
}

export default AboutAdventure;
