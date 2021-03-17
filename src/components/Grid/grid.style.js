import styled from 'styled-components';

export const GridStyles = styled.div`
  display: grid;
  justify-content: center;
  padding: 20px 0;
`;

export const GridRecords = styled.div`
  display: grid;
  width: 1600px;
  padding: 20px 0;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, 376px);
  grid-auto-rows: 376px;
`;

export const GridAuth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1600px;
  height: ${(props) => props.height};
`;
