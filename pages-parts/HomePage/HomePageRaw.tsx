import React from 'react';
import { IWithClassName } from '../../interfaces';
import { Game1 } from '../Game1';

interface ICharBlockProps extends IWithClassName {
  text: string;
}

export const HomePageRaw = ({ className }: ICharBlockProps) => {
  return (
    <div className={className}>
      <Game1 />
    </div>
  );
};
