import React from 'react';
import { RestaurantSuggestions } from './restaurantSuggestions';
import { useFetchRestaurantSuggestions } from '../../containers/api/useFetchRestaurantSuggestions';

type ApiCallSuggestionProps = {
  enabled: boolean;
};
export const ApiCallSuggestion: React.VFC<ApiCallSuggestionProps> = ({
  enabled,
}) => {
  const { data } = useFetchRestaurantSuggestions({ enabled });

  return <RestaurantSuggestions suggestions={data} />;
};
