import React, { useState } from "react";
import useApps from "../hooks/useApps";
import Apps from "../components/Apps";
import { Link } from "react-router-dom"; // fixed import

const AllApps = () => {
  const { Apps: allApps, loading, error } = useApps();

  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchedApps = term 
    ? allApps.filter(app => app.title.toLowerCase().includes(term)) 
    : allApps;

  if (loading) {
    return <p className="text-center py-10 text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">Error loading apps!</p>;
  }

  

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-lg py-4 text-[#001931]">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex justify-between px-20 pb-10">
        <h3 className="text-2xl font-bold">({searchedApps.length}) Apps Found</h3>
        <label className="input bg-gray-100">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <section className="px-5 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {searchedApps.map((appData) => (
            <Link key={appData.id} to={`/app/${appData.id}`}>
              <Apps appData={appData} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllApps;
