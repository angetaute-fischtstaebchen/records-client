import React from 'react';

import {
  ButtonTertiaryStyles,
  FirstLastStyles,
  Input,
} from '../auth/auth.styles';
import { Button } from '../components/Buttons';
import { GridAuth } from '../components/Grid/grid.style';
import { PrimaryText, Title } from '../components/Text';
import {
  ProfileStyles,
  ProfileForm,
  ProfileFormStyles,
  ProfileImageStyles,
  AvatarsStyles,
} from './profile.style';

export const Profile = () => (
  <ProfileStyles>
    <GridAuth height='100%'>
      <ProfileFormStyles>
        <div>
          <Title>Your profile, Mr XXXX.</Title>
          <PrimaryText>
            Don&apos;t forgget to click the save button <br /> Before we are
            gone!
          </PrimaryText>
        </div>
        <ProfileForm>
          <FirstLastStyles>
            <Input placeholder='First Name' />
            <Input placeholder='Last Name' />
          </FirstLastStyles>
          <div>
            <Input placeholder='Email' width='100%' disabled />
          </div>
          <div>
            <Input placeholder='Nickname' width='100%' />
          </div>
          <ButtonTertiaryStyles>
            <Button secondary type='button'>
              Save
            </Button>
          </ButtonTertiaryStyles>
        </ProfileForm>
      </ProfileFormStyles>
      <ProfileImageStyles>
        <AvatarsStyles>
          <Title>You can also update your supa kewl profile pic</Title>
          <PrimaryText>
            omg. These are so cool. tenk u Gabriel hollington
          </PrimaryText>
        </AvatarsStyles>
      </ProfileImageStyles>
    </GridAuth>
  </ProfileStyles>
);
