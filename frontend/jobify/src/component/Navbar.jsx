import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex gap-[10px] ml-5'>
        <img src="" alt="logo" />
        <div className=' ml-6 font-semibold '>
            <h2>Home</h2>
        </div>
        <div className=' ml-6 font-semibold '>
            <h2>Job Trend</h2>
        </div>
        <div className=' ml-6 font-semibold '>
            <h2>Skill Roadmap</h2>
        </div>
        <div className=' ml-6 font-semibold '>
            <h2>My Progress</h2>
        </div>
      </div>

      <div className='flex gap-[30px] mr-[50px]'>
      <button className="w-[80px] h-[40px] bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer">
  Sign In
</button>

        <button className='w-[80px] bg-gray-100 h-[40px]'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
