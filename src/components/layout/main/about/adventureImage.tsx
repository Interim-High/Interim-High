import Image from "next/image";

function AdventureImage() {
    return (
        // <div className=" relative border  h-[295px] w-[357px]">
        //  <div className=" absolute h-[145px] w-[159px] top-0 right-0 bg-orange-500"></div>
        //  <div className=" absolute h-[145px]  left-0 bottom-0 w-[159px] bg-red-500"></div>
        //  <div className="absolute w-[292px] h-[230px] left-4 right-4 top-0">
        //     <Image
        //     src={"/images/about/bills.jpg"}
        //     alt="adventure" 
        //     fill
        //      objectFit="contain"
        //     />
        //  </div>

        // </div>
        <div className="relative h-[285px] w-[345px]  mt-3">
           
                <div className=" absolute h-[145px] w-[159px] bottom-0 left-0 bg-orange-500 rounded-bl-xl"></div>
                <div className=" absolute h-[145px] w-[159px] top-1 right-1 bg-orange-500 rounded-tr-xl"></div>
                <div className="absolute w-[280px] h-[220px] rounded-lg overflow-hidden left-8 right-4 bottom-8">
            <Image
            src={"/images/about/about.jpg"}
            alt="adventure" 
            layout="fill"
            objectPosition="center"
            objectFit="cover"
           
            />
         </div>
            </div>
    

    );
};
export default AdventureImage;