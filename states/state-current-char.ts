import { atom } from 'recoil';

export const stateCurrentChar = atom<string>({
  key: 'state-current-char',
  default: '',
});
