"use client";
import { useState } from "react";
import Article from "./article";
import TopStories from "./topstories";
import Features from "./feature";

type Story = {
  title: string;
  image: string;
  content: string;
  date: string;
};

// Format date function
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const MainSection: React.FC = () => {
  const stories: Story[] = [
    {
      title: "Academy Hosts Advanced Teaching Workshop",
      image: "/images/events/events/Workshop.png",
      content:
        "The academy successfully conducted an advanced teaching workshop to enhance instructional techniques and integrate modern technology into the learning process.",
      date: formatDate(new Date(Date.now()- 1000 * 60 * 60 * 24)), // Current date
    },
    {
      title: "95% Placement Success for Academy Graduates",
      image: "/images/events/events/Academic.png",
      content:
        "This year, the academy recorded an impressive 95% placement rate, emphasizing its commitment to career-oriented education and strong industry collaboration.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 24)), // 1 day ago
    },
    {
      title: "AI and Robotics Summit Scheduled for Next Month",
      image: "/images/events/events/Seminar.png",
      content:
        "The academy will host an AI and Robotics Summit next month, bringing together industry experts and researchers to explore the latest advancements in technology.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 48)), // 2 days ago
    },
    {
      title: "Academy Students Win National Innovation Award",
      image: "/images/events/events/Workshop.png",
      content:
        "A team of students secured the National Innovation Award for their groundbreaking project in sustainable technology, demonstrating creativity and problem-solving skills.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 72)), // 3 days ago
    },
    {
      title: "Cybersecurity Lab Inaugurated at Academy",
      image: "/images/events/events/Insight.png",
      content:
        "The academy has launched a state-of-the-art cybersecurity lab to provide students with hands-on training in digital security and ethical hacking.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 96)), // 4 days ago
    },
    {
      title: "Academy Introduces Smart Learning Hub",
      image: "/images/events/events/Carnival.png", 
      content:
        "A new Smart Learning Hub has been introduced, featuring digital resources, interactive sessions, and AI-driven study tools to enhance learning experiences.",
      date: formatDate(new Date()),
    },
  ];
  
  const feature = {
    title: "Faculty Member Wins National Award for Teaching Excellence",
    image: "/images/events/events/Workshop.png", 
  };

  const sortedStories = [...stories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const [selectedStory, setSelectedStory] = useState<Story>(sortedStories[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-12 md:px-24">
      <div className="col-span-2">
        <Article story={selectedStory} />
      </div>

      <aside className="space-y-6">
        {/* Pass sorted stories to ensure correct order */}
        <TopStories stories={sortedStories} onSelectStory={setSelectedStory} />
        <Features feature={feature} />
      </aside>
    </div>
  );
};

export default MainSection;
