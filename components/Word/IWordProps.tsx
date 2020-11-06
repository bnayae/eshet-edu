import { InteractionState } from '..';
import { ITextualProps } from '../../contracts';

export interface IWordProps extends ITextualProps {
  interactionState: InteractionState;
  onComplete: (index: number) => void;
}
