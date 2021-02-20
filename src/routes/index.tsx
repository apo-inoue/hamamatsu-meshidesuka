import React, { useEffect } from 'react';
import { Navigate, Route, useLocation, Routes } from 'react-router-dom';

import { RestaurantList } from '../pages/restaurantList';
import { RestaurantDetail } from '../pages/restaurantDetail';
import { ROUTE_PATHS } from './type';

export const RoutesConfig: React.VFC = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={ROUTE_PATHS.レストラン一覧} replace />}
      />
      <Route path={ROUTE_PATHS.レストラン一覧} element={<RestaurantList />} />
      <Route path={ROUTE_PATHS.レストラン詳細} element={<RestaurantDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
