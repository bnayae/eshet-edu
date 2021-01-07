import { ITextualUnit } from '.';

/**
 * represent a unit with textual and image
 */
export interface IUnit extends ITextualUnit {
  /**
   * image path
   */
  image: {
    path: string;
    images: string[];
  };
  basePath: string;
}
