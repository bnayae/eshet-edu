/**
 * Guard for record
 * @param candidate the evaluating type
 */
export const guardArray = (candidate: unknown): candidate is [] => {
  return typeof candidate === 'object' && Array.isArray(candidate);
};
