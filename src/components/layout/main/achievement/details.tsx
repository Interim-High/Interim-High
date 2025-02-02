type Achievement = {
    title: string,
    description: string,
}

const Achievementdetails: Achievement[] =
    [
        {
            title: "Academic Achievements",
            description: "Academic achievements in college highlight excellence in education through high pass rates, top rankings in exams, and student success in competitions like debates, hackathons, and quizzes. They include impactful research collaborations, internships, and skill development programs, alongside faculty publications in reputed journals. These accomplishments reflect the college's dedication to preparing students for a competitive global environment."
        },
        {
            title: "Artistic Achievements",
            description: "Artistic achievements include student success in music, dance, drama, and visual arts competitions at local, national, or international levels. Hosting art exhibitions, cultural festivals, and performances showcases talent and creativity, fostering a vibrant and inclusive artistic community within the college. Students often collaborate on large-scale projects, such as theatrical productions or murals, highlighting teamwork and innovation. These initiatives not only celebrate cultural diversity but also nurture individual expression and artistic growth."
        },
        {
            title: "Professional Achievements",
            description: "Professional achievements highlight the college's success in preparing students for careers through strong industry partnerships, internship opportunities, and skill development programs. Alumni securing prestigious positions in top companies, consistent campus placements, and entrepreneurial ventures reflect the institution's focus on real-world readiness and professional excellence. The college also provides career counseling, workshops, and networking events, helping students build essential professional skills and connections."
        },
        {
            title: "Athletic Achievements",
            description: "Athletic achievements include student success in sports competitions at regional, national, and international levels. The college may also host tournaments, develop standout athletes, and maintain excellent sports facilities, promoting physical fitness and teamwork among students. Additionally, the college encourages participation in various sports by offering specialized coaching, fitness programs, and opportunities for students to excel in their chosen disciplines. Through these efforts, the institution fosters a competitive yet supportive environment that inspires students to achieve their athletic potential and contribute to the college's sports culture."
        },
    ]

function Details() {
    return (
        <div className=" mt-20">
            <div className="flex flex-col gap-16  p-4 justify-center items-center">
                {
                    Achievementdetails.map((detail,index)=>(
                        <div className="flex flex-col justify-center items-center gap-4  w-[1100px]" key={index}>
                            <h1 className="text-4xl font-normal text-red-700"> {detail.title}</h1>
                            <p className="text-[#1D1D1D] text-justify">{detail.description}</p>
                            </div>
                    ))

                }

            </div>


        </div>
    )
}
export default Details