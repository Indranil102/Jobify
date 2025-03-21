import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold">Find your dream job now</h1>
        <p className="text-gray-600 mt-2">5 lakh+ jobs for you to explore</p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="px-4 py-2 w-96 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </section>

      {/* Job Categories */}
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50">
        <button className="px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Remote
        </button>
        <button className="px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          MNC
        </button>
        <button className="px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Internship
        </button>
        <button className="px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Marketing
        </button>
        <button className="px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Data Science
        </button>
      </div>

      {/* Top Companies Section */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-center">Top companies hiring now</h2>
        <div className="flex justify-center gap-6 mt-6">
          <div className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer">
            MNCs
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer">
            Fortune 500
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer">
            Unicorns
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer">
            Startups
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;