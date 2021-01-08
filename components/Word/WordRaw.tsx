import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Char, InteractionState } from '..';
import { ITextualUnit } from '../../contracts';
import { stateSelectedSpine } from '../../states';
import { stateCurrentCharRevealed } from '../../states/stateCurrentCharRevealed';
import { delay } from '../helpers';
import { IWordProps } from './IWordProps';

export const WordRaw = ({
  index,
  text,
  spine,
  onComplete,
  interactionState,
  basePath,
  className,
}: IWordProps) => {
  const [selection, setSelection] = useRecoilState(stateSelectedSpine);
  const setRevealed = useSetRecoilState(stateCurrentCharRevealed);

  const [exposeAudio, setExposeAudio] = useState<HTMLAudioElement>();
  const [greetAudio, setGreetAudio] = useState<HTMLAudioElement>();
  const [encourageAudio, setEncourageAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const exposeSound = new Audio(`${basePath}/sounds/${index}.mp3`);
    setExposeAudio(exposeSound);
    const greatSound = new Audio('/content/sound/effects/effect-5.mp3');
    setGreetAudio(greatSound);
    const encourageSound = new Audio(`/content/sound/feedback/encourage.mp3`);
    setEncourageAudio(encourageSound);
  }, []);

  const chars: ITextualUnit[] = text.split('').map((t, i) => {
    return {
      spine: [...spine, i],
      text: t,
    };
  });

  const onCharSelection = async () => {
    const nextIndex = selection.char + 1;
    setSelection((prv) => {
      return { word: prv.word, char: nextIndex };
    });
    setRevealed(false);
    if (nextIndex === text.length) {
      exposeAudio?.play();
      await delay(2);
      exposeAudio?.pause();
      encourageAudio?.play();
      // await delay(2);
      // encourageAudio?.pause();
      // greetAudio?.play();
      // await delay(4);
      // greetAudio?.pause();
      onComplete(index);
    }
  };

  const cls = `${className} ${
    interactionState === InteractionState.completed ? 'completed' : ''
  }`;

  return (
    <div className={cls}>
      {chars.map((c, i) => {
        const id = { word: index, char: i };
        return (
          <Char
            {...c}
            index={i}
            onExposed={onCharSelection}
            basePath={basePath}
            id={id}
          />
        );
      })}
    </div>
  );
};
