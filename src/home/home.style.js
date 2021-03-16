import styled from 'styled-components';
import backgroundImage from '../components/imgs/Home.png';
import { navbarConstants } from '../components/Navbar/constants';

export const HomeStyles = styled.div`
  height: calc(100vh - ${navbarConstants.maxHeight});
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const AuthorSignature = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 5px 14px;
  border-radius: 23px;
  font-size: 10px;
  font-weight: 700;
  opacity: 1;
`;
