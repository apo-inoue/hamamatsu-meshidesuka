import React, { useMemo } from 'react';
import { RestaurantState, RestaurantDispatch } from './type';
import { createCtx } from '../../helpers/createCtx';
import { useRestaurantActions } from './actions';

export const [
  useRestaurantState,
  RestaurantStateProvider,
] = createCtx<RestaurantState>();
export const [
  useRestaurantDispatch,
  RestaurantDispatchProvider,
] = createCtx<RestaurantDispatch>();

export const RestaurantProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useRestaurantActions();
  const [memorizedState, memorizedDispatch] = useMemo(() => [state, dispatch], [
    state,
    dispatch,
  ]);

  return (
    <RestaurantStateProvider value={memorizedState}>
      <RestaurantDispatchProvider value={memorizedDispatch}>
        {children}
      </RestaurantDispatchProvider>
    </RestaurantStateProvider>
  );
};
