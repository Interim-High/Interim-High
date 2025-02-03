import React from "react";

type Story = {
  title: string;
  slug: string;
  image: string;
  content: string;
  date: string;
};

type Props = {
  story: Story;
};

const Article: React.FC<Props> = ({ story }) => {
  return (
    <div className="col-span-2 bg-white p-6 shadow rounded w-[819px]">
      <h1 className="text-[40px] text-red-600 font-bold">{story.title}</h1>
      <p className="text-gray-500 text-sm">Published on: {story.date}</p>
      <img
        src={story.image}
        alt={story.title}
        className="rounded w-full h-64 object-cover mt-2"
      />
      <p className="mt-4 text-gray-700">{story.content}</p>
    </div>
  );
};

export default Article;
