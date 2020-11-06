import React, { useState } from 'react';
import { Word } from '..';
import { ITextualProps, ITextualUnit } from '../../contracts';
import { InteractionState } from '../InteractionState';

export const SentenceRaw = ({ text, spine, className }: ITextualProps) => {
  const [selection, setSelection] = useState(0);

  const words: ITextualUnit[] = text.split(' ').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  const onComplete = (index: number) => {
    setSelection((prev) => prev + 1);
  };

  return (
    <div className={className}>
      {words.map((w, i) => {
        let state = InteractionState.selected;
        if (selection > i) state = InteractionState.completed;
        else if (selection < i) state = InteractionState.disable;
        return <Word {...w} interactionState={state} onComplete={onComplete} />;
      })}
    </div>
  );
};
