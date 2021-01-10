import { useRouter } from 'next/dist/client/router';
import React, { useMemo } from 'react';
import { useDeviceDetect } from '../../@responsive';
import { IUnit } from '../../contracts';
import { IWithClassName } from '../../interfaces';
import { learnUnitIndex } from '../../proxies';

export const Game1AllRaw = ({ className }: IWithClassName) => {
  const { appendDeviceClass } = useDeviceDetect();

  const router = useRouter();

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

  const onSelect = (index: number) => {
    router.push(`/game1?index=${index}`);
  };

  return (
    <div className={appendDeviceClass(className)}>
      {items.map((item, i) => {
        const imageName = item.image.images[0];
        const image = `${item.basePath}${item.image.path}/${imageName}`;
        return (
          <div
            key={image}
            className={appendDeviceClass('img-area')}
            onClick={() => onSelect(i)}
          >
            <img className={appendDeviceClass('img')} src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};
