import React from 'react';
import { CharsBlock } from '../CharsBlock';
import { IGame1Props } from './IGame1Props';

export const Game1Raw = ({ words, img, className }: IGame1Props) => {
  return (
    <div className={className}>
      <img className="img" src={img} alt="" />
      <div className="words">
        {words.map((w) => {
          const chars = w.split('');
          return <CharsBlock key={w} chars={chars} />;
        })}
      </div>
    </div>
  );
};
