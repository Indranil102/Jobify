import React from 'react';
//import logo from '../assets/logojobify.jpeg'; // Correct Import
//import insta from '..assets/logojobify_transparent.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-[#0A1A1A] text-[#f8fdff]'>
      <div className='flex gap-[10px] ml-5 items-center'>
        {/* Corrected Logo Image */}
        <img src={''} alt="Jobify Logo" className="w-[40px] h-[40px]" />

        <div className='ml-6 font-semibold'><h2>Home</h2></div>
        <div className='ml-6 font-semibold'><h2>Job Trend</h2></div>
        <div className='ml-6 font-semibold'><h2>Skill Roadmap</h2></div>
        <div className='ml-6 font-semibold'><h2>My Progress</h2></div>
      </div>

      <div className='flex gap-[30px] mr-[50px]'>
        <button className="w-[80px] h-[40px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer text-blue-500 font-semibold">
          Sign In
        </button>
        <button className="w-[80px] h-[40px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer text-blue-500 font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
