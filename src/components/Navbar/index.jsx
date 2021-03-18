import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useUser } from '../../context/userContext';

import { Button, LoginButton } from '../Buttons';

import {
  Avatar,
  Brand,
  Header,
  HeaderStyles,
  HeaderStylesRight,
} from './navbar.style';
import avatar from '../imgs/avatars/dog.png';

export const Navbar = () => {
  const history = useHistory();
  const { user } = useUser();

  const handleGoToSignUp = () => history.push('/signup');
  const handleGoToLogin = () => history.push('/login');

  return (
    <HeaderStyles>
      <Header>
        <Brand>
          <Link to='/'>RECORD STORE </Link>
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
              <Avatar avatar={avatar} />
            </Link>
          )}
        </HeaderStylesRight>
      </Header>
    </HeaderStyles>
  );
};
