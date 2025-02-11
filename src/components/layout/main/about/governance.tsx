import Image from "next/image"
import Button from "./button"
import Link from "next/link"

function Governance() {
    return (
        <div className="w-[1280px] grid grid-cols-2 p-4 mx-auto mt-16 justify-center text-justify gap-8 rounded-[60px] shadow-lg">
            <div className="flex flex-col mt-8 gap-4">
                <h1 className="text-4xl text-red-700"> Message From The Principle</h1>
                <span className="flex flex-col mt-6 gap-8">
                <p className="leading-relaxed  text-base">
                    I am thrilled to share our vision and commitment at DanpheLink, where we empower businesses and individuals through our first-rate IT solutions, exceptional animation projects, and rigorous training programs, we empower businesses as well as individuals to thrive.
                </p>
                <p className="leading-relaxed">We provide various IT Services such as Custom Software Development, Cybersecurity Solutions, Data Analytics to improve the business performance. We offer advanced 2D and 3D Animation, Motion Graphics, VFX, and Interactive Media in the animation space.
                </p>
                <p className="leading-relaxed">We are committed to teaching individuals and teams how they can use technology at our academy. Our practical training sessions involve software development, cybersecurity, and other important IT courses to develop skills and animation workshops using the latest animation techniques.
                </p>
                <p className="leading-relaxed">Success is led by innovation and education, or so we feel. Our teams strive for ongoing learning, so we may provide you with the best solutions. Let’s work together to innovate and excel.
                </p>
               <Link href={"/governance-structure"} className="p-4 border-2 border-orange-500 w-fit mx-auto rounded-full hover:bg-orange-500">Meet Our People </Link>
                
                </span>
            </div>
            <div className="  w-[607px] h-[720px] overflow-hidden mt-8 rounded-tl-[60px] rounded-br-[60px]">
                <Image
                    src="/images/about/ceophoto.jpeg"
                    alt="ceo phto"
                    width={607}
                    height={720}
                    className="object-cover object-center"
                />
            </div>


        </div>
    )
}
export default Governance