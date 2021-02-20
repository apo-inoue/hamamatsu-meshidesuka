import { useQuery, UseQueryOptions, QueryObserverResult } from 'react-query';
import { Entry } from 'contentful';
import { client } from './contentful';

export type GalleryItem = {
  fields: {
    file: {
      title: string;
      url: string;
    };
  };
};

export type RestaurantDetail = {
  fields: {
    title: string;
    report: string;
    image: {
      fields: {
        file: {
          title: string;
          url: string;
        };
      };
    };
    gallery: GalleryItem[];
  };
};

type UseFetchRestaurantDetail = (
  restaurantId: string,
  options?: UseQueryOptions<unknown, Error, RestaurantDetail>,
) => QueryObserverResult<RestaurantDetail, Error>;

export const useFetchRestaurantDetail: UseFetchRestaurantDetail = (
  restaurantId,
  options,
) => {
  const fetchRestaurantDetail: () => Promise<Entry<unknown>> = async () => {
    const res = await client.getEntry(restaurantId);

    return res;
  };

  return useQuery(['restaurantDetail', restaurantId], fetchRestaurantDetail, {
    onError: () => {
      throw new Error('レストラン詳細が読み込めません');
    },
    ...options,
  });
};
