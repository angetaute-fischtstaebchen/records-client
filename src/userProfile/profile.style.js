import styled from 'styled-components';
import { LockAlt } from '@styled-icons/boxicons-regular/LockAlt';
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

export const LockedInputStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const AvatarsStyles = styled.div`
  width: 700px;
  height: 620px;
`;
export const Avatar = styled.button`
  background: url(${(props) => props.avatar}) center/cover no-repeat;
  border: 2px solid #eea668;
  opacity: 1;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    border-radius: 50%;
    outline: none;
    border: 5px solid royalblue;
  }
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

export const AvatarsImagesStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const AvatarsOptionsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 280px;
`;

export const LockIcon = styled(LockAlt)`
  color: black;
  width: 1.2rem;
  height: 1.1rem;
`;
