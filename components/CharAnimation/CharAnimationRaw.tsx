import React from 'react';
import Animation from 'react-vivus';
import { guardRecoilDefaultValue, useLoadableValue } from '../../@recoil-utils';
import { stateCurrentChar } from '../../states';
import { ICharAnimationProps } from './ICharAnimationProps';

export const CharAnimationRaw = ({ className }: ICharAnimationProps) => {
  const char = useLoadableValue(stateCurrentChar);
  if (guardRecoilDefaultValue(char)) return <></>;
  if (char === '') return <></>;
  return (
    <Animation
      key={char}
      className={className}
      id="foo"
      option={{
        file: `/content/chars-write/heb/${char}.svg`,
        animTimingFunction: 'EASE',
        type: 'oneByOne',
        // eslint-disable-next-line no-console
        onReady: console.log,
      }}
      style={{ height: '200px', width: '200px' }}
      // eslint-disable-next-line no-console
      callback={console.log}
    />
  );
};
