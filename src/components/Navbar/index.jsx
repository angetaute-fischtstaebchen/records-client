import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, LoginButton } from '../Buttons';

import { Brand, Header, HeaderStyles, HeaderStylesRight } from './navbar.style';

export const Navbar = () => {
  const history = useHistory();

  const handleGoToSignUp = () => history.push('/signup');
  const handleGoToLogin = () => history.push('/login');

  return (
    <HeaderStyles>
      <Header>
        <Brand>RECORD STORE</Brand>
        <HeaderStylesRight>
          <LoginButton type='button' onClick={handleGoToLogin}>
            Login
          </LoginButton>
          <Button type='button' onClick={handleGoToSignUp}>
            Sign up
          </Button>
        </HeaderStylesRight>
      </Header>
    </HeaderStyles>
  );
};
