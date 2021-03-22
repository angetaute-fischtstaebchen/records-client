import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  width: ${(props) => props.width};
  font-size: 18px;
  font-weight: 700;
  padding: 5px 0;

  &::placeholder {
    color: #919191;
    font-weight: 700;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const LockInput = styled(Input)`
  border: none;
  background-color: white;
`;
