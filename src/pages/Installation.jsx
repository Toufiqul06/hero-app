import React, { useEffect, useState } from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("Sort By Size"); // ✅ new: track high/low sort

  // ✅ Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  // ✅ Uninstall app with toast
  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully 🗑️");
  };

  const handleSort = (e) => {
  const value = e.target.value;
  setSortOrder(value);

  let sorted = [...installedApps];

  if (value === "high") {
    sorted.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
  } else if (value === "low") {
    sorted.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
  } 
  // if default, no sorting
  setInstalledApps(sorted);
};


  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Your Installed Apps
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* ✅ Header Section */}
      <div className="pb-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {installedApps.length} Apps Found
        </h2>

        <select
          onChange={handleSort}
          value={sortOrder}
          className="border border-gray-300 rounded-md px-3 py-1 text-gray-600 text-sm focus:outline-none"
        >
          <option value="default">Sort By Size</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {/* ✅ Installed Apps */}
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed yet.</p>
      ) : (
        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={app.image || "https://via.placeholder.com/60"}
                  alt={app.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold text-2xl pb-3">{app.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 gap-5">
                    <h3 className="flex items-center text-green-500 gap-2">
                      <FaArrowDown />
                      <p>{app.size}M</p>
                    </h3>
                    <h3 className="flex items-center text-orange-500 gap-2">
                      <FaStar /> {app.ratingAvg}
                    </h3>
                    <h3 className="flex items-center text-gray-500 gap-2">
                      {app.size} MB
                    </h3>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
