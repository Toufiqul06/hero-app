import React from "react";
import image from "../assets/logo.png";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64 space-y-4 gap-5">
      <img
        src={image}
        alt="Loading..."
        className="w-20 h-20 object-contain animate-spin"
      />
      <h1 className="text-3xl font-semibold text-gray-700 animate-pulse">
        Loading...
      </h1>
    </div>
  );
};

export default Spinner;
