import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Buttons/index';
import { GridNotFound } from '../components/Grid';
import { Title } from '../components/Text';
import { NotFoundWrapper, NotFoundButtonCE } from './notfound.style';

export const NotFound404 = () => {
  const history = useHistory();
  return (
    <GridNotFound>
      <NotFoundWrapper>
        <Title>404 - Page not found </Title>
        <Title> Hoppla - look somewhere else Dude </Title>
        <NotFoundButtonCE>
          <Button type='button' onClick={() => history.goBack()}>
            Take me back{' '}
          </Button>
          <Button type='button' onClick={() => history.push('/')}>
            To Home{' '}
          </Button>
        </NotFoundButtonCE>
      </NotFoundWrapper>
    </GridNotFound>
  );
};
