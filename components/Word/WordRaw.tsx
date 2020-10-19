import React from 'react';
import { Char } from '..';
import { IWordProps } from './IWordProps';

export const WordRaw = ({
  index,
  chars: word,
  className,
  state,
}: IWordProps) => {
  const selected = state.selection === index;
  const exposed = state.exposed.has(index);
  const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

  return (
    <div className={cls}>
      {word.map((c, i) => {
        const id = `${c}:${i}`;
        return (
          <Char
            index={i}
            char={c}
            key={id}
            state={state.subStates[index]}
            onExpose={() => console.log('')}
          />
        );
      })}
    </div>
  );
};
