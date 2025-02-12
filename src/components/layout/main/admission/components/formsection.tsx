import Image from "next/image";
import FormComponent from "./form";

export default function Formsection(){
    return(
        <div className="flex flex-col lg:flex-row w-full border border-red-700 justify-center items-center pl-2 pr-2 xl:pl-24 xl:pr-24 mt-16 gap-5 lg:gap-10 ">
            <div className="relative w-full max-md:w-full lg:w-[600px] xl:w-[800px] max-md:h-[400px] h-[550px]">
            <Image
            src = "/images/admission/form/admission.jpg"
            alt= "groupphoto"
            fill
            objectPosition="center"
            className="rounded-xl "
            />
            </div>
            
            <FormComponent/>
        </div>
    )
}