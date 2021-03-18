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
export const Avatar = styled.div`
  background: url(${(props) => props.avatar}) center/cover no-repeat;
  border: 2px solid #eea668;
  opacity: 1;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  cursor: pointer;
`;

export const SelectedAvatar = styled.div`
  background: url(${(props) => props.avatar}) center/cover no-repeat;
  border: 2px solid #eea668;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  display: grid;
  justify-self: center;
`;

export const TextStyles = styled.div`
  margin-bottom: 50px;
`;
