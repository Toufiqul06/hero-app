import React from "react";
import { useParams } from "react-router-dom";
import useApps from "../hooks/useApps";
import { Download, Star, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import AppsError from '../pages/AppsError'
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";
import "react-toastify/dist/ReactToastify.css";

const AppsDetails = () => {
  const { id } = useParams();
  const { Apps } = useApps();
  const app = Apps.find((p) => String(p.id) === id);

  if (!app) {
    return (
      <div>
        <AppsError></AppsError>
      </div>
    );
  }

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];

    if (installed.some((a) => a.id === app.id)) {
      toast.info(`${app.title} is already installed!`);
    } else {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      toast.success(`${app.title} installed successfully!`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 rounded-2xl object-cover shadow"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{app.title}</h2>
          <p className="text-gray-500">
            Developed by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              {app.companyName}
            </a>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-gray-700">
            <div className=" p-4 rounded-xl flex items-center gap-3">
              <Download size={22} className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="font-semibold">
                  {app.downloads?.toLocaleString() || 0}
                </p>
              </div>
            </div>

            <div className=" p-4 rounded-xl flex items-center gap-3">
              <Star size={22} className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Average Rating</p>
                <p className="font-semibold">{app.ratingAvg || 0}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl flex items-center gap-3">
              <MessageSquare size={22} className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="font-semibold">
                  {app.reviews?.toLocaleString() || 0}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Install Now ({app.size || 0} MB)
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Ratings</h2>
        <div style={{ width: "100%", height: 300 }} className="mt-6">
          {app.ratings && app.ratings.length > 0 ? (
            <ResponsiveContainer>
              <BarChart
                data={app.ratings.slice().reverse()}
                layout="vertical"

              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FF8C00" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 text-center py-20">
              No rating data available
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Description</h3>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AppsDetails;
