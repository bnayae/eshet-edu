import { RecoilState, useRecoilStateLoadable } from 'recoil';
import { ILoadableState } from '.';

/**
 * Abstract the work with Recoil's loadable.
 * Return either the data or the loading information.
 * The return value can be guard by @see guardLoading
 */
export const useLoadableState = <T extends unknown>(
  originValue: RecoilState<T>
): ILoadableState<T> => {
  const [loadable, mutate] = useRecoilStateLoadable(originValue);

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  if (loadable.state !== 'hasValue') {
    return {
      isLoading,
      error,
    };
  }

  const data = loadable.contents;

  return { data, mutate };
};
