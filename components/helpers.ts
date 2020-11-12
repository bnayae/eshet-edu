export const delay = (seconds: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
