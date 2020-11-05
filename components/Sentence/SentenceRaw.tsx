import React from 'react';
import { Word } from '..';
import { ITextualProps, ITextualUnit } from '../../contracts';

export const SentenceRaw = ({ text, spine, className }: ITextualProps) => {
  // todo: selector of status: none, selected, checked
  // const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

  const words: ITextualUnit[] = text.split(' ').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  return (
    <div className={className}>
      {words.map((w) => {
        return <Word {...w} />;
      })}
    </div>
  );
};
