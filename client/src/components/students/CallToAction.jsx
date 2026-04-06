import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="px-8">
      <h1 className="text-3xl font-medium text-gray-800 p-4">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-md text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro
        itaque, ratione maxime, autem praesentium voluptas cupiditate fuga
        voluptatibus molestiae harum eos, provident quidem totam! Necessitatibus
        vitae illum non sapiente?
      </p>
      <div className="flex gap-4 justify-center mt-2">
        <button className="bg-blue-600 text-white border rounded-lg py-2 px-4 gap-4">
          Get Started
        </button>
        <button className="rounded-lg border px-4 py-2 border-gray-400 flex gap-1 ">
          Learn more <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
