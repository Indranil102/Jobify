
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import LandingPage from './pages/LandingPage'
import { useState } from 'react'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [Register, setRegister] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <>
     <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} Register={Register} setRegister={setRegister} setUser={setUser} user={user} />
      {!isAuthenticated && <Homepage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} Register={Register} setRegister={setRegister} setUser={setUser} />}
      {isAuthenticated && <LandingPage />}
    </>
  )
}

export default App
