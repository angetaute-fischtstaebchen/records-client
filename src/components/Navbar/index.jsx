import React from 'react';

import { ButtonPrimary, ButtonSecondary } from '../Buttons';

import { Brand, Header, HeaderStyles, HeaderStylesRight } from './navbar.style';

export const Navbar = () => (
  <HeaderStyles>
    <Header>
      <Brand>RECORD STORE</Brand>
      <HeaderStylesRight>
        <ButtonSecondary type='button'>Login</ButtonSecondary>
        <ButtonPrimary type='button'>Sign up</ButtonPrimary>
      </HeaderStylesRight>
    </Header>
  </HeaderStyles>
);
