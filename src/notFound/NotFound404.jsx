import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Buttons/index';
import { GridNotFound } from '../components/Grid';
import { Title } from '../components/Text';
import { NotFoundStyles, ButtonStyles } from './notFound.style';

export const NotFound404 = () => {
  const history = useHistory();

  const handleGoBack = () => history.goBack();
  const handleGoHome = () => history.push('/');

  return (
    <GridNotFound>
      <NotFoundStyles>
        <Title>404 - Page not found </Title>
        <Title> Hoppla - look somewhere else Dude </Title>
        <ButtonStyles>
          <Button type='button' onClick={handleGoBack}>
            Go back
          </Button>
          <Button type='button' onClick={handleGoHome}>
            To Home
          </Button>
        </ButtonStyles>
      </NotFoundStyles>
    </GridNotFound>
  );
};
