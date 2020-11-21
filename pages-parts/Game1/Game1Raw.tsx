import React, { useMemo, useState } from 'react';
import { Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';

export const Game1Raw = ({ className }: IWithClassName) => {
  // const [state, setState] = useRecoilState(stateGame1);
  const [isChecked, setIsChecked] = useState(false);

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

  const current = items[0];

  const onComplete = () => {};

  return (
    <div className={className}>
      <div className="char">
        <button type="button" onClick={() => setIsChecked((prev) => !prev)}>
          Change
        </button>
        {/* <SvgLines
          animate={isChecked}
          duration={1500}
          playback="2 alternate-reverse both"
        >
          <svg viewBox="0 0 100 100">
            <path
              id="svg_2"
              d="m12.5,17.04375l70.5,59.95625"
              strokeWidth="5"
              stroke="#000"
              fill="none"
            />
            <path
              id="svg_3"
              d="m75.5,17.04375c6,22 -8,47 -8.5,46.95625"
              strokeWidth="5"
              stroke="#000"
              fill="none"
            />
            <path
              id="svg_4"
              d="m27.5,30.04375c0,0 -3,14 -3,43"
              strokeWidth="5"
              stroke="#000"
              fill="none"
            />
          </svg>
        </SvgLines> */}
      </div>
      <img className="img" src={`${current.basePath}${current.image}`} alt="" />
      <div className="text">
        <Sentence {...current} onComplete={onComplete} />
      </div>
    </div>
  );
};
