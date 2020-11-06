import React, { useState } from 'react';
import { ITextualProps } from '../../contracts';
import { CharState } from './CharState';

// todo: selector of status: none, selected, checked
// const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

export const CharRaw = ({ text, className }: ITextualProps) => {
  const [state, setState] = useState(CharState.selected);

  const char = state === CharState.exposed ? text : '';

  const onExpose = () => setState(CharState.exposed);

  return (
    <div className={className} onClick={onExpose}>
      {char}
    </div>
  );
};
