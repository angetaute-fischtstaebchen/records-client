import styled from 'styled-components';

export const ButtonSecondary = styled.button`
  border: none;
  font-weight: 700;
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
