import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonPrimary, ButtonSecondary } from '../Buttons';

import { Brand, Header, HeaderStyles, HeaderStylesRight } from './navbar.style';

export const Navbar = () => {
  const history = useHistory();

  const handleGoToSignUp = () => history.push('/signup');

  return (
    <HeaderStyles>
      <Header>
        <Brand>RECORD STORE</Brand>
        <HeaderStylesRight>
          <ButtonSecondary type='button'>Login</ButtonSecondary>
          <ButtonPrimary type='button' onClick={handleGoToSignUp}>
            Sign up
          </ButtonPrimary>
        </HeaderStylesRight>
      </Header>
    </HeaderStyles>
  );
};
