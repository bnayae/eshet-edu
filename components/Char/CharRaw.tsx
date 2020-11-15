import React, { useEffect, useState } from 'react';
import { delay } from '../helpers';
import { InteractionState } from '../InteractionState';
import { ICharProps } from './ICharProps';

export const CharRaw = ({
  text,
  onExposed,
  selected,
  // index,
  className,
}: ICharProps) => {
  const [exposeAudio, setExposeAudio] = useState<HTMLAudioElement>();
  const [charAudio, setCharAudio] = useState<HTMLAudioElement>();
  const [effectAudio, setEffectAudio] = useState<HTMLAudioElement>();

  const [state, setState] = useState(
    selected ? InteractionState.selected : InteractionState.disable
  );
  const char = state === InteractionState.completed ? text : '';

  useEffect(() => {
    const exposeSound = new Audio('/content/sound/effects/effect-2.mp3');
    setExposeAudio(exposeSound);
    const charSound = new Audio(`/content/sound/alef-bet/${text}.mp3`);
    setCharAudio(charSound);
    const effectSound = new Audio('/content/sound/effects/effect-1.mp3');
    setEffectAudio(effectSound);
    if (selected)
      setState((prev) =>
        prev === InteractionState.disable ? InteractionState.selected : prev
      );
  }, [selected]);

  const onExpose = async () => {
    if (!selected) return;
    setState(InteractionState.completed);
    exposeAudio?.play();
    await delay(3.7);
    exposeAudio?.pause();
    charAudio?.play();
    await delay(3);

    effectAudio?.play();
    onExposed();
  };

  const cls = `${className} ${state}`;

  return (
    <div className={cls} onClick={onExpose}>
      {char}
    </div>
  );
};
