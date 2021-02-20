import { useImmer } from 'use-immer';
import { initialState } from './initialState';
import { RestaurantState, RestaurantDispatch } from './type';

type RestaurantActions = () => [RestaurantState, RestaurantDispatch];

export const useRestaurantActions: RestaurantActions = () => {
  const [state, setState] = useImmer<RestaurantState>(initialState);
  const mountInitStateHandler = (initState: RestaurantState) => {
    setState(() => initState);
  };

  const dispatch = {
    mountInitStateHandler,
  };

  return [state, dispatch];
};
