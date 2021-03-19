import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Buttons/index';
import { GridStyles } from '../components/Grid';
import { Title } from '../components/Text';
import { NotFoundWrapper, NotFoundButtonCE } from './notfound.style';

export const NotFound404 = () => {
  const history = useHistory();
  return (
    <GridStyles
      style={{ backgroundColor: '#f2f2f2', height: '100vh', margin: '0' }}
    >
      <NotFoundWrapper>
        <Title>404 - Page not found </Title>
        <h2 style={{ marginBottom: '1rem' }}>
          Hoppla - look somewhere else Dude{' '}
        </h2>
        <NotFoundButtonCE>
          <Button type='button' onClick={() => history.goBack()}>
            Take me back{' '}
          </Button>
          <Button type='button' onClick={() => history.push('/')}>
            To Home{' '}
          </Button>
        </NotFoundButtonCE>
      </NotFoundWrapper>
    </GridStyles>
  );
};
