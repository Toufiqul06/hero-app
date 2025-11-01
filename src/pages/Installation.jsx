import React, { useEffect, useState } from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully");
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sorted = [...installedApps];
    if (value === "high") {
      sorted.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    } else if (value === "low") {
      sorted.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    } else {
      sorted = JSON.parse(localStorage.getItem("installedApps")) || [];
    }
    setInstalledApps(sorted);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Your Installed Apps</h1>
      <p className="text-gray-500 text-center mb-8">
        Manage and explore your installed applications
      </p>

      <div className="pb-5 px-10 flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-2xl font-bold">
          {installedApps.length} App Found
        </h2>

        <select
          onChange={handleSort}
          value={sortOrder}
          className="border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="default">Sort By Size</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg">
          No apps installed yet.
        </div>
      ) : (
        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-5 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image || "https://via.placeholder.com/60"}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-xl">{app.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 gap-4 mt-1">
                    <span className="flex items-center text-green-500 gap-1">
                      <FaArrowDown />
                      {app.size} MB
                    </span>
                    <span className="flex items-center text-orange-500 gap-1">
                      <FaStar />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Installation;
