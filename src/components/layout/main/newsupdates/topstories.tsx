import React from "react";

type Story = {
  title: string;
  image: string;
  content: string;
  date: string;
};

type Props = {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  selectedStoryTitle: string;
};

const TopStories: React.FC<Props> = ({ stories, onSelectStory, selectedStoryTitle }) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const filteredStories = stories.filter(story => new Date(story.date) >= sevenDaysAgo);

  const latestStories = filteredStories
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-gradient-to-tl from-[#dcc7c7] to-[#afafaf] p-4 ml-4 rounded-xl shadow-md">
      <h3 className="font-semibold text-3xl text-orange-600 pb-2">Top Stories</h3>
      <ul className="mt-2 space-y-4">
        {latestStories.length > 0 ? (
          latestStories.map((story, index) => (
            <li key={index}>
              <button
                onClick={() => onSelectStory(story)}
                className={`w-full text-left transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-xl ${
                  selectedStoryTitle === story.title ? "bg-slate-100 text-orange-600" : "bg-slate-100 text-blue-900"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold hover:underline">
                    {story.title}
                  </p>
                  <p className="text-xs text-gray-500">Published: {story.date}</p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-50 text-sm">No recent stories available.</p>
        )}
      </ul>
    </div>
  );
};

export default TopStories;
