import { Grid, CircularProgress, Box, Button } from '@material-ui/core';
import { HourglassEmpty } from '@material-ui/icons';
import React, {
  Suspense,
  unstable_useTransition as useTransition,
  useState,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RestaurantList } from '../../../containers/api/useFetchRestaurantList';
import { RestaurantCard } from './RestaurantCard';
import { ErrorMessage } from '../../../components/ui/errorMessage/index';
import { ApiCallSuggestion } from '../../restaurantDetail/ApiCallSuggestion';
import { Fog } from '../../../components/ui/fog';

type RestaurantCardsProps = {
  restaurantList?: RestaurantList;
};

export const RestaurantCards: React.VFC<RestaurantCardsProps> = ({
  restaurantList,
}) => {
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);
  const [startTransition, isPending] = useTransition({
    busyDelayMs: 1000,
  });
  const handleClick = () => {
    startTransition(() => {
      setIsShowSuggestion(true);
    });
  };
  console.log(isPending);

  return (
    <Fog isPending={isPending}>
      <Box my={4}>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          <Suspense fallback={<CircularProgress />}>
            {isShowSuggestion === false ? (
              <Button size="large" disabled={isPending} onClick={handleClick}>
                {!isPending ? 'サジェスチョンを表示' : <HourglassEmpty />}
              </Button>
            ) : (
              <ApiCallSuggestion enabled={isShowSuggestion} />
            )}
          </Suspense>
        </ErrorBoundary>
      </Box>
      <Grid container spacing={3}>
        {restaurantList?.items.map((restaurantListItem) => (
          <Grid
            key={restaurantListItem.sys.id}
            item
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={12}
          >
            <RestaurantCard restaurantListItem={restaurantListItem} />
          </Grid>
        ))}
      </Grid>
    </Fog>
  );
};
