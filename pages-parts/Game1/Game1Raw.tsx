import React from 'react';
import { IGame1Props } from './IGame1Props';

export const Game1Raw = ({ text, img, className }: IGame1Props) => {
  return (
    <div className={className}>
      <img className="img" src={img} alt="" />
    </div>
  );
};
