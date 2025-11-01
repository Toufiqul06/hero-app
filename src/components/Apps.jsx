import React from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Apps = ({ appData }) => {
  const { title,image, size, ratingAvg,id} = appData;

  const handleDownload = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = stored.some((app) => app.id === id);

    if (!alreadyInstalled) {
      stored.push(appData);
      localStorage.setItem("installedApps", JSON.stringify(stored));
      toast.success(`${title} installed successfully`);
    } else {
      toast.warn(`${title} is already installed`);
    }
  };

  return (
    <div>
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-full p-5 h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <div className="p-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex justify-between p-3">
          <button
            onClick={handleDownload}
            className="btn flex items-center text-green-500 gap-2"
          >
            <FaArrowDown />
            <p>{size}M</p>
          </button>

          <div className="btn flex items-center text-orange-500 gap-2">
            <FaStar />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
