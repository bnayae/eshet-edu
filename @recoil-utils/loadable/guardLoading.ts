/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoadableValue, ILoading } from '.';

export const guardLoading = <T extends unknown>(
  candidate: ILoadableValue<T>
): candidate is ILoading =>
  (candidate as any)?.isLoading || (candidate as any)?.error;
