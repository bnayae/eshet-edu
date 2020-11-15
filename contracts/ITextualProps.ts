import { ITextualUnit } from '.';
import { IWithClassName } from '../interfaces';

/**
 * represent a textual unit
 */
export interface ITextualProps extends ITextualUnit, IWithClassName {
  basePath: string;
}
