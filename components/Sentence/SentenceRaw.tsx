import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Word } from '..';
import { ITextualProps, ITextualUnit } from '../../contracts';
import { stateSelectedSpine } from '../../states';
import { stateCurrentCharRevealed } from '../../states/stateCurrentCharRevealed';
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
  const [selection, setSelection] = useRecoilState(stateSelectedSpine);
  const setRevealed = useSetRecoilState(stateCurrentCharRevealed);

  const words: ITextualUnit[] = text.split(' ').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  const handleComplete = async (index: number) => {
    setSelection({ word: 0, char: 0 });
    if (index === words.length - 1) {
      onComplete();
      setRevealed(false);
    } else {
      setSelection((prev) => {
        return { word: prev.word + 1, char: 0 };
      });
    }
  };

  return (
    <div className={className}>
      {words.map((w, i) => {
        let state = InteractionState.selected;
        if (selection.word > i) state = InteractionState.completed;
        else if (selection.word < i) state = InteractionState.disable;
        return (
          <>
            {/* <h1>{w.text}</h1> */}
            <Word
              {...w}
              index={i}
              interactionState={state}
              onComplete={handleComplete}
              basePath={basePath}
            />
          </>
        );
      })}
    </div>
  );
};
