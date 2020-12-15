/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const guardKeyOfString = (
  candidate?: any
): candidate is { key: string } =>
  candidate && candidate.key && typeof candidate.key === 'string';

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasKeyOfString = (candidate?: any): candidate is { key: string } =>
  guardKeyOfString(candidate);
