/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
export const guardEnum = <T>(
  e: T
): ((token: unknown) => token is T[keyof T]) => {
  const keys = Object.keys(e).filter((k) => {
    return !/^\d/.test(k);
  });
  const values = keys.map((k) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (e as any)[k];
  });
  return (token: unknown): token is T[keyof T] => {
    return values.includes(token);
  };
};

/**
 * Guard which indicate whether a type has key
 * @param candidate the evaluating type
 */
export const isEnum = <T>(e: T): ((token: unknown) => token is T[keyof T]) =>
  guardEnum(e);
