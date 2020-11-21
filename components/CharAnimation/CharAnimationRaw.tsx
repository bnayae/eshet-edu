import React from 'react';
import Animation from 'react-vivus';
import { ICharAnimationProps } from './ICharAnimationProps';

export const CharAnimationRaw = ({ char, className }: ICharAnimationProps) => (
  <Animation
    className={className}
    id="foo"
    option={{
      file: `/content/chars-write/heb/${char}.svg`,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      // eslint-disable-next-line no-console
      onReady: console.log,
    }}
    style={{ height: '100px', width: '100px' }}
    // eslint-disable-next-line no-console
    callback={console.log}
  />
);
