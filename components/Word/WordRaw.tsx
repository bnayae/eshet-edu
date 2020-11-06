import React, { useState } from 'react';
import { Char, InteractionState } from '..';
import { ITextualUnit } from '../../contracts';
import { IWordProps } from './IWordProps';

export const WordRaw = ({
  text,
  spine,
  onComplete,
  interactionState,
  className,
}: IWordProps) => {
  const index = spine[spine.length - 1];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const chars: ITextualUnit[] = text.split('').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  const onCharSelection = () => {
    const nextIndex = selectedIndex + 1;
    setSelectedIndex(nextIndex);
    if (nextIndex === text.length) onComplete(index);
  };

  const cls = `${className} ${
    interactionState === InteractionState.completed ? 'completed' : ''
  }`;

  return (
    <div className={cls}>
      {chars.map((c, i) => {
        const selected =
          interactionState === InteractionState.selected && selectedIndex === i;
        return <Char {...c} selected={selected} onExposed={onCharSelection} />;
      })}
    </div>
  );
};
