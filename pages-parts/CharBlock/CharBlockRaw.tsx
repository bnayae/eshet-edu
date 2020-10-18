import React from 'react';
import { IGame1Props } from './ICharBlockProps';

export const CharBlockRaw = ({ char: text, className }: IGame1Props) => {
  return <div className={className}>{text}</div>;
};
