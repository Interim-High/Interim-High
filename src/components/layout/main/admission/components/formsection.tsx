import Image from "next/image";
import FormComponent from "./form";

export default function Formsection(){
    return(
        <div className="flex flex-row  justify-center items-center pl-24 pr-24 mt-16 gap-10 ">
            <Image
            src = "/images/admission/form/groupphoto.jpg"
            alt= "groupphoto"
            width={800}
            height={400}
            />
            <FormComponent/>
        </div>
    )
}