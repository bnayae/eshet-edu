import React from 'react';
import { useRecoilState } from 'recoil';
import { Word } from '../../components';
import { stateGame1 } from '../../states';
import { IGame1Props } from './IGame1Props';

export const Game1Raw = ({ words, img, className }: IGame1Props) => {
  const [state, setState] = useRecoilState(stateGame1);
  return (
    <div className={className}>
      <img className="img" src={img} alt="" />
      <div className="words">
        {words.map((w, i) => {
          const chars = w.split('');
          return (
            <Word
              state={state.words[0]}
              key={w}
              chars={chars}
              index={i}
              onExpose={() => setState(state)}
            />
          );
        })}
      </div>
    </div>
  );
};
