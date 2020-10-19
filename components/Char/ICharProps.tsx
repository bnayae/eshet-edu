import { ITextCompletion } from '../../contracts';
import { IWithClassName } from '../../interfaces';

export interface ICharProps extends IWithClassName {
  char: string;
  index: number;
  state: ITextCompletion;
  onExpose: (index: number) => void;
}
