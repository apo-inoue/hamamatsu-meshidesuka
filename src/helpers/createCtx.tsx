/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useContext } from 'react';

// NOTE: https://github.com/typescript-cheatsheets/react
// eslint-disable-next-line @typescript-eslint/ban-types
export function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value');

    return c;
  }

  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
