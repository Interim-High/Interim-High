import React from "react";
import Card from "./card";
interface AchievementProps {
    title: string,
    description: string,
    images: string,
}
const Achievementcards: AchievementProps[] = [{
    title: "Academic Achievements",
    description: "Academic achievements include high pass rates, top exam rankings, success in competitions, impactful research, and skill development programs, showcase",
    images: "/images/achievement/Artistic.png"
},
{
    title: "Athletic Achievements",
    description: "Academic achievements include high pass rates, top exam rankings, success in competitions, impactful research, and skill development programs, showcase",
    images: "/images/achievement/Artistic.png"
},
{
    title: "Artistic Achievements",
    description: "Academic achievements include high pass rates, top exam rankings, success in competitions, impactful research, and skill development programs, showcase",
    images: "/images/achievement/Artistic.png"
},
{
    title: "Professional Achievement",
    description: "Academic achievements include high pass rates, top exam rankings, success in competitions, impactful research, and skill development programs, showcase",
    images: "/images/achievement/Artistic.png"
}

]

function Achievement() {
    return (
        <div className="flex flex-col  mt-16 justify-center  items-center  gap-4">

            <div className="flex flex-col w-fit rounded-3xl justify-center  gap-5 items-start">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-normal text-red-700"> Danphelink Achievement</h1>
                    <p className="text-2xl">Explore our academic achievements with us</p>
                </div>

                <div className="flex flex-wrap p-2 bg-[#EDEDED]  rounded-3xl justify-center  gap-4 items-center">
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
        </div>
    );
}
export default Achievement;