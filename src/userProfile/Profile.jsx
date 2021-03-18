import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  ButtonTertiaryStyles,
  FirstLastStyles,
  Input,
} from '../auth/auth.styles';
import { Button } from '../components/Buttons';
import { GridAuth } from '../components/Grid/grid.style';
import { PrimaryText, Title } from '../components/Text';
import { useUser } from '../context/userContext';
import {
  ProfileStyles,
  ProfileForm,
  ProfileFormStyles,
  ProfileImageStyles,
  AvatarsStyles,
} from './profile.style';

export const Profile = () => {
  const { user } = useUser();

  if (!user) return <Redirect to='/home' />;

  const { firstName, lastName, nickname, email } = user;
  return (
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
              <Input placeholder='First Name' value={firstName} />
              <Input placeholder='Last Name' value={lastName} />
            </FirstLastStyles>
            <div>
              <Input placeholder='Email' width='100%' value={email} disabled />
            </div>
            <div>
              <Input placeholder='Nickname' width='100%' value={nickname} />
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
};
