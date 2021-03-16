import styled from 'styled-components';
import { navbarConstants } from './constants';

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: ${navbarConstants.minHeight};
  max-height: ${navbarConstants.maxHeight};
  background-color: ${navbarConstants.color};
`;

export const Header = styled.div`
  width: 1600px;
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

  width: 220px;
`;
export const Brand = styled.h3`
  margin-right: auto;
  font-size: 24px;
`;
