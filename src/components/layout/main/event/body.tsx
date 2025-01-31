import Image from "next/image";

 function BodyEvent() {
    return (
            <div className="relative w-[1240px]">
                <div className="absolute inset-0 m-10">
                    <Image
                        src = "/images/events/events/Workshop.png"
                        alt = "event"
                        width={614}
                        height={414}
                        
                    />
                </div>

            </div>
    )
 }

 export default BodyEvent;