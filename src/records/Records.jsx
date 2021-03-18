import React from 'react';
import styled from 'styled-components';
import { GridRecords, GridStyles } from '../components/Grid';
import { PrimaryText } from '../components/Text';
import { useRecords } from '../context/recordsContext';

const RecordItem = styled.div`
  opacity: 1;
`;

const RecordImageStyles = styled.div`
  box-shadow: 0px 0px 10px #00000041;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Records = () => {
  const { records } = useRecords();

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
            <PrimaryText>{title}</PrimaryText>
          </RecordItem>
        ))}
      </GridRecords>
    </GridStyles>
  );
};
