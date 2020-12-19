import { atom } from 'recoil';

export const stateCurrentCharRevealed = atom<boolean>({
  key: 'state-current-char-revealed',
  default: false,
});
