import React from 'react';

const Homepage = () => {
  return (
    <div>
<div className="min-h-screen bg-[#092424] flex items-center justify-center  ">

        <div className="h-[100vh] bg-[#0A1A1A] flex items-center justify-center p-2  w-[900px] ">
          {/* Left Side: Login Form */}
          <div className="w-[700px] pr-9 pl-9">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#e9ffef]" >Welcome to Jobify</h1>
            <p className="text-center text-[#e2ffe3] mb-8">Sign in or create an account to get started</p>

            <div className="flex justify-between mb-6">
              <button className="text-[#e9ffef] font-semibold hover:text-[#79ded1]">Login</button>
              <button className="text-[#e9ffef] font-semibold hover:text-[#79ded1]">Register</button>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-[] text-sm font-bold mb-2 text-[#e9ffef]" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#e9ffef] text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text-[#e9ffef] leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center ml-[240px]">
                <button
                  className="  text-[#e9ffef] font-semibold hover:text-[#79ded1] text-lg 
                  
                  py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline border border-[#e9ffef] hover:border-[#79ded1]"
                  type="button"
                >
                  Login
                </button>
                <a
                  className="inline-block align-baseline font-bold text-[12px] text-[#e9ffef]  ml-[200px]"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>

            <div className="mt-6 text-center flex gap-2 ">
              <p className="text-[#e9ffef]">Don't have an account?</p>
              <button
                className=" text-[#79ded1] font-bold  rounded focus:outline-none focus:shadow-outline text-[14px]" 
                type="button"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Right Side: Features Section */}
          
        </div>
        <div className="w-1/2 pl-8 border-l border-gray-200 ml-8 text-[#e9ffef]"> {/* Added ml-8 for space */}
            <h2 className="text-xl font-bold mb-6">Discover Your Career Path</h2>
            <p className="text-gray-600 mb-8 text-[#79ded1]">
              Job Scout AI helps you find the perfect job and guides you through the skills you need to succeed.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2  text-[#e9ffef]">Track Job Trends</h3>
              <p className="text-gray-600 text-[#79ded1]">Stay updated with real-time job market demands and opportunities.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2  text-[#e9ffef]">Learn New Skills</h3>
              <p className="text-gray-600 text-[#79ded1]">Follow guided learning paths to develop in-demand skills.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Homepage;
