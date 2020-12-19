import { ITextualProps } from '../../contracts';
import { ILeveledId } from '../../states';

// todo: selector of status: none, selected, checked
// const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

export interface ICharProps extends ITextualProps {
  index: number;
  onExposed: () => void;
  id: ILeveledId;
}
