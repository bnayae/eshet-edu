import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { delay } from '../helpers';
import { InteractionState } from '../InteractionState';
import { ICharProps } from './ICharProps';

export const CharRaw = ({
  text,
  onExposed,
  selected,
  // index
  className,
}: ICharProps) => {
  const [play] = useSound(`/content/sound/alef-bet/${text}.mp3`);
  // const [effect] = useSound(
  //   `/content/sound/effects/effect-${index % 10)}.mp3`
  // );

  const [state, setState] = useState(
    selected ? InteractionState.selected : InteractionState.disable
  );
  const char = state === InteractionState.completed ? text : '';

  useEffect(() => {
    if (selected)
      setState((prev) =>
        prev === InteractionState.disable ? InteractionState.selected : prev
      );
  }, [selected]);

  const onExpose = async () => {
    if (!selected) return;
    play();
    setState(InteractionState.completed);
    await delay(3);
    // effect();
    onExposed();
  };

  const cls = `${className} ${state}`;

  return (
    <div className={cls} onClick={onExpose}>
      {char}
    </div>
  );
};
