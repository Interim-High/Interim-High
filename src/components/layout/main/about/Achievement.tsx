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
            <div className="flex flex-col max-w-7xl bg-[#EDEDED] mt-16 p-4 rounded-3xl border m-auto space-y-4">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-5xl font-normal text-orange-600"> Danphelink Achievement</h1>
                    <p className="text-2xl">Explore our academic achievements with us</p>
                </div>

                <div className="flex flex-wrap w-full rounded-3xl items-start justify-between">
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