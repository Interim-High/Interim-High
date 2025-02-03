"use client"
import { useState } from "react";
import Article from "./article";
import TopStories from "./topstories";
import Features from "./feature";
// Story Type
type Story = {
  title: string;
  slug: string;
  image: string;
  content: string;
  date: string;
};

// Format exact date function
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
      title: "Padmavati International College Hosts Faculty Development Program",
      slug: "faculty-development",
      image: "/images/events/events/Carnival.png",
      content:
        "Padmawati International College successfully conducted a two-day Faculty Development Program focused on enhancing the professional skills of its teaching staff. The program featured sessions on modern teaching methodologies, classroom management strategies, and technology integration in education.Designed to equip faculty members with innovative tools and techniques, the program emphasized fostering academic excellence and creating an engaging learning environment for students.Key topics included assignments, assessments, and case studies, with renowned education experts leading the sessions and sharing valuable insights on effective pedagogy and addressing contemporary challenges in higher education.The event saw active participation from faculty members, with the college leadership commending their enthusiasm. Executive ChairmanMr. Bheshraj Pokhrel, Chief of Academics Prof. Dr. Govinda Prasad Acharya, Managing Director Mr. Jitendra Kumar Bakhu, and Business Development Director Mr. Narayan Pokhrel thanked the participants. They reiterated the institution’s commitment to professional development, highlighting how such programs enhance teaching standards and align with global educational practices.This initiative underscores padmawati International College’s dedication to academic excellence and its proactive approach to equipping educators with the evolving demands of higher education.",
      date: formatDate(new Date()), // Current date
    },
    {
      title: "College Achieves 85% Placement Record",
      slug: "placement-record",
      image: "/images/events/events/Carnival.png",
      content:
        "The college reported an 85% placement record, a testament to its industry-aligned curriculum and student excellence.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 24)), // 1 day ago
    },
    {
      title: "Annual Curriculum Test to Begin Next Month",
      slug: "curriculum-test",
      image: "/images/events/events/Carnival.png",
      content:
        "The annual curriculum test for students will commence next month, assessing their academic progress and knowledge retention.",
      date: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 48)), // 2 days ago
    },
    {
      title: "Padmavati International College Hosts Faculty Development Program",
      slug: "faculty-development",
      image: "/images/events/events/Carnival.png",
      content:
        "Padmawati International College successfully conducted a two-day Faculty Development Program focused on enhancing the professional skills of its teaching staff. The program featured sessions on modern teaching methodologies, classroom management strategies, and technology integration in education.Designed to equip faculty members with innovative tools and techniques, the program emphasized fostering academic excellence and creating an engaging learning environment for students.Key topics included assignments, assessments, and case studies, with renowned education experts leading the sessions and sharing valuable insights on effective pedagogy and addressing contemporary challenges in higher education.The event saw active participation from faculty members, with the college leadership commending their enthusiasm. Executive ChairmanMr. Bheshraj Pokhrel, Chief of Academics Prof. Dr. Govinda Prasad Acharya, Managing Director Mr. Jitendra Kumar Bakhu, and Business Development Director Mr. Narayan Pokhrel thanked the participants. They reiterated the institution’s commitment to professional development, highlighting how such programs enhance teaching standards and align with global educational practices.This initiative underscores padmawati International College’s dedication to academic excellence and its proactive approach to equipping educators with the evolving demands of higher education.",
      date: formatDate(new Date(Date.now() - 1000 * 60* 60 *72 )), 
    },
    {
      title: "Padmavati International College Hosts Faculty Development Program",
      slug: "faculty-development",
      image: "/images/events/events/Carnival.png",
      content:
        "Padmawati International College successfully conducted a two-day Faculty Development Program focused on enhancing the professional skills of its teaching staff. The program featured sessions on modern teaching methodologies, classroom management strategies, and technology integration in education.Designed to equip faculty members with innovative tools and techniques, the program emphasized fostering academic excellence and creating an engaging learning environment for students.Key topics included assignments, assessments, and case studies, with renowned education experts leading the sessions and sharing valuable insights on effective pedagogy and addressing contemporary challenges in higher education.The event saw active participation from faculty members, with the college leadership commending their enthusiasm. Executive ChairmanMr. Bheshraj Pokhrel, Chief of Academics Prof. Dr. Govinda Prasad Acharya, Managing Director Mr. Jitendra Kumar Bakhu, and Business Development Director Mr. Narayan Pokhrel thanked the participants. They reiterated the institution’s commitment to professional development, highlighting how such programs enhance teaching standards and align with global educational practices.This initiative underscores padmawati International College’s dedication to academic excellence and its proactive approach to equipping educators with the evolving demands of higher education.",
      date: formatDate(new Date()), 
    }
  ];

  const feature = {
    title: "Faculty Member Wins National Award for Teaching Excellence",
    image: "/images/events/events/Carnival.png",
  };

  // Default story (first in the list)
  const [selectedStory, setSelectedStory] = useState<Story>(stories[0]);

  return (
    <div className="grid grid-cols-3 ml-[100px] mr-[100px] gap-2 p-6" >
      <Article story={selectedStory} />

      <aside className="col-span-1 space-y-6">
        <TopStories stories={stories} onSelectStory={setSelectedStory} />
        <Features feature={feature} />
      </aside>
    </div>
  );
};

export default MainSection;
