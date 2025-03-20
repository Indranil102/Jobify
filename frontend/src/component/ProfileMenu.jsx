
import { useState } from 'react';
import styled from 'styled-components';
import ProfileForm from './ProfileForm';

const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 20px;
  background: #264747;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  min-width: 80vw;
  max-width: 600px;
  z-index: 1000;
`;

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  // Temporary user data - replace with actual auth later
  const user = { name: 'John D' };

  return (
    <ProfileContainer>
      <ProfilePic onClick={() => setShowMenu(!showMenu)}>
        {user.name.charAt(0)}
      </ProfilePic>
      {showMenu && (
        <MenuContainer>
          <ProfileForm onClose={() => setShowMenu(false)} />
        </MenuContainer>
      )}
    </ProfileContainer>
  );
}
