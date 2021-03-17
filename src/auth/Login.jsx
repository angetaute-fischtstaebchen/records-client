import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Buttons';
import {
  FormStlyes,
  Grid,
  SignUpStyles,
  Form,
  SalutationComment,
  Input,
  ImageSignUp,
  ButtonTertiaryStyles,
} from './auth.styles';
import backgroundImage from '../components/imgs/Login.png';

export const Login = () => (
  <SignUpStyles>
    <Grid height='600px'>
      <FormStlyes>
        <div>
          <h1>Welcome back!!</h1>
          <SalutationComment>Please fill in your credentials</SalutationComment>
        </div>
        <Form>
          <div>
            <Input placeholder='Email' width='100%' />
          </div>
          <div>
            <Input placeholder='Password' width='100%' />
          </div>
          <ButtonTertiaryStyles>
            <Button secondary type='button'>
              Log in
            </Button>
          </ButtonTertiaryStyles>
        </Form>
        <p>
          What? You don&apos;t have an account? Create one
          <Link to='/signup'> here!</Link>
        </p>
      </FormStlyes>
      <ImageSignUp background={backgroundImage} />
    </Grid>
  </SignUpStyles>
);
