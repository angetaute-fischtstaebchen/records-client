import styled from 'styled-components';
import { navbarConstants } from '../components/Navbar/constants';

export const ProfileImageStyles = styled.div`
  background-color: #f1efff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileStyles = styled.div`
  height: calc(100vh - ${navbarConstants.height});
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ProfileFormStyles = styled.div`
  max-width: 538px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
`;

export const AvatarsStyles = styled.div`
  width: 700px;
`;
