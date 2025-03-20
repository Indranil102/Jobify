
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #264747;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px rgba(15, 35, 40, 0.7);
  border-bottom: 1px solid #1a3339;
`;

const Logo = styled(Link)`
  color: #4CAF50;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
  transition: text-shadow 0.3s ease;
  &:hover {
    text-shadow: 0 0 20px rgba(0, 247, 255, 0.8);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  &:hover {
    color: #ff69b4;
    text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
`;

const SignupLink = styled(NavLink)`
  &:hover {
    color: #ff00ff;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
  }
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.8; }
    100% { opacity: 1; }
  }
`;

export default function Navbar() {
  // Temporary auth state - replace with actual auth later
  const isAuthenticated = true;

  return (
    <Nav>
      <Logo to="/">Jobify</Logo>
      <NavLinks>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
        {isAuthenticated ? (
          <ProfileMenu />
        ) : (
          <SignupLink to="/signup">Signup</SignupLink>
        )}
      </NavLinks>
    </Nav>
  );
}

import ProfileMenu from './ProfileMenu';
