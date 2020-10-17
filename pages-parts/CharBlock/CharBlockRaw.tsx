import React from 'react';
import { IGame1Props } from './ICharBlockProps';

export const CharBlockRaw = ({ text, className }: IGame1Props) => {
  return <div className={className}>{text}</div>;
};
