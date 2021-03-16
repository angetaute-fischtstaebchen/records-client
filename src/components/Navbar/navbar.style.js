import styled from 'styled-components';
import { navbarConstants } from './constants';

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: ${navbarConstants.height};
  background-color: ${navbarConstants.color};
`;

export const Header = styled.div`
  width: 1048px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 13.5px auto;
`;
export const HeaderStylesRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 180px;
`;
export const Brand = styled.h3`
  margin-right: auto;
`;
