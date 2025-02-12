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
      title: "Danphelink Academy Hosts CyberSecurity Workshop",
      image: "/images/events/events/Workshop.jpg",
      content:
        "The academy successfully conducted Cybesecurity workshop to enhance instructional techniques and integrate modern technology into the learning process.",
      date: formatDate(new Date(Date.now()- 1000 * 60 * 60 * 24)), // Current date
    },
    {
      title: "Academic Success for our Students in Development",
      image: "/images/events/events/Academic.png",
      content:
        "This year, the academy recorded an impressive Academic record, emphasizing its commitment to career-oriented education and strong industry collaboration.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 24)), // 1 day ago
    },
    {
      title: "Generative AI workshop Summit Scheduled for Next Month",
      image: "/images/events/events/Seminar.png",
      content:
        "The academy will host an Generative AI workshop Summit next month, bringing together industry experts and researchers to explore the latest advancements in technology.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 48)), 
    },
    // {
    //   title: "Celebrating Saraswati Puja at DanpheLink Academy",
    //   image: "/images/newsandupdates/saraswati.png",
    //   content:
    //     "Our academy came together to celebrate Saraswati Puja, honoring the Goddess of Wisdom and Learning. Students and faculty participated in prayers, cultural performances, and knowledge-sharing sessions.",
    //   date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 72)), // 3 days ago
    // },
    {
      title: "DanpheLink host Recreational Workshop",
      image: "/images/events/events/Insight.png",
      content:
        "The academy has launched a state-of-the-art cybersecurity lab to provide students with hands-on training in digital security and ethical hacking.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 96)), 
    },
    // {
    //   title: " Danphelink Academy Introduces Smart Learning Hub",
    //   image: "/images/newsandupdates/image1.jpg", 
    //   content:
    //     "A new Smart Learning Hub has been introduced, featuring digital resources, interactive sessions, and AI-driven study tools to enhance learning experiences.",
    //   date: formatDate(new Date()),
    // },
  ];
  
  const feature = {
    title: "Generative AI: What to Expect at the Upcoming Summit",
    image: "/images/events/events/Workshop.jpg", 
  };

  const sortedStories = [...stories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const [selectedStory, setSelectedStory] = useState<Story>(sortedStories[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl m-auto gap-6 py-16">
      <div className="col-span-2">
        <Article story={selectedStory} />
      </div>

      <aside className="space-y-6">
        <TopStories stories={sortedStories} onSelectStory={setSelectedStory} />
        <Features feature={feature} />
      </aside>
      
    </div>
  );
};

export default MainSection;
