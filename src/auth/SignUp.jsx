import React from 'react';
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
import { PrimaryText, Title } from '../components/Text';
import { GridAuth } from '../components/Grid';
import { useUser } from '../context/userContext';
import { useInput } from '../hooks/useInput';
import { signUpUser } from '../helpers/apiCalls';

export const SignUp = () => {
  const [firstNameProps, resetFirstName] = useInput('');
  const [lastNameProps, resetLastName] = useInput('');
  const [emailProps, resetEmail] = useInput('');
  const [nickNameProps, resetNickNameProps] = useInput('');
  const [passwordProps, resetPassword] = useInput('');
  const [repeatedPasswordProps, resetRepeatPassword] = useInput('');
  const { dispatchUser } = useUser();

  const handleSignUpUser = (e) => {
    e.preventDefault();

    const { value: firstName } = firstNameProps;
    const { value: lastName } = lastNameProps;
    const { value: email } = emailProps;
    const { value: nickName } = nickNameProps;
    const { value: password } = passwordProps;
    const { value: repeatedPassword } = repeatedPasswordProps;

    if (password !== repeatedPassword) return;

    signUpUser({
      firstName,
      lastName,
      email,
      nickName,
      password,
      dispatchUser,
    });
    resetFirstName();
    resetLastName();
    resetEmail();
    resetNickNameProps();
    resetPassword();
    resetRepeatPassword();
  };

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
              <Input {...firstNameProps} placeholder='First Name' />
              <Input {...lastNameProps} placeholder='Last Name' />
            </FirstLastStyles>
            <div>
              <Input {...emailProps} placeholder='Email' width='100%' />
            </div>
            <div>
              <Input {...nickNameProps} placeholder='Nickname' width='100%' />
            </div>
            <div>
              <Input {...passwordProps} placeholder='Password' width='100%' />
            </div>
            <div>
              <Input
                {...repeatedPasswordProps}
                placeholder='Repeat password'
                width='100%'
              />
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
