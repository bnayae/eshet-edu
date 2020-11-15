import React, { useState } from 'react';
import { Word } from '..';
import { ITextualProps, ITextualUnit } from '../../contracts';
import { InteractionState } from '../InteractionState';

interface ISentenceProps extends ITextualProps {
  onComplete: () => void;
}

export const SentenceRaw = ({
  text,
  spine,
  basePath,
  className,
  onComplete,
}: ISentenceProps) => {
  const [selection, setSelection] = useState(0);

  const words: ITextualUnit[] = text.split(' ').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  const handleComplete = async (index: number) => {
    setSelection((prev) => prev + 1);
    if (index === words.length - 1) {
      onComplete();
    }
  };

  return (
    <div className={className}>
      {words.map((w, i) => {
        let state = InteractionState.selected;
        if (selection > i) state = InteractionState.completed;
        else if (selection < i) state = InteractionState.disable;
        return (
          <Word
            {...w}
            index={i}
            interactionState={state}
            onComplete={handleComplete}
            basePath={basePath}
          />
        );
      })}
    </div>
  );
};
