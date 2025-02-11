import Image from "next/image";
import Link from "next/link";
import React from "react";

export const postCards = Array(7).fill({
  id: 1,
  imageSrc: "/images/program/en1.png",
  title: "Post Card",
  description:
    "An undergraduate degree that prepares students to solve engineering problems using scientific principles, mathematics, and new technologies.",
  category: "Category",
});

export const underCards = Array(7).fill({
  id: 1,
  imageSrc: "/images/program/en1.png",
  title: "Under Card",
  description:
    "An undergraduate degree that prepares students to solve engineering problems using scientific principles, mathematics, and new technologies.",
  category: "Category",
  slug: "Under-Card",
});
export default function CardSection() {
  return (
    <div className="px-28">
      <CardGrid title={"Under Graduate"} data={underCards} />
      <CardGrid title={"Post Graduate"} data={postCards} />
    </div>
  );
}

const Card = ({ imageSrc, title, description, category, slug }) => (
  <div className="relative bg-white pb-2 rounded-lg overflow-hidden shadow-lg">
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 text-sm my-2">{description}</p>
      <Link
        href={`/programs/${slug}`}
        className=" bg-[#FF6D04] text-white  px-4 py-2 rounded-md"
      >
        Read More
      </Link>
    </div>
    <div className="absolute top-2 right-2 bg-[#FF6D04] text-white text-xs font-medium px-3 py-1 rounded-lg">
      {category}
    </div>
  </div>
);

function CardGrid({ title, data }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
