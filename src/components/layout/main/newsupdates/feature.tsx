import React from "react";

type Feature = {
  title: string;
  image: string;
};

const Features: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-gray-300 rounded-xl w-full p-4">
      <h3 className="font-bold text-4xl text-orange-600 border-b pb-2">Features</h3>

      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-fit object-cover rounded mt-2"
      />
      <p className="text-sm mt-2 text-left">{feature.title}</p>
    </div>
  );
};

export default Features;
