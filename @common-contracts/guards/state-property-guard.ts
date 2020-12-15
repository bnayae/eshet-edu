/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const guardState = (candidate?: any): candidate is { state: any } =>
  candidate && candidate.state;

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasState = (candidate?: any): candidate is { state: any } =>
  guardState(candidate);
