import { ITextualUnit } from '.';

/**
 * represent a unit with textual and image
 */
export interface IUnit extends ITextualUnit {
  /**
   * image path
   */
  img: string;
}
