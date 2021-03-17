import styled from 'styled-components';

export const ButtonSecondary = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonPrimary = styled(ButtonSecondary)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 34px;
  opacity: 1;
  padding: 11px 20px;
  &:hover {
    text-decoration: underline;
  }
`;
