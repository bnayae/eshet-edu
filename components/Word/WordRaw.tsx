import React from 'react';
import { Char } from '..';
import { ITextualProps, ITextualUnit } from '../../contracts';

export const WordRaw = ({ text, spine, className }: ITextualProps) => {
  // todo: selector of status: none, selected, checked
  // const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

  const chars: ITextualUnit[] = text.split('').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  return (
    <div className={className}>
      {chars.map((c) => {
        return <Char {...c} />;
      })}
    </div>
  );
};
