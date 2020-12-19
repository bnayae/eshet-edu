import React, { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useDeviceDetect } from '../../@responsive';
import { CharAnimation, Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';
import { stateCurrentChar, stateSelectedSpine } from '../../states';
import { stateCurrentCharRevealed } from '../../states/stateCurrentCharRevealed';

export const Game1Raw = ({ className }: IWithClassName) => {
  const [current, setCurrent] = useState<IUnit | undefined>();
  const { appendDeviceClass } = useDeviceDetect();
  const setSelection = useSetRecoilState(stateSelectedSpine);
  const setRevealed = useSetRecoilState(stateCurrentCharRevealed);
  const setCurrentChar = useSetRecoilState(stateCurrentChar);

  const items: IUnit[] = useMemo(
    () =>
      // todo: read from json / database
      learnUnitIndex.map(({ text, image, basePath }, i) => {
        return {
          spine: [i],
          text,
          image,
          basePath,
        };
      }),
    []
  );

  const chooseCurrent = () => {
    const index = Math.floor(Math.random() * items.length);
    setSelection({ word: 0, char: 0 });
    setRevealed(false);
    setCurrentChar('');
    setCurrent(items[index]);
  };

  useEffect(() => {
    chooseCurrent();
  }, [items]);

  return (
    <div className={appendDeviceClass(className)}>
      {current && (
        <>
          <div className="char">
            <CharAnimation />
          </div>
          <div className={appendDeviceClass('img-area')}>
            <img
              className={appendDeviceClass('img')}
              src={`${current.basePath}${current.image}`}
              alt=""
            />
            {/* <h1>{JSON.stringify(selection)}</h1> */}
          </div>
          <div className="text">
            <Sentence {...current} onComplete={chooseCurrent} />
          </div>
        </>
      )}
    </div>
  );
};
