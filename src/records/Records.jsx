import React from 'react';
import { GridRecords, GridStyles } from '../components/Grid';
import { PrimaryText } from '../components/Text';

export const Records = () => (
  <GridStyles>
    <PrimaryText weight='bold'>Dashboard</PrimaryText>
    <PrimaryText>Here you can find all your records.</PrimaryText>
    <GridRecords>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </GridRecords>
  </GridStyles>
);
