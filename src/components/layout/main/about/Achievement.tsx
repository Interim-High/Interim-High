import React from "react";
import Card from "./card";
type AchievementProps ={
    title: string,
    description: string,
    images: string,
}
const Achievementcards: AchievementProps[] = [{
    title: "Academic Achievements",
    description: "The institution has consistently upheld its commitment to academic excellence, earning a reputation for delivering high-quality education across various disciplines. Our faculty members, many of whom are experts in their fields, provide students with a rigorous and comprehensive curriculum, ensuring they are well-prepared for their future careers. The institution has also seen numerous students achieve top ranks in national and international examinations, and its research output continues to grow, with several published papers and research projects contributing to global knowledge. We are proud of our academic achievements, as they reflect our dedication to nurturing talent and fostering a culture of lifelong learning.",
    images: "/images/about/academy.png"
},
{
    title: " Workshop Achievements",
    description: "Our institution regularly organizes and hosts a wide range of events, workshops, and seminars, aimed at providing students with practical exposure and a platform to interact with industry experts. These events cover diverse areas, including academic discussions, technological innovations, entrepreneurship, and cultural exchange. Notable workshops have seen active participation from students, faculty, and external experts, promoting knowledge-sharing and skill development. Additionally, our students have played pivotal roles in organizing these events, showcasing their leadership and organizational skills, and making meaningful contributions to the academic community.",
    images: "/images/about/workshop.png"
},
{
    title: "Institutional Achievements",
    description: "The institution has made remarkable progress over the years, establishing itself as a leader in education and innovation. With state-of-the-art facilities, a modern academy, and a range of academic programs, it has attracted students from diverse backgrounds. The institution has earned multiple accolades for its infrastructure, teaching methodologies, and research contributions. Strategic partnerships with global academic institutions and industry leaders have opened new avenues for collaboration and knowledge exchange. Through these efforts, our institution continues to enhance its standing, not just within the country but on the global academic stage.",
    images: "/images/about/institutional.png"
},
{
    title: "Student Achievement",
    description: "Our students have consistently demonstrated exceptional talent, leadership, and dedication, excelling in both academic and extracurricular pursuits. Many of our students have won national and international awards in fields such as science, technology, sports, and arts. They actively participate in community service, student organizations, and various cultural and sports events, where they exhibit teamwork, creativity, and a strong sense of responsibility. Several students have also launched their own entrepreneurial ventures, reflecting the institution's commitment to fostering innovation and preparing students to be leaders in their respective fields.",
    images: "/images/about/student.png"
}

]

function Achievement() {
    return (
        

            <div className="flex flex-col w-[1242px] bg-[#EDEDED] mt-16 p-4 rounded-3xl border justify-center m-auto  gap-5 items-start">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-normal text-red-700"> Danphelink Achievement</h1>
                    <p className="text-2xl">Explore our academic achievements with us</p>
                </div>

                <div className="flex flex-wrap p-2  w-full rounded-3xl justify-center  gap-6 items-center">
                    {Achievementcards.map((achievement, index) => (
                        <Card
                            key={index}
                            title={achievement.title}
                            description={achievement.description}
                            images={achievement.images}
                        />
                    ))}
                </div>
            </div>
        
    );
}
export default Achievement;