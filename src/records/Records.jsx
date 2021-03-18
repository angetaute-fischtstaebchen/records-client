import React from 'react';
import { Redirect } from 'react-router-dom';
import { GridRecords, GridStyles } from '../components/Grid';
import { PrimaryText } from '../components/Text';
import { useRecords } from '../context/recordsContext';
import { useUser } from '../context/userContext';
import { Image, RecordImageStyles, RecordItem } from './records.style';

export const Records = () => {
  const { user } = useUser();
  const { records } = useRecords();
  if (!user) return <Redirect to='/home' />;

  return (
    <GridStyles>
      <PrimaryText weight='bold'>Dashboard</PrimaryText>
      <PrimaryText>Here you can find all your records.</PrimaryText>
      <GridRecords>
        {records.map(({ _id, title, cover }) => (
          <RecordItem key={_id}>
            <RecordImageStyles>
              <Image src={cover} alt='album cover' />
            </RecordImageStyles>
            <PrimaryText weight='bold'>{title}</PrimaryText>
          </RecordItem>
        ))}
      </GridRecords>
    </GridStyles>
  );
};
