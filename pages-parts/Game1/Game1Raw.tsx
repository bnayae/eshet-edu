import React, { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useDeviceDetect } from '../../@responsive';
import { DeviceType } from '../../@responsive/DeviceType';
import { CharAnimation, Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';
import { stateCurrentChar, stateSelectedSpine } from '../../states';
import { stateCurrentCharRevealed } from '../../states/stateCurrentCharRevealed';

export const Game1Raw = ({ className }: IWithClassName) => {
  const [current, setCurrent] = useState<IUnit | undefined>();
  // const [index, setIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [image, setImage] = useState('');
  const { appendDeviceClass, deviceType } = useDeviceDetect();
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
    let index = 0;
    do {
      index = Math.floor((Math.random() * items.length * 100) % items.length);
    } while (history.includes(index));
    setHistory((prev) => {
      if (prev.length < 5) return [...prev, index];
      const [, ...tail] = prev;
      return [...tail, index];
    });

    setSelection({ word: 0, char: 0 });
    setRevealed(false);
    setCurrentChar('');
    const cur = items[index];
    setCurrent(cur);

    const images = cur?.image?.images ?? [];
    const idx = Math.floor(Math.random() * images.length * 100) % images.length;
    setImage(`${cur?.basePath}${cur?.image.path}/${images[idx]}`);
  };

  useEffect(() => {
    chooseCurrent();
  }, [items]);

  return (
    <div className={appendDeviceClass(className)}>
      {current && (
        <>
          <div className={appendDeviceClass('char')}>
            {deviceType === DeviceType.mobile && <CharAnimation />}
          </div>
          <div className={appendDeviceClass('img-area')}>
            {process.env.NODE_ENV === 'development' && (
              <button type="button" onClick={() => chooseCurrent()}>
                next
              </button>
            )}
            {deviceType === DeviceType.browser && <CharAnimation />}
            <img className={appendDeviceClass('img')} src={image} alt="" />
          </div>
          <div className={appendDeviceClass('text')}>
            <Sentence {...current} onComplete={chooseCurrent} />
          </div>
        </>
      )}
    </div>
  );
};
