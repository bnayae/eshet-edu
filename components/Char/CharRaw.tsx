import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { InteractionState } from '..';
import { stateCurrentChar, stateSelectedSpine } from '../../states';
import { stateCurrentCharRevealed } from '../../states/stateCurrentCharRevealed';
import { delay } from '../helpers';
import { ICharProps } from './ICharProps';

export const CharRaw = ({ id, text, onExposed, className }: ICharProps) => {
  const [exposeAudio, setExposeAudio] = useState<HTMLAudioElement>();
  const [charAudio, setCharAudio] = useState<HTMLAudioElement>();
  const [effectAudio, setEffectAudio] = useState<HTMLAudioElement>();
  const selection = useRecoilValue(stateSelectedSpine);
  const [revealed, setRevealed] = useRecoilState(stateCurrentCharRevealed);

  const globalCharSetter = useSetRecoilState(stateCurrentChar);

  let state: InteractionState;
  if (selection.word > id.word) state = InteractionState.completed;
  else if (selection.word === id.word && selection.char > id.char)
    state = InteractionState.completed;
  else if (selection.word < id.word) state = InteractionState.disable;
  else if (selection.word === id.word && selection.char < id.char)
    state = InteractionState.disable;
  else if (revealed) state = InteractionState.selected;
  else state = InteractionState.current;

  useEffect(() => {
    const charSound = new Audio(`/content/sound/alef-bet/${text}.mp3`);
    setCharAudio(charSound);
  }, [text]);

  useEffect(() => {
    const exposeSound = new Audio('/content/sound/effects/effect-2.mp3');
    setExposeAudio(exposeSound);
    const effectSound = new Audio('/content/sound/effects/effect-1.mp3');
    setEffectAudio(effectSound);
  }, []);

  const onExpose = async () => {
    if (state !== InteractionState.current) return;
    setRevealed(true);
    globalCharSetter('');
    exposeAudio?.play();
    await delay(2.7);
    globalCharSetter(text);

    exposeAudio?.pause();
    charAudio?.play();
    await delay(2);

    // effectAudio?.play();
    onExposed();
  };

  const char =
    state === InteractionState.selected || state === InteractionState.completed
      ? text
      : '';

  const cls = `${className} ${state}`;

  return (
    <div className={cls} onClick={onExpose}>
      {char}
    </div>
  );
};
