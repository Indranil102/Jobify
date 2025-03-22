import React, { useState } from 'react';

const roadmapData = [
  {
    CareerPath: 'MERN Stack Development',
    stages: [
      'HTML & CSS Basics',
      'JavaScript (ES6+)',
      'React.js Fundamentals',
      'Node.js & Express.js',
      'MongoDB & CRUD Operations',
      'Building RESTful APIs',
      'State Management (Redux, Context API)',
      'Authentication & Authorization (JWT, OAuth)',
      'GraphQL & Advanced APIs',
      'Testing with Jest & Cypress',
      'Performance Optimization & Security',
      'CI/CD & Docker',
      'Deployment with AWS & Vercel',
      'System Design & Scalability',
    ],
  },
  {
    CareerPath: 'iOS Development',
    stages: [
      'Swift Basics & Xcode Setup',
      'UIKit & SwiftUI Fundamentals',
      'Auto Layout & View Controllers',
      'Working with TableViews & CollectionViews',
      'Networking & API Integration',
      'Core Data & Database Management',
      'Handling Push Notifications',
      'Concurrency & Memory Management',
      'Unit Testing & Debugging',
      'Security Best Practices',
      'Performance Optimization',
      'App Store Deployment',
      'ARKit & Advanced iOS Features',
      'iOS System Design & Architecture',
    ],
  },
  {
    CareerPath: 'DevOps',
    stages: [
      'Linux Basics & Shell Scripting',
      'Version Control with Git & GitHub',
      'CI/CD Concepts & Jenkins',
      'Docker & Containerization',
      'Kubernetes Basics',
      'Infrastructure as Code (Terraform, Ansible)',
      'Monitoring & Logging (Prometheus, Grafana)',
      'Cloud Computing (AWS, Azure, GCP)',
      'Security & Compliance',
      'Load Balancing & Scaling',
      'Networking & System Administration',
      'Incident Response & Troubleshooting',
      'Site Reliability Engineering (SRE)',
      'Automation & Advanced DevOps Tools',
    ],
  },
  {
    CareerPath: 'Data Science',
    stages: [
      'Python Basics (NumPy, Pandas)',
      'Data Cleaning & Preprocessing',
      'Exploratory Data Analysis (Matplotlib, Seaborn)',
      'SQL & Databases',
      'Statistics & Probability',
      'Machine Learning Basics (Scikit-Learn)',
      'Feature Engineering & Model Evaluation',
      'Deep Learning (TensorFlow, PyTorch)',
      'Big Data Technologies (Spark, Hadoop)',
      'NLP & Computer Vision',
      'Model Deployment (Flask, FastAPI)',
      'MLOps & Automation',
      'AI Ethics & Bias',
      'Advanced Research & Innovation in AI',
    ],
  },
];

const Roadmap = () => {
  const [expandedPath, setExpandedPath] = useState(null);
  const [completedStages, setCompletedStages] = useState({});

  // Handle expanding/collapsing of career paths
  const togglePath = (index) => {
    setExpandedPath(expandedPath === index ? null : index);
  };

  // Handle marking a stage as completed
  const toggleStageCompletion = (pathIndex, stageIndex) => {
    const key = `${pathIndex}-${stageIndex}`;
    setCompletedStages((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Career Roadmaps
      </h1>
      <div className="max-w-4xl mx-auto">
        {roadmapData.map((path, pathIndex) => (
          <div key={pathIndex} className="mb-6 border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <div
              className="bg-blue-500 text-white p-4 flex justify-between items-center cursor-pointer"
              onClick={() => togglePath(pathIndex)}
            >
              <h2 className="text-xl font-semibold">{path.CareerPath}</h2>
              <span>
                {expandedPath === pathIndex ? '−' : '+'}
              </span>
            </div>
            {expandedPath === pathIndex && (
              <div className="bg-white p-4">
                <ul className="space-y-2">
                  {path.stages.map((stage, stageIndex) => {
                    const key = `${pathIndex}-${stageIndex}`;
                    const isCompleted = completedStages[key] || false;
                    return (
                      <li
                        key={stageIndex}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className={`text-gray-700 ${isCompleted ? 'line-through' : ''}`}>
                          {stage}
                        </span>
                        <button
                          onClick={() => toggleStageCompletion(pathIndex, stageIndex)}
                          className={`p-1 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-gray-300'} text-white`}
                        >
                          {isCompleted ? '✓' : '○'}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;