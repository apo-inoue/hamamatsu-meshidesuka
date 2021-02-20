/* eslint-disable @typescript-eslint/no-explicit-any */
export const delay = (time: number) => (result: () => any): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });
