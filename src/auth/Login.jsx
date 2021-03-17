import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Buttons';
import {
  FormStlyes,
  SignUpStyles,
  Form,
  Input,
  ImageSignUp,
  ButtonTertiaryStyles,
} from './auth.styles';
import backgroundImage from '../components/imgs/Login.png';
import { PrimaryText, Title } from '../components/Text';
import { GridAuth } from '../components/Grid';
import { useInput } from '../hooks/useInput';

export const Login = () => {
  const [emailProps, resetEmail] = useInput('');
  const [passwordProps, resetPassword] = useInput('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    resetEmail();
    resetPassword();
  };

  return (
    <SignUpStyles>
      <GridAuth height='600px'>
        <FormStlyes>
          <div>
            <Title>Welcome back!!</Title>
            <PrimaryText>Please fill in your credentials</PrimaryText>
          </div>
          <Form onSubmit={handleSignUpSubmit}>
            <div>
              <Input {...emailProps} placeholder='Email' width='100%' />
            </div>
            <div>
              <Input {...passwordProps} placeholder='Password' width='100%' />
            </div>
            <ButtonTertiaryStyles>
              <Button secondary type='submit'>
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
      </GridAuth>
    </SignUpStyles>
  );
};
