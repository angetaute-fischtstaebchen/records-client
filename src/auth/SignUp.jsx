import React, { useState } from 'react';
import { Button } from '../components/Buttons';
import {
  FormStlyes,
  SignUpStyles,
  Form,
  Input,
  FirstLastStyles,
  ImageSignUp,
  ButtonTertiaryStyles,
} from './auth.styles';

import backgroundImage from '../components/imgs/SignUp.png';
import { PrimaryText, Title, ErrorMessage } from '../components/Text';
import { GridAuth } from '../components/Grid';
import { useUser } from '../context/userContext';
import { signUpUser } from '../helpers/apiCalls';
import { validateSingUp } from '../helpers';

const initialNewUserState = {
  firstName: '',
  lastName: '',
  email: '',
  nickName: '',
  password: '',
  repeatedPassword: '',
};

export const SignUp = () => {
  const [newUser, setNewUser] = useState(initialNewUserState);
  const [error, setError] = useState(null);

  const { dispatchUser } = useUser();

  const handleSignUpUser = (e) => {
    e.preventDefault();

    const validationResponse = validateSingUp(newUser);
    if (validationResponse) return setError({ [validationResponse]: 'error' });

    const { firstName, lastName, email, nickName, password } = newUser;
    signUpUser({
      firstName,
      lastName,
      email,
      nickName,
      password,
      dispatchUser,
    });
    setNewUser(initialNewUserState);
    return undefined;
  };

  const handleInputs = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  return (
    <SignUpStyles>
      <GridAuth height='800px'>
        <FormStlyes>
          <div>
            <Title>
              Hurrraaaaay! <br />
              Lets us know who you are!
            </Title>
            <PrimaryText>
              We won&apos;t share your info with anybody. I promise
            </PrimaryText>
          </div>
          <Form onSubmit={handleSignUpUser}>
            <FirstLastStyles>
              <Input
                name='firstName'
                value={newUser.firstName}
                onChange={handleInputs}
                placeholder='First Name'
              />
              <Input
                name='lastName'
                value={newUser.lastName}
                onChange={handleInputs}
                placeholder='Last Name'
              />
            </FirstLastStyles>
            <div>
              <Input
                name='email'
                value={newUser.email}
                onChange={handleInputs}
                placeholder='Email'
                width='100%'
              />
            </div>
            <div>
              <Input
                name='nickName'
                value={newUser.nickName}
                onChange={handleInputs}
                placeholder='Nickname'
                width='100%'
              />
            </div>
            <div>
              <Input
                name='password'
                value={newUser.password}
                onChange={handleInputs}
                placeholder='Password'
                width='100%'
              />
              {error?.passwordStrength && (
                <ErrorMessage>
                  Password is not strong enough. You need at least one number,
                  one lowercase and one uppercase letter and at least six
                  characters
                </ErrorMessage>
              )}
            </div>
            <div>
              <Input
                name='repeatedPassword'
                value={newUser.repeatedPassword}
                onChange={handleInputs}
                placeholder='Repeat password'
                width='100%'
              />
              {error?.passwordEquality && (
                <ErrorMessage>Passwords do not match</ErrorMessage>
              )}
            </div>
            <ButtonTertiaryStyles>
              <Button secondary type='submit'>
                Create account
              </Button>
            </ButtonTertiaryStyles>
          </Form>
        </FormStlyes>
        <ImageSignUp background={backgroundImage} />
      </GridAuth>
    </SignUpStyles>
  );
};
