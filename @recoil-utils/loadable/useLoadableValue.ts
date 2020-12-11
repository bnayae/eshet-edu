import { RecoilValue, useRecoilValueLoadable } from 'recoil';
import { ILoadableValue } from '.';

/**
 * Abstract the work with Recoil's loadable.
 * Return either the data or the loading information.
 * The return value can be guard by @see guardLoading
 */
export const useLoadableValue = <T extends unknown>(
  originValue: RecoilValue<T>
): ILoadableValue<T> => {
  const loadable = useRecoilValueLoadable(originValue);

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  if (loadable.state !== 'hasValue') {
    return {
      isLoading,
      error,
    };
  }

  const data = loadable.contents;

  return data;
};
