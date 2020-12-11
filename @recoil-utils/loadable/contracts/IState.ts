import { SetterOrUpdater } from 'recoil';

export type IState<T> = [data: T, mutate: SetterOrUpdater<T>];
