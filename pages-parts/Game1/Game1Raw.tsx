import React, { useEffect, useMemo, useState } from 'react';
import { useDeviceDetect } from '../../@responsive';
import { CharAnimation, Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';

export const Game1Raw = ({ className }: IWithClassName) => {
  // const [state, setState] = useRecoilState(stateGame1);
  // const [isChecked, setIsChecked] = useState(false);
  const [current, setCurrent] = useState<IUnit | undefined>();
  const { appendDeviceClass } = useDeviceDetect();

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
          <img
            className={appendDeviceClass('img')}
            src={`${current.basePath}${current.image}`}
            alt=""
          />
          <div className="text">
            <Sentence {...current} onComplete={chooseCurrent} />
          </div>
        </>
      )}
    </div>
  );
};
