import React from "react";

type Feature = {
  title: string;
  image: string;
};

const Features: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-gray-100 rounded w-[940 px] mr-[100 px] p-4">
      <h3 className="font-bold text-[40px] text-red-600 border-b pb-2">Features</h3>
      <img
        src={feature.image}
        alt={feature.title}
        className="w-[399px] h-40 object-cover rounded mt-2"
      />
      <p className="text-sm mt-2 text-left text-blue-600 hover:underline">{feature.title}</p>
    </div>
  );
};

export default Features;
