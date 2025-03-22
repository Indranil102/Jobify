import React from 'react';

const Progress = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Progress - Build Your Profile</h2>
      <p className="text-gray-700 mb-8">
        Welcome to your personalized profile dashboard! Fill out the form below to create and manage a professional profile that showcases your skills, education, experience, and achievements.
      </p>

      {/* Profile Completeness Meter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Profile Completeness</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Your profile is 70% complete. Add more details to improve your profile.</p>
      </div>

      {/* Personal Details Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Profile Picture</label>
              <input type="file" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Short Bio</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4"></textarea>
            </div>
          </div>
          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save</button>
        </form>
      </div>

      {/* Education Details Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Education Information</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">School Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Board/Curriculum</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>CBSE</option>
                <option>ICSE</option>
                <option>IB</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Year of Passing</label>
              <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Percentage/GPA</label>
              <input type="number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save</button>
        </form>
      </div>

      {/* Skills Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Skill Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700">Proficiency Level</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <button type="button" className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">Add More Skills</button>
          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save</button>
        </form>
      </div>

      {/* Resume Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
        <form>
          <div>
            <label className="block text-gray-700">Upload Resume</label>
            <input type="file" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save</button>
        </form>
      </div>

      {/* Preview and Submit Buttons */}
      <div className="flex justify-end gap-4">
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">Preview Profile</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Submit Profile</button>
      </div>
    </div>
  );
};

export default Progress;