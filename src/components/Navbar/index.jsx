import React from 'react';

import { Brand, Header, HeaderStyles } from './navbar.style';

export const Navbar = () => (
  <HeaderStyles>
    <Header>
      <Brand>Record Store</Brand>
      <button type='button'>Login</button>
      <button type='button'>SignUp</button>
    </Header>
  </HeaderStyles>
);
