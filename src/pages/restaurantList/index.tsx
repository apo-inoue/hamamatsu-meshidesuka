import { Box, CircularProgress, Paper, Typography } from '@material-ui/core';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Layout } from '../../components/layout';
import { ApiCall } from './ApiCall';
import { ErrorMessage } from '../../components/ui/errorMessage/index';

export const RestaurantList: React.VFC = () => (
  <Layout>
    <Paper variant="outlined">
      <Box my={4} mx={3}>
        <Typography variant="h6" paragraph>
          レストラン一覧
        </Typography>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          <Suspense fallback={<CircularProgress />}>
            <ApiCall />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Paper>
  </Layout>
);
