
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import LandingPage from './pages/LandingPage'
import JobTrends from './pages/JobTrends'
import Roadmap from './pages/Roadmap'
import Growth from './pages/CarrerGrowth'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [Register, setRegister] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <>
      <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} Register={Register} setRegister={setRegister} setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<Homepage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} Register={Register} setRegister={setRegister} setUser={setUser} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/jobtrends" element={<JobTrends />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/growth" element={<Growth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
