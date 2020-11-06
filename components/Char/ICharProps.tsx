import { ITextualProps } from '../../contracts';

// todo: selector of status: none, selected, checked
// const cls = `${className} ${selected && 'selected'} ${exposed && 'exposed'}`;

export interface ICharProps extends ITextualProps {
  selected: boolean;
  onExposed: () => void;
}
