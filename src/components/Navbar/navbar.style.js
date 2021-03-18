import styled from 'styled-components';
import { navbarConstants } from './constants';

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: ${navbarConstants.height};
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
export const Avatar = styled.div`
  background: url(${(props) => props.avatar}) center/cover no-repeat;
  border: 2px solid #eea668;
  opacity: 1;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
`;
