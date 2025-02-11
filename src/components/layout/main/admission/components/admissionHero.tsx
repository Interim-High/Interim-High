import Image from "next/image";

function AdmissionHero() {
    return (
        <div className="relative h-[60vh] w-full">
            <div className="relative h-[60vh] w-full">
                <Image
                    src="/images/admission/hero/admissionhero.png"
                    alt="admission hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-6xl sm:text-8xl font-bold">Admission</h1>
                <p className="text-red-600 text-2xl sm:text-4xl mt-4">
                    Unlock Endless Opportunities – Start Your Academic Journey Now!
                </p>
            </div>
        </div>
    );
}

export default AdmissionHero;
