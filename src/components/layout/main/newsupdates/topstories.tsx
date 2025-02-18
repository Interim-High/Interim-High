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
};

const TopStories: React.FC<Props> = ({ stories, onSelectStory }) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const filteredStories = stories.filter(story => new Date(story.date) >= sevenDaysAgo);

  const latestStories = filteredStories
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-gray-300 p-4 rounded-xl">
      <h3 className="font-bold text-4xl text-orange-600 border-b pb-2">Top Stories</h3>
      <ul className="mt-2 space-y-4">
        {latestStories.length > 0 ? (
          latestStories.map((story, index) => (
            <li key={index}>
              <button
                onClick={() => onSelectStory(story)}
                className="w-full text-left text-blue-900 hover:underline"
              >
                <div className="bg-slate-300 w-full h-fit p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <p className="text-sm font-semibold">{story.title}</p>
                  <p className="text-xs text-gray-500">Published: {story.date}</p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-50 text-sm">No recent stories avaiable.</p>
        )}
      </ul>
    </div>
  );
};

export default TopStories;
