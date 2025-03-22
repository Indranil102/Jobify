import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import CareerProgressionFlow from './CareerProgressionFlow';
const CareerGrowth = () => {
  const data = [
    { jobTitle: "Software Engineer", averageGrowth: 35 },
    { jobTitle: "Business Analyst", averageGrowth: 25 },
    { jobTitle: "DevOps Engineer", averageGrowth: 40 },
    { jobTitle: "Data Scientist", averageGrowth: 30 },
    { jobTitle: "UX/UI Designer", averageGrowth: 20 },
  ];
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Career as a Software Tester with AI-Powered Guidance</h1>
          <p className="text-lg mb-8">Discover how Reverse Career Mapping can help you transition from Manual Testing to High-Paying Roles like Automation Testing and DevOps.</p>
          <div className="space-x-4">
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Start Your Free Career Assessment</a>
            <a href="#" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">Explore Career Roadmaps</a>
          </div>
          {/* <div className="mt-10">
            <img src="https://via.placeholder.com/800x400" alt="Career Growth Illustration" className="mx-auto rounded-lg shadow-lg" />
           
          </div> */}
          <p className="mt-4 text-sm text-blue-200" style={{fontWeight:'600', marginTop:'50px',marginBottom:'-30px'}}>Powered by Jobify</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Stuck in Manual Testing? Here’s Why Traditional Job Searches Aren’t Enough.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Traditional Job Search</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Limited Roles</li>
                <li>No Career Growth Insights</li>
                <li>Manual Application Process</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Jobify Approach</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Personalized Roadmaps</li>
                <li>High-Growth Roles</li>
                <li>One-Click Job Applications</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            {/* <img src="https://via.placeholder.com/800x400" alt="Before and After Career Growth" className="mx-auto rounded-lg shadow-lg" /> */}
            <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center" }}>Career Growth by Job Title</h2>
            <BarChart
              width={800}
              height={400}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="jobTitle" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="averageGrowth" fill="#8884d8" name="Average Growth (%)" />
            </BarChart>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">How Jobify AI’s Reverse Career Mapping Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">AI Analyzes Your Profile</h3>
                <p className="text-gray-700">We assess your skills and match them with high-demand roles.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Personalized Roadmap</h3>
                <p className="text-gray-700">Get a step-by-step plan to upskill and transition into roles like Automation Tester or DevOps Engineer.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Job Recommendations</h3>
                <p className="text-gray-700">We auto-find and recommend jobs tailored to your growth path.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Continuous Support</h3>
                <p className="text-gray-700">Track your progress and get dynamic updates as you grow.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h3 style={{fontSize:'24px'}}>Career Progression Flowchart</h3>
            <CareerProgressionFlow />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Jobify AI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Proactive Career Guidance</h3>
                <p className="text-gray-700">We show you what’s next, not just what exists.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Future-Proof Careers</h3>
                <p className="text-gray-700">Break into high-demand fields like Automation Testing and DevOps.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Resume Optimization</h3>
                <p className="text-gray-700">Get noticed by employers with trending skills.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">One-Click Apply</h3>
                <p className="text-gray-700">Save time and land interviews faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step in Your Career?</h2>
          <p className="text-lg mb-8">Start your free career assessment today and unlock your potential.</p>
          <div className="space-x-4">
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Get Started Now</a>
            <a href="#" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">Learn More About Our Platform</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGrowth;