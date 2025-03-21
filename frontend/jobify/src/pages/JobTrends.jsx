import React from 'react'

const JobTrends = () => {
  return (
    <div>
        <main ClassName="container mx-auto px-4 py-8">
    <div ClassName="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 ClassName="text-3xl font-bold text-teal-accent">Job Market Analytics</h1>
        <p ClassName="text-gray-400">Comprehensive insights into current job market trends</p>
      </div>
      
      <div ClassName="flex flex-wrap gap-3 mt-4 md:mt-0">
        <button ClassName="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i ClassName="far fa-calendar-alt"></i>
          Last 30 Days
          <i ClassName="fas fa-chevron-down ml-1"></i>
        </button>
        
        <button ClassName="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i ClassName="fas fa-filter"></i>
          Filter
        </button>
        
        <button ClassName="flex items-center gap-2 rounded border border-teal-light bg-teal-medium px-3 py-2 text-sm text-teal-accent hover:bg-teal-medium/80">
          <i ClassName="fas fa-download"></i>
          Export
        </button>
      </div>
    </div>

    
    <div ClassName="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div ClassName="flex items-center justify-between pb-2">
          <h3 ClassName="text-sm font-medium text-gray-400">Total Job Listings</h3>
          <i ClassName="fas fa-chart-bar text-teal-accent"></i>
        </div>
        <div ClassName="text-2xl font-bold text-white">24,567</div>
        <p ClassName="text-xs text-teal-accent">
          <i ClassName="fas fa-arrow-up mr-1"></i>
          +12.5% from last month
        </p>
      </div>
      
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div ClassName="flex items-center justify-between pb-2">
          <h3 ClassName="text-sm font-medium text-gray-400">Average Salary</h3>
          <i ClassName="fas fa-chart-line text-teal-accent"></i>
        </div>
        <div ClassName="text-2xl font-bold text-white">$95,400</div>
        <p ClassName="text-xs text-teal-accent">
          <i ClassName="fas fa-arrow-up mr-1"></i>
          +5.2% from last month
        </p>
      </div>
      
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div ClassName="flex items-center justify-between pb-2">
          <h3 ClassName="text-sm font-medium text-gray-400">Top Hiring Companies</h3>
          <i ClassName="fas fa-users text-teal-accent"></i>
        </div>
        <div ClassName="text-2xl font-bold text-white">1,245</div>
        <p ClassName="text-xs text-teal-accent">
          <i ClassName="fas fa-arrow-up mr-1"></i>
          +8.7% from last month
        </p>
      </div>
      
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-4">
        <div ClassName="flex items-center justify-between pb-2">
          <h3 ClassName="text-sm font-medium text-gray-400">Demand Growth</h3>
          <i ClassName="fas fa-chart-pie text-teal-accent"></i>
        </div>
        <div ClassName="text-2xl font-bold text-white">+18.3%</div>
        <p ClassName="text-xs text-teal-accent">
          <i ClassName="fas fa-arrow-up mr-1"></i>
          +3.1% from last month
        </p>
      </div>
    </div>

    
    <div ClassName="mb-4">
      <div ClassName="border-b border-teal-light">
        <nav ClassName="flex -mb-px">
          <button ClassName="py-2 px-4 border-b-2 border-teal-accent text-teal-accent font-medium">
            Job Trends
          </button>
          <button ClassName="py-2 px-4 border-b-2 border-transparent text-gray-400 hover:text-gray-300">
            In-Demand Skills
          </button>
          <button ClassName="py-2 px-4 border-b-2 border-transparent text-gray-400 hover:text-gray-300">
            Top Locations
          </button>
        </nav>
      </div>
    </div>

    
    <div ClassName="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-6">
        <div ClassName="flex items-center justify-between mb-6">
          <h2 ClassName="text-xl font-semibold text-white">Job Role Demand</h2>
          <button ClassName="text-gray-400 hover:text-white">
            <i ClassName="fas fa-filter"></i>
          </button>
        </div>
        
        <div ClassName="space-y-6">
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Frontend Developer</span>
              <span ClassName="text-gray-400">78%</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[78%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Backend Developer</span>
              <span ClassName="text-gray-400">65%</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[65%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Data Scientist</span>
              <span ClassName="text-gray-400">82%</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[82%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">DevOps Engineer</span>
              <span ClassName="text-gray-400">71%</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[71%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">UX/UI Designer</span>
              <span ClassName="text-gray-400">58%</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[58%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </div>

      
      <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-6">
        <div ClassName="flex items-center justify-between mb-6">
          <h2 ClassName="text-xl font-semibold text-white">Salary Trends</h2>
          <button ClassName="text-gray-400 hover:text-white">
            <i ClassName="fas fa-filter"></i>
          </button>
        </div>
        
        <div ClassName="space-y-6">
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Frontend Developer</span>
              <span ClassName="text-gray-400">$105,000</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[70%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Backend Developer</span>
              <span ClassName="text-gray-400">$115,000</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[76%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">Data Scientist</span>
              <span ClassName="text-gray-400">$125,000</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[83%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">DevOps Engineer</span>
              <span ClassName="text-gray-400">$118,000</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[78%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="space-y-2">
            <div ClassName="flex items-center justify-between">
              <span ClassName="text-gray-400">UX/UI Designer</span>
              <span ClassName="text-gray-400">$95,000</span>
            </div>
            <div ClassName="h-8 w-full rounded-sm bg-teal-dark">
              <div ClassName="h-full w-[63%] rounded-sm bg-teal-accent"></div>
            </div>
          </div>
          
          <div ClassName="flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$50k</span>
            <span>$100k</span>
            <span>$150k</span>
          </div>
        </div>
      </div>
    </div>

    
    <div ClassName="rounded-lg border border-teal-light bg-teal-medium p-6 mb-8">
      <div ClassName="flex items-center justify-between mb-6">
        <h2 ClassName="text-xl font-semibold text-white">Year-over-Year Growth by Role</h2>
        <button ClassName="rounded border border-teal-light bg-teal-medium px-3 py-1 text-sm text-teal-accent hover:bg-teal-medium/80">
          View All
        </button>
      </div>
      
      <div ClassName="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Frontend Developer</span>
            <span ClassName="text-teal-accent font-semibold">+24%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[80%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Backend Developer</span>
            <span ClassName="text-teal-accent font-semibold">+18%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[70%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Full Stack Developer</span>
            <span ClassName="text-teal-accent font-semibold">+32%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[85%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Data Scientist</span>
            <span ClassName="text-teal-accent font-semibold">+45%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[90%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">DevOps Engineer</span>
            <span ClassName="text-teal-accent font-semibold">+28%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[75%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="rounded-lg border border-teal-light bg-teal-dark p-4">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">UX/UI Designer</span>
            <span ClassName="text-teal-accent font-semibold">+15%</span>
          </div>
          <div ClassName="mt-2 h-1.5 w-full rounded-full bg-teal-medium">
            <div ClassName="h-full w-[60%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
      </div>
    </div>

    
    <div ClassName="hidden rounded-lg border border-teal-light bg-teal-medium p-6 mb-8">
      <h2 ClassName="text-xl font-semibold text-white mb-6">Most In-Demand Technical Skills</h2>
      
      <div ClassName="space-y-6">
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">React.js</span>
            <span ClassName="text-gray-400">92%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[92%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Node.js</span>
            <span ClassName="text-gray-400">85%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[85%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">TypeScript</span>
            <span ClassName="text-gray-400">78%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[78%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Python</span>
            <span ClassName="text-gray-400">88%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[88%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">AWS</span>
            <span ClassName="text-gray-400">82%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[82%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
        
        <div ClassName="space-y-2">
          <div ClassName="flex items-center justify-between">
            <span ClassName="text-gray-400">Docker</span>
            <span ClassName="text-gray-400">75%</span>
          </div>
          <div ClassName="h-2 w-full rounded-full bg-teal-dark">
            <div ClassName="h-full w-[75%] rounded-full bg-teal-accent"></div>
          </div>
        </div>
      </div>
    </div>

    
    <div ClassName="hidden rounded-lg border border-teal-light bg-teal-medium p-6">
      <h2 ClassName="text-xl font-semibold text-white mb-6">Top Hiring Locations</h2>
      
      <div ClassName="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div ClassName="space-y-6">
          <h3 ClassName="text-lg font-medium text-teal-accent">United States</h3>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">San Francisco, CA</span>
            <div ClassName="text-right">
              <div ClassName="text-white">5,245 jobs</div>
              <div ClassName="text-xs text-teal-accent">+18% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">New York, NY</span>
            <div ClassName="text-right">
              <div ClassName="text-white">4,872 jobs</div>
              <div ClassName="text-xs text-teal-accent">+15% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Seattle, WA</span>
            <div ClassName="text-right">
              <div ClassName="text-white">3,654 jobs</div>
              <div ClassName="text-xs text-teal-accent">+22% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Austin, TX</span>
            <div ClassName="text-right">
              <div ClassName="text-white">3,128 jobs</div>
              <div ClassName="text-xs text-teal-accent">+28% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Boston, MA</span>
            <div ClassName="text-right">
              <div ClassName="text-white">2,845 jobs</div>
              <div ClassName="text-xs text-teal-accent">+12% YoY</div>
            </div>
          </div>
        </div>
        
        <div ClassName="space-y-6">
          <h3 ClassName="text-lg font-medium text-teal-accent">Global</h3>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">London, UK</span>
            <div ClassName="text-right">
              <div ClassName="text-white">3,845 jobs</div>
              <div ClassName="text-xs text-teal-accent">+14% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Toronto, Canada</span>
            <div ClassName="text-right">
              <div ClassName="text-white">2,954 jobs</div>
              <div ClassName="text-xs text-teal-accent">+16% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Berlin, Germany</span>
            <div ClassName="text-right">
              <div ClassName="text-white">2,745 jobs</div>
              <div ClassName="text-xs text-teal-accent">+20% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Singapore</span>
            <div ClassName="text-right">
              <div ClassName="text-white">2,542 jobs</div>
              <div ClassName="text-xs text-teal-accent">+25% YoY</div>
            </div>
          </div>
          
          <div ClassName="flex items-center justify-between border-b border-teal-light pb-2">
            <span ClassName="text-gray-300">Sydney, Australia</span>
            <div ClassName="text-right">
              <div ClassName="text-white">2,128 jobs</div>
              <div ClassName="text-xs text-teal-accent">+18% YoY</div>
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
