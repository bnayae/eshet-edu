/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoading } from '.';
import { ILoadableValue } from './ILoadableValue';

export const guardLoading = <T extends unknown>(
  candidate: ILoadableValue<T>
): candidate is ILoading =>
  (candidate as any)?.isLoading || (candidate as any)?.error;
