import React from "react";

type Feature = {
  title: string;
  image: string;
};

const Features: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-gradient-to-tl from-[#dcc7c7] to-[#afafaf] rounded-xl shadow-md w-full p-4 ml-3">
      <h3 className="font-semibold text-3xl text-orange-600 pb-2">Features</h3>

      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-fit object-cover rounded-xl mt-2"
      />
      <p className="text-sm mt-2 text-left">{feature.title}</p>
    </div>
  );
};

export default Features;
