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
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50">
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
     
 {/* Job Listings */}
      <div className="max-w-4xl mx-auto mt-4">
          <h1 className="text-4xl font-bold mb-6  text-center">Job Listings</h1>
          <div className='flex justify-evenly'>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[400px]">
        
            <h2 className="text-xl font-bold mb-2 ">Frontend Developer</h2>
            <p className="text-gray-600 mb-2 font-semibold ">Average Salary: $95,000</p>
            <p className="text-gray-600 mb-4 font-medium ">Location: 'Houston'</p>
            

            <div className="mb-4">
               <h3 className=" mb-2 text-lg font-semibold ">Required Skills:</h3>
                <ul className="list-disc list-inside text-gray-700 flex gap-5">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                </ul>
             </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 ml-[115px]">Apply Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[400px]">
        
            <h2 className="text-xl font-bold mb-2 ">Frontend Developer</h2>
            <p className="text-gray-600 mb-2 font-semibold ">Average Salary: $95,000</p>
            <p className="text-gray-600 mb-4 font-medium ">Location: 'Houston'</p>
            

            <div className="mb-4">
               <h3 className=" mb-2 text-lg font-semibold ">Required Skills:</h3>
                <ul className="list-disc list-inside text-gray-700 flex gap-5">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                </ul>
             </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 ml-[115px]">Apply Now</button>
        </div>

    
    
    </div>
</div>
    </div>
  );
};

export default LandingPage;