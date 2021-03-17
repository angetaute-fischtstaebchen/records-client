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
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-auto-rows: minmax(250px, auto);
`;

export const GridAuth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1600px;
  height: ${(props) => props.height};
`;
