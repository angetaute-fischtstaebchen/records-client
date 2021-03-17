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

export const FormStlyes = styled.div`
  max-width: 538px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  width: ${(props) => props.width};
  font-size: 18px;
  font-weight: 700;

  &::placeholder {
    color: #919191;
    font-weight: 700;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
`;

export const FirstLastStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ButtonTertiaryStyles = styled.div`
  align-self: flex-end;
`;