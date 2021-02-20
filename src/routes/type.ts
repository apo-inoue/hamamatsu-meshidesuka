export const ROUTE_PATHS = {
  レストラン一覧: '/restaurants',
  レストラン詳細: '/restaurant/:restaurantId',
} as const;

export type ROUTE_PATH = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];
