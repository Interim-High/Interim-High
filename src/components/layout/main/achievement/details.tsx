type Achievement = {
    title: string,
    description: string,
}

const Achievementdetails: Achievement[] =
    [
        {
            title: "Academic Achievements",
            description: "The institution has consistently upheld its commitment to academic excellence, earning a reputation for delivering high-quality education across various disciplines. Our faculty members, many of whom are experts in their fields, provide students with a rigorous and comprehensive curriculum, ensuring they are well-prepared for their future careers. The institution has also seen numerous students achieve top ranks in national and international examinations, and its research output continues to grow, with several published papers and research projects contributing to global knowledge. We are proud of our academic achievements, as they reflect our dedication to nurturing talent and fostering a culture of lifelong learning."
        },
        {
            title: "Event and Workshop Achievements",
            description: "Our institution regularly organizes and hosts a wide range of events, workshops, and seminars, aimed at providing students with practical exposure and a platform to interact with industry experts. These events cover diverse areas, including academic discussions, technological innovations, entrepreneurship, and cultural exchange. Notable workshops have seen active participation from students, faculty, and external experts, promoting knowledge-sharing and skill development. Additionally, our students have played pivotal roles in organizing these events, showcasing their leadership and organizational skills, and making meaningful contributions to the academic community."
         }, {
            title: "Institutional Achievements",
            description: "The institution has made remarkable progress over the years, establishing itself as a leader in education and innovation. With state-of-the-art facilities, a modern campus, and a range of academic programs, it has attracted students from diverse backgrounds. The institution has earned multiple accolades for its infrastructure, teaching methodologies, and research contributions. Strategic partnerships with global academic institutions and industry leaders have opened new avenues for collaboration and knowledge exchange. Through these efforts, our institution continues to enhance its standing, not just within the country but on the global academic stage."
        },
        {
            title: "Student Achievements",
            description: "Our students have consistently demonstrated exceptional talent, leadership, and dedication, excelling in both academic and extracurricular pursuits. Many of our students have won national and international awards in fields such as science, technology, sports, and arts. They actively participate in community service, student organizations, and various cultural and sports events, where they exhibit teamwork, creativity, and a strong sense of responsibility. Several students have also launched their own entrepreneurial ventures, reflecting the institution's commitment to fostering innovation and preparing students to be leaders in their respective fields."
   } ]

function Details() {
    return (
        <div className=" mt-2 lg:mt-16">
            <div className="flex flex-col gap-8 lg:gap-16  p-4 lg:p-8 justify-center text-center items-center">
                {
                    Achievementdetails.map((detail,index)=>(
                        <div className="flex flex-col justify-center items-center gap-4  max-w-7xl" key={index}>
                            <h1 className=" text-3xl lg:text-4xl font-normal text-red-700"> {detail.title}</h1>
                            <p className=" text-lg lg:text-2xl text-[#1D1D1D] text-justify">{detail.description}</p>
                            </div>
                    ))

                }

            </div>


        </div>
    )
}
export default Details