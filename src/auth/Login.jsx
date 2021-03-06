import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, ButtonTertiaryStyles } from '../components/Buttons';
import { FormStyles, SignUpStyles, Form, ImageSignUp } from './auth.styles';
import backgroundImage from '../components/imgs/Login.png';
import { ErrorMessage, PrimaryText, Title } from '../components/Text';
import { GridAuth } from '../components/Grid';
import { useInput } from '../hooks/useInput';
import { loginUser } from '../helpers/apiCalls';
import { useUser } from '../context/userContext';
import { Input } from '../components/Input';

export const Login = () => {
  const [emailProps, resetEmail] = useInput('');
  const [passwordProps, resetPassword] = useInput('');

  const {
    dispatchUser,
    auth: { user, error },
  } = useUser();

  if (user) return <Redirect to='/records' />;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { value: email } = emailProps;
    const { value: password } = passwordProps;
    if (!email.trim() || !password.trim()) return;

    loginUser({ email, password, dispatchUser });
    resetEmail();
    resetPassword();
  };

  return (
    <SignUpStyles>
      <GridAuth height='600px'>
        <FormStyles>
          <div>
            <Title>Welcome back!!</Title>
            <PrimaryText>Please fill in your credentials</PrimaryText>
          </div>
          <Form onSubmit={handleLoginSubmit}>
            <div>
              <Input
                {...emailProps}
                placeholder='Email'
                width='100%'
                required
              />
            </div>
            <div>
              <Input
                {...passwordProps}
                placeholder='Password'
                width='100%'
                required
              />
            </div>
            {error && <ErrorMessage> {error?.messages}</ErrorMessage>}
            <ButtonTertiaryStyles>
              <Button secondary type='submit'>
                Log in
              </Button>
            </ButtonTertiaryStyles>
          </Form>
          <p>
            What? You don&apos;t have an account? Create one
            <Link to='/signup'>
              <strong> here!</strong>
            </Link>
          </p>
        </FormStyles>
        <ImageSignUp background={backgroundImage} />
      </GridAuth>
    </SignUpStyles>
  );
};
