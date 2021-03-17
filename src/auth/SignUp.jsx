import React from 'react';
import { Button } from '../components/Buttons';
import {
  FormStlyes,
  Grid,
  SignUpStyles,
  Form,
  SalutationComment,
  Input,
  FirstLastStyles,
  ImageSignUp,
  ButtonTertiaryStyles,
} from './signup.styles';

export const SignUp = () => (
  <SignUpStyles>
    <Grid>
      <FormStlyes>
        <div>
          <h1>
            Hurrraaaaay! <br />
            Lets us know who you are!
          </h1>
          <SalutationComment>
            We won&apos;t share your info with anybody. I promise
          </SalutationComment>
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
      <ImageSignUp />
    </Grid>
  </SignUpStyles>
);
