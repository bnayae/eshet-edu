import React, { useEffect, useState } from 'react';
import { Char, InteractionState } from '..';
import { ITextualUnit } from '../../contracts';
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
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    const nextIndex = selectedIndex + 1;
    setSelectedIndex(nextIndex);
    if (nextIndex === text.length) {
      exposeAudio?.play();
      await delay(4);
      exposeAudio?.pause();
      encourageAudio?.play();
      await delay(3);
      encourageAudio?.pause();
      greetAudio?.play();
      await delay(5);
      greetAudio?.pause();
      onComplete(index);
    }
  };

  const cls = `${className} ${
    interactionState === InteractionState.completed ? 'completed' : ''
  }`;

  return (
    <div className={cls}>
      {chars.map((c, i) => {
        const selected =
          interactionState === InteractionState.selected && selectedIndex === i;
        return (
          <Char
            {...c}
            index={i}
            selected={selected}
            onExposed={onCharSelection}
            basePath={basePath}
          />
        );
      })}
    </div>
  );
};
