import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Brush,
  PieChart,
  Pie,
  Cell,
  LineChart
} from 'recharts';
import { useState } from 'react';
const JobTrends = () => {
  const jobRoleData = [
    { name: 'Frontend Developer', demand: 78, salary: 105000 },
    { name: 'Backend Developer', demand: 65, salary: 115000 },
    { name: 'Data Scientist', demand: 82, salary: 125000 },
    { name: 'DevOps Engineer', demand: 71, salary: 118000 },
    { name: 'UX/UI Designer', demand: 58, salary: 95000 },
  ];
  const [filter, setFilter] = useState('all');
  const filteredData = jobRoleData.filter((job) => {
    if (filter === 'all') return true;
    return job.name.toLowerCase().includes(filter.toLowerCase());
  });
  const handleBarClick = (data, index) => {
    alert(`You clicked on ${data.name} with demand ${data.demand}% and salary $${data.salary}`);
  };
  const pieData = jobRoleData.map((job) => ({
    name: job.name,
    value: job.demand,
  }));
  const COLORS = ['#4FD1C5', '#38B2AC', '#2C7A7B', '#285E61', '#234E52'];
  const salaryData = [
    { name: 'Frontend Developer', salary: 105000 },
    { name: 'Backend Developer', salary: 115000 },
    { name: 'Data Scientist', salary: 125000 },
    { name: 'DevOps Engineer', salary: 118000 },
    { name: 'UX/UI Designer', salary: 95000 },
  ];
  const globalData = [
    { name: 'London, UK', value: 3845 },
    { name: 'Toronto, Canada', value: 2954 },
    { name: 'Berlin, Germany', value: 2745 },
    { name: 'Singapore', value: 2542 },
    { name: 'Sydney, Australia', value: 2128 },
  ];
  const usData = [
    { name: 'San Francisco, CA', value: 5245 },
    { name: 'New York, NY', value: 4872 },
    { name: 'Seattle, WA', value: 3654 },
    { name: 'Austin, TX', value: 3128 },
    { name: 'Boston, MA', value: 2845 },
  ];
  return (
    <div>
        <main className="container mx-auto px-4 py-8">
    <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-teal-accent">Job Market Analytics</h1>
        <p className="text-gray-400">Comprehensive insights into current job market trends</p>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
        <button className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i className="far fa-calendar-alt"></i>
          Last 30 Days
          <i className="fas fa-chevron-down ml-1"></i>
        </button>
        
        <button className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i className="fas fa-filter"></i>
          Filter
        </button>
        
        <button className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i className="fas fa-download"></i>
          Export
        </button>
      </div>
    </div>
{/* Overview Cards */}
<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-gray-400">Total Job Listings</h3>
              <i className="fas fa-chart-bar text-teal-accent"></i>
            </div>
            <div className="text-2xl font-bold text-white">24,567</div>
            <p className="text-xs text-teal-accent">
              <i className="fas fa-arrow-up mr-1"></i>
              +12.5% from last month
            </p>
          </div>
          <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-gray-400">Average Salary</h3>
              <i className="fas fa-chart-line text-teal-accent"></i>
            </div>
            <div className="text-2xl font-bold text-white">$95,400</div>
            <p className="text-xs text-teal-accent">
              <i className="fas fa-arrow-up mr-1"></i>
              +5.2% from last month
            </p>
          </div>
          <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-gray-400">Top Hiring Companies</h3>
              <i className="fas fa-users text-teal-accent"></i>
            </div>
            <div className="text-2xl font-bold text-white">1,245</div>
            <p className="text-xs text-teal-accent">
              <i className="fas fa-arrow-up mr-1"></i>
              +8.7% from last month
            </p>
          </div>
          <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-gray-400">Demand Growth</h3>
              <i className="fas fa-chart-pie text-teal-accent"></i>
            </div>
            <div className="text-2xl font-bold text-white">+18.3%</div>
            <p className="text-xs text-teal-accent">
              <i className="fas fa-arrow-up mr-1"></i>
              +3.1% from last month
            </p>
          </div>
        </div>

        {/* Combined Bar and Line Chart */}
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button
              className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80"
              onClick={() => setFilter('all')}
            >
              Show All
            </button>
            <button
              className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80"
              onClick={() => setFilter('developer')}
            >
              Developers
            </button>
            <button
              className="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80"
              onClick={() => setFilter('engineer')}
            >
              Engineers
            </button>
          </div>
        </div>

        {/* Combined Bar and Line Chart */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Job Role Demand & Salary Trends</h2>
          <div className="bg-teal-medium rounded-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#CBD5E0" />
                <YAxis yAxisId="left" stroke="#CBD5E0" />
                <YAxis yAxisId="right" orientation="right" stroke="#CBD5E0" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }}
                />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="demand"
                  fill="#4FD1C5"
                  name="Demand (%)"
                  radius={[10, 10, 0, 0]}
                  onClick={handleBarClick}
                  animationDuration={1000}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="salary"
                  stroke="#38B2AC"
                  name="Salary ($)"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                  animationDuration={1000}
                />
                <Brush
                  dataKey="name"
                  height={20}
                  stroke="#4FD1C5"
                  fill="#0c2124"
                  travellerWidth={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-gray-400">Total Job Listings</h3>
          <i className="fas fa-chart-bar text-teal-accent"></i>
        </div>
        <div className="text-2xl font-bold text-white">24,567</div>
        <p className="text-xs text-teal-accent">
          <i className="fas fa-arrow-up mr-1"></i>
          +12.5% from last month
        </p>
      </div>
      
      <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-gray-400">Average Salary</h3>
          <i className="fas fa-chart-line text-teal-accent"></i>
        </div>
        <div className="text-2xl font-bold text-white">$95,400</div>
        <p className="text-xs text-teal-accent">
          <i className="fas fa-arrow-up mr-1"></i>
          +5.2% from last month
        </p>
      </div>
      
      <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-gray-400">Top Hiring Companies</h3>
          <i className="fas fa-users text-teal-accent"></i>
        </div>
        <div className="text-2xl font-bold text-white">1,245</div>
        <p className="text-xs text-teal-accent">
          <i className="fas fa-arrow-up mr-1"></i>
          +8.7% from last month
        </p>
      </div>
      
      <div className="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-gray-400">Demand Growth</h3>
          <i className="fas fa-chart-pie text-teal-accent"></i>
        </div>
        <div className="text-2xl font-bold text-white">+18.3%</div>
        <p className="text-xs text-teal-accent">
          <i className="fas fa-arrow-up mr-1"></i>
          +3.1% from last month
        </p>
      </div>
    </div>

    
    <div className="mb-4">
      <div className="border-b border-teal-light">
        <nav className="flex -mb-px">
          <button className="py-2 px-4 border-b-2 border-teal-accent text-teal-accent font-medium">
            Job Trends
          </button>
          <button className="py-2 px-4 border-b-2 border-transparent text-gray-400 hover:text-gray-300">
            In-Demand Skills
          </button>
          <button className="py-2 px-4 border-b-2 border-transparent text-gray-400 hover:text-gray-300">
            Top Locations
          </button>
        </nav>
      </div>
    </div>
    <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Job Role Demand Distribution</h2>
          <div className="bg-teal-medium rounded-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#4FD1C5"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
    
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
      <div className="rounded-lg border border-teal-light bg-teal-medium p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Job Role Demand</h2>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-filter"></i>
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Frontend Developer</span>
              <span className="text-gray-400">78%</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[78%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Backend Developer</span>
              <span className="text-gray-400">65%</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[65%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Data Scientist</span>
              <span className="text-gray-400">82%</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[82%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">DevOps Engineer</span>
              <span className="text-gray-400">71%</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[71%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">UX/UI Designer</span>
              <span className="text-gray-400">58%</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[58%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </div>

      
      <div className="rounded-lg border border-teal-light bg-teal-medium p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Salary Trends</h2>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-filter"></i>
          </button>
        </div>
        
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Frontend Developer</span>
              <span className="text-gray-400">$105,000</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[70%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Backend Developer</span>
              <span className="text-gray-400">$115,000</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[76%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Data Scientist</span>
              <span className="text-gray-400">$125,000</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[83%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">DevOps Engineer</span>
              <span className="text-gray-400">$118,000</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[78%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">UX/UI Designer</span>
              <span className="text-gray-400">$95,000</span>
            </div>
            <div className="h-8 w-full rounded-sm bg-teal-dark">
              <div className="h-full w-[63%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$50k</span>
            <span>$100k</span>
            <span>$150k</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
          <div className="rounded-lg border border-teal-light bg-teal-medium p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Salary Trends</h2>
              <button className="text-gray-400 hover:text-white">
                <i className="fas fa-filter"></i>
              </button>
            </div>
            <div className="space-y-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={salaryData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                  <XAxis dataKey="name" stroke="#CBD5E0" />
                  <YAxis stroke="#CBD5E0" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="salary"
                    stroke="#4FD1C5"
                    strokeWidth={2}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                    name="Salary ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
    <div className="rounded-lg border border-teal-light bg-teal-medium p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Year-over-Year Growth by Role</h2>
        <button className="rounded border border-teal-light bg-teal-medium px-3 py-1 text-sm text-teal-accent hover:bg-teal-medium/80">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Frontend Developer</span>
            <span className="text-teal-accent font-semibold">+24%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[80%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Backend Developer</span>
            <span className="text-teal-accent font-semibold">+18%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[70%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Full Stack Developer</span>
            <span className="text-teal-accent font-semibold">+32%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[85%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Data Scientist</span>
            <span className="text-teal-accent font-semibold">+45%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[90%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">DevOps Engineer</span>
            <span className="text-teal-accent font-semibold">+28%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[75%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">UX/UI Designer</span>
            <span className="text-teal-accent font-semibold">+15%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div className="h-full w-[60%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="hidden rounded-lg border border-teal-light bg-teal-medium p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-6">Most In-Demand Technical Skills</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">React.js</span>
            <span className="text-gray-400">92%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[92%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Node.js</span>
            <span className="text-gray-400">85%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[85%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">TypeScript</span>
            <span className="text-gray-400">78%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[78%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Python</span>
            <span className="text-gray-400">88%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[88%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">AWS</span>
            <span className="text-gray-400">82%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[82%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Docker</span>
            <span className="text-gray-400">75%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-teal-dark">
            <div className="h-full w-[75%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
          <div className="rounded-lg border border-teal-light bg-teal-medium p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Top Hiring Locations</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* United States Pie Chart */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-teal-accent">United States</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={usData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#4FD1C5"
                      label
                    >
                      {usData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Global Pie Chart */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-teal-accent">Global</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={globalData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#4FD1C5"
                      label
                    >
                      {globalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
    <div className="hidden rounded-lg border border-teal-light bg-teal-medium p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Top Hiring Locations</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-teal-accent">United States</h3>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">San Francisco, CA</span>
            <div className="text-right">
              <div className="text-white">5,245 jobs</div>
              <div className="text-xs text-teal-accent">+18% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">New York, NY</span>
            <div className="text-right">
              <div className="text-white">4,872 jobs</div>
              <div className="text-xs text-teal-accent">+15% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Seattle, WA</span>
            <div className="text-right">
              <div className="text-white">3,654 jobs</div>
              <div className="text-xs text-teal-accent">+22% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Austin, TX</span>
            <div className="text-right">
              <div className="text-white">3,128 jobs</div>
              <div className="text-xs text-teal-accent">+28% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Boston, MA</span>
            <div className="text-right">
              <div className="text-white">2,845 jobs</div>
              <div className="text-xs text-teal-accent">+12% YoY</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-teal-accent">Global</h3>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">London, UK</span>
            <div className="text-right">
              <div className="text-white">3,845 jobs</div>
              <div className="text-xs text-teal-accent">+14% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Toronto, Canada</span>
            <div className="text-right">
              <div className="text-white">2,954 jobs</div>
              <div className="text-xs text-teal-accent">+16% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Berlin, Germany</span>
            <div className="text-right">
              <div className="text-white">2,745 jobs</div>
              <div className="text-xs text-teal-accent">+20% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Singapore</span>
            <div className="text-right">
              <div className="text-white">2,542 jobs</div>
              <div className="text-xs text-teal-accent">+25% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-b border-teal-light pb-2">
            <span className="text-gray-300">Sydney, Australia</span>
            <div className="text-right">
              <div className="text-white">2,128 jobs</div>
              <div className="text-xs text-teal-accent">+18% YoY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
      
    </div>
  )
}

export default JobTrends
