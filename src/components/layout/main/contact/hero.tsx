import Image from "next/image";

function ContactHero() {
    return (
        <div className="relative w-full h-[60vh]">
            <div>
                <Image
                    src="/images/contact/contact.png"
                    alt="hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 space-y-4"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-8xl text-white font-bold">Contact Us</h1>
                <p className="text-red-600 text-4xl ">  Stay Connected, We're Here to Help! </p>
            </div>
        </div>
    )
}
export default ContactHero;