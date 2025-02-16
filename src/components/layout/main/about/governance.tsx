import Image from "next/image";
import Link from "next/link";

const Governance = () => {
  return (
    // <div className="max-w-7xl h-fit grid grid-cols-1 lg:grid-cols-2 p-6 mx-auto mt-10 justify-center items-center text-justify gap-8 rounded-[40px] shadow-lg">
    //   <div className="flex flex-col w-full max-w-2xl lg:mt-8 gap-4">
    //     <h1 className="text-3xl sm:text-4xl text-red-700 font-semibold text-center lg:text-left">
    //       Message From The CEO
    //     </h1>

    //     <div className="flex flex-col mt-4 sm:mt-6 gap-6">
    //       <p className="leading-relaxed text-base sm:text-lg">
    //         I am thrilled to share our vision and commitment at DanpheLink,
    //         where we empower businesses and individuals through our first-rate
    //         IT solutions, exceptional animation projects, and rigorous training
    //         programs.
    //       </p>
    //       <p className="leading-relaxed text-base sm:text-lg">
    //         We provide various IT Services such as Custom Software Development,
    //         Cybersecurity Solutions, and Data Analytics to improve business
    //         performance. We offer advanced 2D and 3D Animation, Motion Graphics,
    //         VFX, and Interactive Media in the animation space.
    //       </p>
    //       <p className="leading-relaxed text-base sm:text-lg">
    //         We are committed to teaching individuals and teams how they can use
    //         technology at our academy. Our practical training sessions involve
    //         software development, cybersecurity, and other important IT courses
    //         to develop skills and animation workshops using the latest animation
    //         techniques.
    //       </p>
    //       <p className="leading-relaxed text-base sm:text-lg">
    //         Success is led by innovation and education, or so we feel. Our teams
    //         strive for ongoing learning, so we may provide you with the best
    //         solutions. Let’s work together to innovate and excel.
    //       </p>
    //     </div>

    //     <Link
    //       href="/governance-structure"
    //       className="p-3 sm:p-4 border-2 border-orange-500 w-fit mx-auto rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-center"
    //     >
    //       Meet Our People
    //     </Link>
    //   </div>

    //   <div className="w-full max-w-md sm:max-w-lg lg:w-[607px] h-auto overflow-hidden mt-6 mx-auto lg:rounded-tl-[40px] lg:rounded-br-[40px] rounded-xl">
    //     <Image
    //       src="/images/about/ceophoto.jpeg"
    //       alt="CEO Photo"
    //       width={607}
    //       height={720}
    //       className="w-full h-auto object-cover"
    //     />
    //   </div>
    // </div>
    <div className="max-w-7xl h-fit grid grid-cols-1 lg:grid-cols-2 p-6 mx-auto mt-10 justify-center items-center text-justify gap-8 rounded-[40px] shadow-lg">
      <div className="flex flex-col w-full max-w-2xl lg:mt-8 gap-4">
        <h1 className="text-3xl sm:text-4xl text-orange-700 font-semibold text-center lg:text-left">
          Message <span className="text-[#164561] ">From</span> The CEO
        </h1>

        <div className="flex flex-col mt-4 sm:mt-6 gap-6">
          <p className="leading-relaxed text-base sm:text-lg">
            I’m excited to share DanpheLink’s vision to empower businesses and
            individuals with top-tier IT solutions, animation projects, and
            training.
          </p>
          <p className="leading-relaxed text-base sm:text-lg">
            We offer IT services like Custom Software Development, Cybersecurity
            Solutions, and Data Analytics, alongside advanced 2D/3D Animation
            and Interactive Media.
          </p>
          <p className="leading-relaxed text-base sm:text-lg">
            Our academy provides hands-on training in software development,
            cybersecurity, and animation, using cutting-edge tools and
            techniques.
          </p>
          <p className="leading-relaxed text-base sm:text-lg">
            Innovation and education drive our success. Let’s collaborate to
            innovate and excel together.
          </p>
        </div>

        <Link
          href="/governance-structure"
          className="p-3 sm:p-4 border-2 border-orange-500 w-fit mx-auto rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-center"
        >
          Meet Our People
        </Link>
      </div>

      <div className="w-full max-w-md sm:max-w-lg lg:w-[607px] h-auto overflow-hidden mt-6 mx-auto lg:rounded-tl-[40px] lg:rounded-br-[40px] rounded-xl">
        <Image
          src="/images/about/ceophoto.jpeg"
          alt="CEO Photo"
          width={607}
          height={720}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Governance;
