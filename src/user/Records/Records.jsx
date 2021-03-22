import React from 'react';
import { Redirect } from 'react-router-dom';
import { GridRecords, GridStyles } from '../../components/Grid';
import { PrimaryText } from '../../components/Text';
import { useRecords } from '../../context/recordsContext';
import { useUser } from '../../context/userContext';
import { Image, RecordImageStyles, RecordItem } from './records.style';

export const Records = () => {
  const {
    auth: { user },
  } = useUser();
  const { records } = useRecords();
  if (!user) return <Redirect to='/' />;

  return (
    <GridStyles>
      <PrimaryText weight='bold'>Dashboard</PrimaryText>
      <PrimaryText>Here you can find all your records.</PrimaryText>
      <GridRecords>
        {records.map(({ _id, artist, cover }) => (
          <RecordItem key={_id}>
            <RecordImageStyles>
              <Image src={cover} alt='album cover' />
            </RecordImageStyles>
            <PrimaryText fontSize='18px' weight='bold'>
              {artist}
            </PrimaryText>
          </RecordItem>
        ))}
      </GridRecords>
    </GridStyles>
  );
};
