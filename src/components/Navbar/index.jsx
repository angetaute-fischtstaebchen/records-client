import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ERROR } from '../../context/constants';

import { useUser } from '../../context/userContext';

import { Button, LoginButton } from '../Buttons';

import {
  AvatarNav,
  Brand,
  Header,
  HeaderStyles,
  HeaderStylesRight,
} from './navbar.style';

export const Navbar = () => {
  const history = useHistory();
  const {
    auth: { user },
    dispatchUser,
  } = useUser();

  const handleGoToSignUp = () => {
    history.push('/signup');
    dispatchUser({ type: ERROR, payload: null });
  };
  const handleGoToLogin = () => {
    history.push('/login');
    dispatchUser({ type: ERROR, payload: null });
  };
  return (
    <HeaderStyles>
      <Header>
        <Brand>
          <Link to={user ? '/records' : '/'}>RECORD STORE </Link>
        </Brand>
        <HeaderStylesRight>
          {!user && (
            <>
              <LoginButton type='button' onClick={handleGoToLogin}>
                Login
              </LoginButton>
              <Button type='button' onClick={handleGoToSignUp}>
                Sign up
              </Button>
            </>
          )}
          {user && (
            <Link to='/profile'>
              <AvatarNav avatar={user?.avatar} />
            </Link>
          )}
        </HeaderStylesRight>
      </Header>
    </HeaderStyles>
  );
};
