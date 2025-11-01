import React from "react";
import { useParams } from "react-router-dom";
import useApps from "../hooks/useApps";
import { Download, Star, MessageSquare } from "lucide-react";

const AppsDetails = () => {
  const { id } = useParams();
  const { Apps } = useApps();
  const app = Apps.find((p) => String(p.id) === id);

  if (!app) return <p className="text-center py-10">App not found!</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-50 h-50 rounded-2xl object-cover shadow"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{app.title}</h2>
          <p className="text-gray-500">
            Developed by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              {app.companyName}
            </a>
          </p>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Download size={20} className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="font-semibold">
                  {app.downloads.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="font-semibold">{app.ratingAvg}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="font-semibold">
                  {app.reviews.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <button className="mt-5 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>


      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
