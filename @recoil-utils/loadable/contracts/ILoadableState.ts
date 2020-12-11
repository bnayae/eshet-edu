import { ILoading } from './ILoading';
import { IState } from './IState';

/**
 * Represent 2 possible state of loadable (data / loading)
 */
export type ILoadableState<T> = IState<T> | ILoading;
