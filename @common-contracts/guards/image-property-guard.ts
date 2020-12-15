/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
export const hasImageOfString = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  candidate?: any
): candidate is { image: string } =>
  candidate && candidate.image && typeof candidate.image === 'string';

// todo: [bnaya 2020-09] add hasImageOfJsx with Jsx test // && typeof candidate.image === 'Jsx.Element'

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasImage = (candidate?: any): candidate is { image: any } =>
  candidate && candidate.image;
