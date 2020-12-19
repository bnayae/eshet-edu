import { atom } from 'recoil';
import { ILeveledId } from '.';

export const stateSelectedSpine = atom<ILeveledId>({
  key: 'state-selected-spine',
  default: { word: 0, char: 0 },
});
