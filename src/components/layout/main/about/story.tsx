import { useState } from "react";
import Button from "./button";
import Image from "next/image";

type StoryProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const stories: StoryProps[] = [
  {
    id: "1",
    title: "The Journey Begins",
    description:
    "This is the start of an incredible adventure. As the sun rises over the horizon, the protagonist embarks on a journey filled with uncertainty, excitement, and the promise of discovery. The road ahead is long and unknown, but every step is filled with potential. The air is thick with the promise of untold secrets, and each decision shapes their path, leading to hidden truths, unexpected allies, and challenges that test their courage. Though hardship and doubt may arise, the call to discover something greater pulls them onward, knowing that this journey will transform them in ways they can’t yet imagine.",
    image: "/images/about/story1.jpg",
  },
  {
    id: "2",
    title: "New Building For IT Sector",
    description:"Deputy is now helping more than 320,000 workplaces internationally. Businesses across industries can manage their staff more efficiently, give teams an easy way to track their shifts, and free up time for people to focus on what’s important to them. We’ve picked up some very flattering accolades and reviews along the way. Deputy is now helping more than 320,000 workplaces internationally. Businesses across industries can manage their staff more efficiently, give teams an easy way to track their shifts, and free up time for people to focus on what’s important to them. We’ve picked up some very flattering accolades and reviews along the way.",
    image: "/images/about/story2.jpg",
  },
//   {
//     id: "3",
//     title: "AI Revolution in 2025",
//     description:
//       "Artificial Intelligence is changing the world. In 2025, AI is expected to revolutionize multiple industries, making automation more efficient...",
//     image: "/images/about/story3.jpg",
//   },
];

const StorySection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryProps >(stories[0]);

  const handleStoryClick = (id: string) => {
    const story = stories.find((s) => s.id === id);
    if (story) {
      setSelectedStory(story);
    }
  };

  return (
    <div className="flex w-full h-fit flex-col   mt-16 justify-center items-center ">
     
      <div className="flex space-x-4 mb-6">
        {stories.map((story) => (
          <Button
            key={story.id}
            label={story.title}
            onClick={() => handleStoryClick(story.id)}
            className={`px-4 py-2 rounded-lg ${
              selectedStory?.id === story.id
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-black"
            }`}
          />
        ))}
      </div>
      <h2 className="text-3xl font-normal mb-4 text-red-700">Our Story</h2>

      {selectedStory && (
        <div className="w-[1280px] grid grid-cols-2 p-4  gap-8 rounded-lg shadow-lg">
            <div className=" relative w-[607px] h-[421px] overflow-hidden rounded-tl-[60px] rounded-br-[60px]">
            <Image
            src={selectedStory.image}
            alt={selectedStory.title}
            
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
            </div>
        
          <div className="flex flex-col gap-4  ">
          <h3 className="text-xl font-semibold mt-2">{selectedStory.title}</h3>
          <p className="text-[#1D1D1D] text-base mt-1 text-justify">{selectedStory.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySection;
