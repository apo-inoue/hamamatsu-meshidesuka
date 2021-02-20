import React from 'react';
import { useFetchRestaurantList } from '../../containers/api/useFetchRestaurantList';
import { RestaurantCards } from './restaurantCards/index';

export const ApiCall: React.VFC = () => {
  const { data } = useFetchRestaurantList();
  console.log(data);

  return <RestaurantCards restaurantList={data} />;
};
