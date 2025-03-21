import React from 'react';

const Homepage = () => {
  return (
    <div>
<div className="min-h-screen bg-[#274b4b] flex items-center justify-center  ">

        <div className="h-[100vh] bg-[#0A1A1A] flex items-center justify-center p-2  w-[900px] ">
          {/* Left Side: Login Form */}
          <div className="w-full pr-9 pl-9">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-300" >Welcome to Jobify</h1>
            <p className="text-center text-gray-400 mb-8">Sign in or create an account to get started</p>

            <div className="flex justify-between mb-6">
              <button className="text-blue-500 font-semibold hover:text-blue-700">Login</button>
              <button className="text-blue-500 font-semibold hover:text-blue-700">Register</button>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Login
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">Don't have an account?</p>
              <button
                className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Right Side: Features Section */}
          
        </div>
        <div className="w-1/2 pl-8 border-l border-gray-200 ml-8"> {/* Added ml-8 for space */}
            <h2 className="text-xl font-bold mb-6">Discover Your Career Path</h2>
            <p className="text-gray-600 mb-8">
              Job Scout AI helps you find the perfect job and guides you through the skills you need to succeed.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Track Job Trends</h3>
              <p className="text-gray-600">Stay updated with real-time job market demands and opportunities.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Learn New Skills</h3>
              <p className="text-gray-600">Follow guided learning paths to develop in-demand skills.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Homepage;
