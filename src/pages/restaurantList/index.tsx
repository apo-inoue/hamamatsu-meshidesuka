import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  InputBase,
  IconButton,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { makeStyles } from '@material-ui/core/styles';
import { Layout } from '../../components/layout';
import { ApiCall } from './ApiCall';
import { ErrorMessage } from '../../components/ui/errorMessage/index';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(9),
    flex: 1,
    maxWidth: 100,
  },
  iconButton: {
    padding: 10,
  },
}));

export const RestaurantList: React.VFC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper variant="outlined">
        <Box my={4} mx={3}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">レストラン一覧</Typography>
            <InputBase
              className={classes.input}
              placeholder="検索..."
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <Search />
            </IconButton>
          </Box>
          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <Suspense fallback={<CircularProgress />}>
              <ApiCall />
            </Suspense>
          </ErrorBoundary>
        </Box>
      </Paper>
    </Layout>
  );
};
