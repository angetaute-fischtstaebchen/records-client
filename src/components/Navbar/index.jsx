import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Login } from '../Buttons';

import { Brand, Header, HeaderStyles, HeaderStylesRight } from './navbar.style';

export const Navbar = () => {
  const history = useHistory();

  const handleGoToSignUp = () => history.push('/signup');

  return (
    <HeaderStyles>
      <Header>
        <Brand>RECORD STORE</Brand>
        <HeaderStylesRight>
          <Login type='button'>Login</Login>
          <Button type='button' onClick={handleGoToSignUp}>
            Sign up
          </Button>
        </HeaderStylesRight>
      </Header>
    </HeaderStyles>
  );
};
