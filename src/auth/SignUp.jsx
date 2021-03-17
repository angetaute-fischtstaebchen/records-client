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

export const SignUp = () => (
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
        <Form>
          <FirstLastStyles>
            <Input placeholder='First Name' />
            <Input placeholder='Last Name' />
          </FirstLastStyles>
          <div>
            <Input placeholder='Email' width='100%' />
          </div>
          <div>
            <Input placeholder='Nickname' width='100%' />
          </div>
          <div>
            <Input placeholder='Password' width='100%' />
          </div>
          <div>
            <Input placeholder='Repeat password' width='100%' />
          </div>
          <ButtonTertiaryStyles>
            <Button secondary type='button'>
              Create account
            </Button>
          </ButtonTertiaryStyles>
        </Form>
      </FormStlyes>
      <ImageSignUp background={backgroundImage} />
    </GridAuth>
  </SignUpStyles>
);
