import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/Screenshot 2025-03-21 005904.png';
const Navbar = ({isAuthenticated,setIsAuthenticated,Register,setRegister,setUser,user}) => {
  return (
    
    <div className='flex justify-between items-center p-5 bg-[#0A1A1A] text-[#f8fdff] border-b-[1px] border-white'>
      <div className='flex gap-[10px] ml-5 items-center'>
        {/* Corrected Logo Image */}
        <img src={logo} alt="Jobify Logo" className="w-[40px] h-[40px] rounded-full" />

        <div className='ml-6 font-semibold transition duration-300 hover:text-[#79ded1]'><h2 className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">Home</h2></div>
        <div className='ml-6 font-semibold transition duration-300 hover:text-[#79ded1]'><h2>Job Trend</h2></div>
        <div className='ml-6 font-semibold transition duration-300 hover:text-[#79ded1]'><h2>Skill Roadmap</h2></div>
        <div className='ml-6 font-semibold transition duration-300 hover:text-[#79ded1]'><h2>My Progress</h2></div>
      </div>

      {!isAuthenticated && <div className='flex gap-[30px] mr-[50px]'>
        {Register && <button className="w-[80px] h-[40px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer text-blue-500 font-semibold" onClick={()=>setRegister(false)}>
          Sign Up
        </button>}
        {!Register && <button className="w-[80px] h-[40px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer text-blue-500 font-semibold" onClick={()=>setRegister(true)}>
          Login
        </button>}
      </div>}
      {isAuthenticated && <div className='flex gap-[30px] mr-[50px]'>
        <button className="w-[80px] h-[40px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer text-blue-500 font-semibold" onClick={()=>setIsAuthenticated(false)}>
          Logout
        </button>
      </div>}
    </div>
  );
};

export default Navbar;
