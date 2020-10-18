import React from 'react';
import { CharBlock } from '..';
import { ICharsProps } from './ICharsBlockProps';

export const CharsBlockRaw = ({ chars, className }: ICharsProps) => {
  return (
    <div className={className}>
      {chars.map((c, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CharBlock char={c} key={`${c}:${i}`} />
      ))}
    </div>
  );
};
