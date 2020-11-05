import React from 'react';
import { ITextualProps } from '../../contracts';

export const CharRaw = ({ text, className }: ITextualProps) => {
  // todo: selector of status: none, selected, checked
  // const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;
  return <div className={className}>{text}</div>;
};
