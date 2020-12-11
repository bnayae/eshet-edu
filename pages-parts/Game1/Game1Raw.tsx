import React, { useMemo } from 'react';
import { CharAnimation, Sentence } from '../../components';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';

export const Game1Raw = ({ className }: IWithClassName) => {
  // const [state, setState] = useRecoilState(stateGame1);
  // const [isChecked, setIsChecked] = useState(false);

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
        <CharAnimation />
      </div>
      <img className="img" src={`${current.basePath}${current.image}`} alt="" />
      <div className="text">
        <Sentence {...current} onComplete={onComplete} />
      </div>
    </div>
  );
};
