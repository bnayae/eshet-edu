import { RecoilValue } from 'recoil';
import { ILoadableValue } from '.';
import { useLoadableValue } from './useLoadableValue';

/**
 * Abstract the work with Recoil's loadable.
 * Return either the data or the loading information.
 * The return value can be guard by @see guardLoading
 */
export const useLoadableValueFamily = <
  T extends unknown,
  TParam extends unknown
>(
  origin: (param: TParam) => RecoilValue<T>,
  param: TParam
): ILoadableValue<T> => useLoadableValue(origin(param));
