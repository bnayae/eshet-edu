import { InteractionState } from '..';
import { ITextualProps } from '../../contracts';

export interface IWordProps extends ITextualProps {
  index: number;
  interactionState: InteractionState;
  onComplete: (index: number) => void;
}
