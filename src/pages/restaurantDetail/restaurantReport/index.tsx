import React, { Fragment } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { RestaurantDetail } from '../../../containers/api/useFetchRestaurantDetail';

type RestaurantReportProps = {
  restaurantDetail?: RestaurantDetail;
};

export const RestaurantReport: React.VFC<RestaurantReportProps> = ({
  restaurantDetail,
}) => (
  <Box>
    <Typography variant="h2" paragraph>
      {restaurantDetail?.fields.title}
    </Typography>
    <img
      src={restaurantDetail?.fields.image.fields.file.url ?? ''}
      alt={restaurantDetail?.fields.image.fields.file.title ?? ''}
    />
    <Typography variant="subtitle1" paragraph align="center">
      {restaurantDetail?.fields.report}
    </Typography>
    <Grid container spacing={6}>
      {restaurantDetail?.fields.gallery.map((gallery) => (
        <Fragment key={gallery.fields.file.title}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <img
              src={gallery.fields.file.url}
              alt={gallery.fields.file.title}
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  </Box>
);
