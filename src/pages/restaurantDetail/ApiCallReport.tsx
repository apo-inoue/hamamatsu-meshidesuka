import React from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantReport } from './restaurantReport';
import { useFetchRestaurantDetail } from '../../containers/api/useFetchRestaurantDetail';

type ApiCallReportProps = {
  handleEnabled: () => void;
};

export const ApiCallReport: React.VFC<ApiCallReportProps> = ({
  handleEnabled,
}) => {
  const params = useParams();
  const { data } = useFetchRestaurantDetail(params.restaurantId, {
    onSuccess: handleEnabled,
  });

  return <RestaurantReport restaurantDetail={data} />;
};
