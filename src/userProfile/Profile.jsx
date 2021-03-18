import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import {
  ButtonTertiaryStyles,
  FirstLastStyles,
  Input,
} from '../auth/auth.styles';
import { Button } from '../components/Buttons';
import { GridAuth } from '../components/Grid/grid.style';

import { PrimaryText, Title } from '../components/Text';
import { useUser } from '../context/userContext';
import { updateUser } from '../helpers/apiCalls';
import {
  ProfileStyles,
  ProfileForm,
  ProfileFormStyles,
  ProfileImageStyles,
  Avatar,
  AvatarsStyles,
  SelectedAvatar,
  TextStyles,
} from './profile.style';
import {
  dj,
  dog,
  dude,
  ghost,
  pig,
  priestess,
  train,
  watch,
  whatever,
} from '../components/imgs';

const AvatarsImagesStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AvatarsOptionsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 280px;
`;

export const Profile = () => {
  const { user, dispatchUser } = useUser();

  const [profileUpdated, setProfileUpdated] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    nickname: user?.nickname,
  });

  if (!user) return <Redirect to='/home' />;

  const { lastName, email, _id: id } = user;
  console.log(user);
  const handleInputs = (e) =>
    setProfileUpdated({ ...profileUpdated, [e.target.name]: e.target.value });

  const handleUpdateUser = (e) => {
    e.preventDefault();

    updateUser({ profileUpdated, id, dispatchUser });
  };

  return (
    <ProfileStyles>
      <GridAuth height='100%'>
        <ProfileFormStyles>
          <div>
            <Title>Your profile, Mr. {lastName}</Title>
            <PrimaryText>
              Don&apos;t forgget to click the save button <br /> Before we are
              gone!
            </PrimaryText>
          </div>
          <ProfileForm onSubmit={handleUpdateUser}>
            <FirstLastStyles>
              <Input
                name='firstName'
                placeholder='First Name'
                value={profileUpdated.firstName}
                onChange={handleInputs}
              />
              <Input
                name='lastName'
                placeholder='Last Name'
                value={profileUpdated.lastName}
                onChange={handleInputs}
              />
            </FirstLastStyles>
            <div>
              <Input placeholder='Email' width='100%' value={email} disabled />
            </div>
            <div>
              <Input
                name='nickname'
                placeholder='Nickname'
                width='100%'
                value={profileUpdated.nickname}
                onChange={handleInputs}
              />
            </div>
            <ButtonTertiaryStyles>
              <Button secondary type='submit'>
                Save
              </Button>
            </ButtonTertiaryStyles>
          </ProfileForm>
        </ProfileFormStyles>
        <ProfileImageStyles>
          <AvatarsStyles>
            <TextStyles>
              <Title>You can also update your supa kewl profile pic</Title>
              <PrimaryText>
                omg. These are so cool. tenk u Gabriel hollington
              </PrimaryText>
            </TextStyles>
            <AvatarsImagesStyles>
              <SelectedAvatar avatar={dog} />
              <AvatarsOptionsStyles>
                <Avatar avatar={dj} />
                <Avatar avatar={dog} />
                <Avatar avatar={watch} />
                <Avatar avatar={train} />
                <Avatar avatar={whatever} />
                <Avatar avatar={priestess} />
                <Avatar avatar={ghost} />
                <Avatar avatar={dude} />
                <Avatar avatar={pig} />
              </AvatarsOptionsStyles>
            </AvatarsImagesStyles>
          </AvatarsStyles>
        </ProfileImageStyles>
      </GridAuth>
    </ProfileStyles>
  );
};
