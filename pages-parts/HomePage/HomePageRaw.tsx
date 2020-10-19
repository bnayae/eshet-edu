import React from 'react';
import { IWithClassName } from '../../interfaces';
import { Game1 } from '../Game1';

interface ICharBlockProps extends IWithClassName {
  text: string;
}

export const CharBlockRaw = ({ text, className }: ICharBlockProps) => {
  console.log(text);
  return (
    <div className={className}>
      <Game1
        words={['החיפושית', 'המופלאה']}
        img="/content/alef-bet/ladybug/images/default.png"
      />
    </div>
  );
};
