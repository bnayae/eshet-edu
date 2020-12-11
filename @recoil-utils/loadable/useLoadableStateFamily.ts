import { RecoilState } from 'recoil';
import { ILoadableState, useLoadableState } from '.';

/**
 * Abstract the work with Recoil's loadable.
 * Return either the data or the loading information.
 * The return value can be guard by @see guardLoading
 */
export const useLoadableStateFamily = <
  T extends unknown,
  TParam extends unknown
>(
  origin: (param: TParam) => RecoilState<T>,
  param: TParam
): ILoadableState<T> => useLoadableState(origin(param));
