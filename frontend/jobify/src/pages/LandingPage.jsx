import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
const LandingPage = () => {
  // const [searching, setSearching] = useState('');
  // const [search, setSearch] = useState('');
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       if (searching.trim() === '') {
  //         setJobs([]); // Clear jobs if search query is empty
  //         return;
  //       }

  //       console.log(search)

  //       console.log('Fetching jobs...');
  //       const response = await axios.get(`http://localhost:5000/api/jobs/search?q=${search}`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       console.log('Response:', response);

  //       const data = await response.json();
  //       console.log('Fetched data:', data);
  //       // Transform the API response to match the expected structure
  //       const transformedData = data.slice(0, 5).map(job => ({
  //         'Job Title': job['Job Title'],
  //         'Salary Range': job['Salary Range'],
  //         'Location': job.Location,
  //         'Required Skills': Array.isArray(job['Required Skills'])
  //           ? job['Required Skills'].join(', ') // Convert array of skills to a comma-separated string
  //           : job['Required Skills']
  //       }));

  //       setJobs(transformedData);
  //     } catch (error) {
  //       console.error('Error fetching jobs:', error);
  //       setJobs([]); // Clear jobs in case of an error
  //     }
  //   };

  //   fetchJobs();
  // }, [search]);
  const jobs = [
    {
      "Company Name": "Deloitte",
      "Location": "Mumbai",
      "Job Title": "Business Analyst",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "29-09-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Chennai",
      "Job Title": "Data Analyst",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "10-10-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Byju's",
      "Location": "Gurgaon",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "23-12-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Bangalore",
      "Job Title": "Cloud Engineer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "10-15 LPA",
      "Posting Date": "04-09-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Jaipur",
      "Job Title": "ML Engineer",
      "Required Skills": "Java, Spring Boot, Microservices",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "6-10 LPA",
      "Posting Date": "13-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Deloitte",
      "Location": "Mumbai",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "22-12-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Accenture",
      "Location": "Ahmedabad",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "24-07-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Ahmedabad",
      "Job Title": "Software Engineer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "14-12-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Mumbai",
      "Job Title": "Frontend Developer",
      "Required Skills": "HTML, CSS, JavaScript",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "18-25 LPA",
      "Posting Date": "06-01-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Oracle",
      "Location": "Coimbatore",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "27-08-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Capgemini",
      "Location": "Nagpur",
      "Job Title": "Cloud Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "09-08-2023",
      "Job Type": "Contract"
    }];
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
            value={searching} // Controlled input
            onChange={(e) => setSearching(e.target.value)} // Update searching state as user types
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setSearch(searching.trim())} // Trigger search on button click
          >
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

      {/* Job Listings */}
      {jobs.length === 0 && search === '' && (
        <div className="max-w-4xl mx-auto mt-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Job Listings</h1>
          <div className="flex justify-evenly">
            {[
              {
                'Job Title': 'Frontend Developer',
                'Salary Range': '$95,000',
                'Location': 'Houston',
                'Required Skills': ['React', 'TypeScript', 'HTML/CSS']
              },
              {
                'Job Title': 'Backend Developer',
                'Salary Range': '$100,000',
                'Location': 'New York',
                'Required Skills': ['Node.js', 'Express', 'MongoDB']
              }
            ].map((job, index) => (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[400px]" key={index}>
                <h2 className="text-xl font-bold mb-2">{job['Job Title']}</h2>
                <p className="text-gray-600 mb-2 font-semibold">Average Salary: {job['Salary Range']}</p>
                <p className="text-gray-600 mb-4 font-medium">Location: {job['Location']}</p>
                <div className="mb-4">
                  <h3 className="mb-2 text-lg font-semibold">Required Skills:</h3>
                  <ul className="list-disc list-inside text-gray-700 flex gap-5">
                    {job['Required Skills'].map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 ml-[115px]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {jobs.length > 0 && (
        <div className="max-w-4xl mx-auto mt-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Job Listings</h1>
          {jobs.map((job, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[400px]" key={index}>
              <h2 className="text-xl font-bold mb-2">{job['Job Title']}</h2>
              <p className="text-gray-600 mb-2 font-semibold">Average Salary: {job['Salary Range']}</p>
              <p className="text-gray-600 mb-4 font-medium">Location: {job['Location']}</p>
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold">Required Skills:</h3>
                <ul className="list-disc list-inside text-gray-700 flex gap-5">
                  {job['Required Skills'].split(', ').map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 ml-[115px]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;