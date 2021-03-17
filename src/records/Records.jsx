import React from 'react';
import { GridRecords, GridStyles } from '../components/Grid';
import { PrimaryText } from '../components/Text';
import { useRecords } from '../context/recordsContext';

export const Records = () => {
  const { records } = useRecords();
  return (
    <GridStyles>
      <PrimaryText weight='bold'>Dashboard</PrimaryText>
      <PrimaryText>Here you can find all your records.</PrimaryText>
      <GridRecords>
        {records.map((record) => (
          <div key={record.title}>{record.title}</div>
        ))}
      </GridRecords>
    </GridStyles>
  );
};
