import { QueryObserverResult, useQuery, UseQueryOptions } from 'react-query';
import { Entry } from 'contentful';
import { client } from './contentful';
import { delay } from './delay';

export type Image = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};

export type Suggestions = {
  fields: {
    images: Image[];
  };
};

type UseFetchRestaurantSuggestions = (
  options?: UseQueryOptions<unknown, Error, Suggestions>,
) => QueryObserverResult<Suggestions, Error>;

export const useFetchRestaurantSuggestions: UseFetchRestaurantSuggestions = (
  options,
) => {
  const fetchRestaurantSuggestions: () => Promise<
    Entry<unknown>
  > = async () => {
    const res = await client.getEntry('19GudcUn0bThkzoIa2i7T5');
    delay(6000);

    return res;
  };

  return useQuery('restaurantSuggestions', fetchRestaurantSuggestions, {
    onError: () => {
      throw new Error('レストランの提案が読み込めません');
    },
    ...options,
  });
};
