import styled from 'styled-components';

import { navbarConstants } from '../components/Navbar/constants';

export const ImageSignUp = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const SignUpStyles = styled.div`
  height: calc(100vh - ${navbarConstants.height});
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const FormStyles = styled.div`
  max-width: 538px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const FirstLastStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
