import React from 'react';
import { IWithClassName } from '../../interfaces';
import { Game1 } from '../Game1';

export const HomePageRaw = ({ className }: IWithClassName) => {
  return (
    <div className={className}>
      <Game1 />
    </div>
  );
};
