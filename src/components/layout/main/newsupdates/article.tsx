import React from "react";

type Story = {
  title: string;
  image: string;
  content: string;
  date: string;
};

type Props = {
  story: Story;
};

const Article: React.FC<Props> = ({ story }) => {
  return (
    <div className="col-span-2 bg-gray-300 p-6 shadow space-y-4 rounded-xl w-full">
      <h1 className="text-[40px] text-orange-600 font-bold">{story.title}</h1>
      <p className="text-gray-500 text-sm">Published on: {story.date}</p>
      <img
        src={story.image}
        alt={story.title}
        className="rounded-xl w-full h-fit object-cover mt-2"
      />
      <p className="mt-4 text-gray-700">{story.content}</p>
    </div>
  );
};

export default Article;
