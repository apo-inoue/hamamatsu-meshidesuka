import { QueryObserverResult, useQuery, UseQueryOptions } from 'react-query';
import { EntryCollection } from 'contentful';
import { client } from './contentful';

export type RestaurantListItem = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    lead: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export type RestaurantList = {
  items: RestaurantListItem[];
};

type UseFetchRestaurantList = (
  options?: UseQueryOptions<unknown, Error, RestaurantList>,
) => QueryObserverResult<RestaurantList, Error>;

export const useFetchRestaurantList: UseFetchRestaurantList = (options) => {
  const fetchAllRestaurants: () => Promise<
    EntryCollection<unknown>
  > = async () => {
    const res = await client.getEntries({ content_type: 'restaurant' });

    return res;
  };

  return useQuery('restaurant', fetchAllRestaurants, {
    onError: () => {
      throw new Error('レストラン一覧が読み込めません');
    },
    ...options,
  });
};
