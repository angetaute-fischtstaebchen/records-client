import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FirstLastStyles } from '../../auth/auth.styles';
import { Button, ButtonTertiaryStyles } from '../../components/Buttons';
import { GridAuth } from '../../components/Grid/grid.style';
import { Input, LockInput } from '../../components/Input';
import { ErrorMessage, PrimaryText, Title } from '../../components/Text';
import { useUser } from '../../context/userContext';
import { updateUser } from '../../helpers/apiCalls';
import {
  ProfileStyles,
  ProfileForm,
  ProfileFormStyles,
  ProfileImageStyles,
  Avatar,
  AvatarsStyles,
  SelectedAvatar,
  TextStyles,
  AvatarsImagesStyles,
  AvatarsOptionsStyles,
  LockIcon,
  LockedInputStyles,
} from './profile.style';

export const Profile = () => {
  const {
    auth: { user, error },
    dispatchUser,
  } = useUser();

  const [currentAvatar, setCurrentAvatar] = useState(user?.avatar);

  const [profileUpdated, setProfileUpdated] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    nickname: user?.nickname,
    avatar: currentAvatar,
  });

  if (!user) return <Redirect to='/home' />;

  const { lastName, email, _id: id } = user;

  const handleInputs = (e) =>
    setProfileUpdated({ ...profileUpdated, [e.target.name]: e.target.value });

  const handleUpdateUser = (e) => {
    e.preventDefault();

    updateUser({ profileUpdated, id, dispatchUser });
  };

  const onSelectAvatar = (e) => {
    setCurrentAvatar(`${user.baseAvatarUrl}/${e.target.name}.png`);
    setProfileUpdated({
      ...profileUpdated,
      avatar: `${user.baseAvatarUrl}/${e.target.name}.png`,
    });
  };

  return (
    <ProfileStyles>
      <GridAuth height='100%'>
        <ProfileFormStyles>
          <div>
            <Title>Your profile, Mr. {lastName}</Title>
            <PrimaryText>
              Don&apos;t forget to click the save button <br /> Before we are
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
            <LockedInputStyles>
              <LockInput
                placeholder='Email'
                width='100%'
                value={email}
                disabled
              />
              <LockIcon />
            </LockedInputStyles>
            <div>
              <Input
                name='nickname'
                placeholder='Nickname'
                width='100%'
                value={profileUpdated.nickname}
                onChange={handleInputs}
              />
            </div>
            {error && <ErrorMessage>{error}</ErrorMessage>}
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
              <SelectedAvatar name='selectedAvatar' avatar={currentAvatar} />
              <AvatarsOptionsStyles>
                <Avatar
                  name='dj'
                  avatar={`${user.baseAvatarUrl}/dj.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='dog'
                  avatar={`${user.baseAvatarUrl}/dog.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='watch'
                  avatar={`${user.baseAvatarUrl}/watch.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='train'
                  avatar={`${user.baseAvatarUrl}/train.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='whatever'
                  avatar={`${user.baseAvatarUrl}/whatever.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='priestess'
                  avatar={`${user.baseAvatarUrl}/priestess.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='ghost'
                  avatar={`${user.baseAvatarUrl}/ghost.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='dude'
                  avatar={`${user.baseAvatarUrl}/dude.png`}
                  onClick={onSelectAvatar}
                />
                <Avatar
                  name='pig'
                  avatar={`${user.baseAvatarUrl}/pig.png`}
                  onClick={onSelectAvatar}
                />
              </AvatarsOptionsStyles>
            </AvatarsImagesStyles>
          </AvatarsStyles>
        </ProfileImageStyles>
      </GridAuth>
    </ProfileStyles>
  );
};
