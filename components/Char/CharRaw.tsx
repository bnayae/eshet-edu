import React from 'react';
import { ICharProps } from './ICharProps';

export const CharRaw = ({
  index,
  char,
  state,
  onExpose,
  className,
}: ICharProps) => {
  const selected = state.selection === index;
  const exposed = state.exposed.has(index);
  const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;
  return (
    <div className={cls} onClick={() => onExpose(index)}>
      {char}
    </div>
  );
};
