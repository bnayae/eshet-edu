import React, { useEffect, useState } from 'react';
import { delay } from '../helpers';
import { InteractionState } from '../InteractionState';
import { ICharProps } from './ICharProps';

export const CharRaw = ({
  text,
  onExposed,
  selected,
  className,
}: ICharProps) => {
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
    setState(InteractionState.completed);
    await delay(3);
    onExposed();
  };

  const cls = `${className} ${state}`;

  return (
    <div className={cls} onClick={onExpose}>
      {char}
    </div>
  );
};
