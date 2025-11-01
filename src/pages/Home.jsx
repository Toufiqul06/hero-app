import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png";
import Apps from "../components/Apps";
import useApps from "../hooks/useApps";
import { Link } from "react-router";

const Home = () => {
  const { Apps: allApps, loading, error } = useApps();
  console.log(allApps);

  const homeApps = allApps.slice(0, 8) || [];

  return (
    <div className="bg-gray-100">
      <section className="text-center py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            We Build <br />
            <span className="text-purple-600">Productive</span> Apps
          </h1>
          <p className="text-gray-600 mb-2">
            At <span className="font-semibold">HERO.IO</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting.
          </p>
          <p className="text-gray-600 mb-8">
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <div>
              <a
                href="https://play.google.com/store/games?hl=en"
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-5 py-2 shadow-sm hover:shadow-md transition"
              >
                <FaGooglePlay className="text-green-800 text-xl" />
                <span className="font-medium">Google Play</span>
              </a>
            </div>
            <div>
              <a
                href="https://www.apple.com/app-store/"
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-5 py-2 shadow-sm hover:shadow-md transition"
              >
                <FaAppStoreIos className="text-blue-600 text-xl" />
                <span className="font-medium">App Store</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div>
        <img src={hero} alt="Hero" className="w-1/2 mx-auto" />
      </div>

      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-gray-200 mb-2 text-lg">Total Downloads</h3>
              <p className="text-5xl font-extrabold mb-2">29.6M</p>
              <p className="text-sm text-gray-300">21% More Than Last Month</p>
            </div>
            <div>
              <h3 className="text-gray-200 mb-2 text-lg">Total Reviews</h3>
              <p className="text-5xl font-extrabold mb-2">906K</p>
              <p className="text-sm text-gray-300">46% More Than Last Month</p>
            </div>
            <div>
              <h3 className="text-gray-200 mb-2 text-lg">Active Apps</h3>
              <p className="text-5xl font-extrabold mb-2">132+</p>
              <p className="text-sm text-gray-300">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-lg py-4 text-[#001931]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <section className="px-5 lg:px-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeApps.map((appData) => (
            <Apps key={appData.id} appData={appData} />
          ))}
        </div>
      </section>

      <div className="flex justify-center py-6">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-purple-600 to-indigo-500 text-lg font-bold text-white hover:opacity-90 transition"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
