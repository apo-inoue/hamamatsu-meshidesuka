import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';
import React, {
  Suspense,
  unstable_SuspenseList as SuspenseList,
  useState,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout';
import { ApiCallReport } from './ApiCallReport';
import { ErrorMessage } from '../../components/ui/errorMessage/index';
import { ApiCallSuggestion } from './ApiCallSuggestion';

export const RestaurantDetail: React.VFC = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  const [enabled, setEnabled] = useState(false);
  const handleEnabled = () => setEnabled(true);

  return (
    <Layout>
      <IconButton onClick={handleClick}>👈</IconButton>
      <Paper variant="outlined">
        <Box my={4} mx={3}>
          <Typography variant="h6" paragraph>
            レストラン詳細
          </Typography>
          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <SuspenseList revealOrder="forwards" tail="collapsed">
              {/* This doesn't block initial render because of Suspense boundary. */}
              <Suspense fallback={<CircularProgress />}>
                <ApiCallReport handleEnabled={handleEnabled} />
              </Suspense>
              {/* This doesn't block initial render because of Suspense boundary. */}
              <Box mt={8} />
              <Suspense fallback={<CircularProgress color="secondary" />}>
                <ApiCallSuggestion enabled={enabled} />
              </Suspense>
            </SuspenseList>
          </ErrorBoundary>
        </Box>
      </Paper>
    </Layout>
  );
};
