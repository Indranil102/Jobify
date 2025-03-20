
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './component/Navbar';
import Landing from './component/pages/Landing';
import Dashboard from './component/Dashboard';
import './App.css';

const PageContainer = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  background: #1A3636;
`;

export default function App() {
  return (
    <Router>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/roadmap" element={<div>Roadmap Page</div>} />
          <Route path="/signup" element={<div>Signup Page</div>} />
        </Routes>
      </PageContainer>
    </Router>
  );
}
