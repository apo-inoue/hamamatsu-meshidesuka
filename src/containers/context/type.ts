export type RestaurantState = {
  restaurantId: string;
};

export type RestaurantDispatch = {
  mountInitStateHandler: (initialState: RestaurantState) => void;
};
