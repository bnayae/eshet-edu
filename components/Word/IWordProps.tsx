import { ITextCompletion } from '../../contracts';
import { IWithClassName } from '../../interfaces';

export interface IWordProps extends IWithClassName {
  index: number;
  chars: string[];
  state: ITextCompletion;
  onExpose: (index: number) => void;
}
