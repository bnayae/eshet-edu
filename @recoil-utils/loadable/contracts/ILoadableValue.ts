import { ILoading } from '.';

/**
 * Represent 2 possible state of loadable (data / loading)
 */
export type ILoadableValue<T> = T | ILoading;
