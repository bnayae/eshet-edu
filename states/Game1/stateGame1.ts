import { atom } from 'recoil';
import { IGame1State } from '.';

export const stateGame1 = atom<IGame1State>({
  key: 'game1', // unique ID (with respect to other atoms/selectors)
  default: { words: ['החיפושית', 'המופלאה'] }, // default value (aka initial value)
});
