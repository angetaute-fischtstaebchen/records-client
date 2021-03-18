import styled from 'styled-components';

export const PrimaryText = styled.p`
  font-size: 24px;
  font-weight: ${(props) => (props.weight === 'bold' ? 700 : 400)};
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  padding-bottom: 15px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;
