import React, { useMemo } from 'react';
import { Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';

export const Game1Raw = ({ className }: IWithClassName) => {
  // const [state, setState] = useRecoilState(stateGame1);
  const items: IUnit[] = useMemo(
    () =>
      // todo: read from json / database
      ['החיפושית המופלאה'].map((t, i) => {
        return {
          spine: [i],
          text: t,
          img: 'content/alef-bet/ladybug/images/default.png',
        };
      }),
    []
  );

  const current = items[0];

  return (
    <div className={className}>
      <img className="img" src={current.img} alt="" />
      <div className="text">
        <Sentence {...current} />
      </div>
    </div>
  );
};
