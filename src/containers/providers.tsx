import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { stransaTheme } from '../components/theme';
import { RestaurantProvider } from './context/provider';
import { combineProviders } from '../helpers/combineProviders';
import { queryClient } from './queryClient';

const providers = [RestaurantProvider];
const ApplicationProviders = combineProviders(providers);

export const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={stransaTheme}>
    <QueryClientProvider client={queryClient}>
      {process.env.REACT_APP_STAGE === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <ApplicationProviders>{children}</ApplicationProviders>
    </QueryClientProvider>
  </ThemeProvider>
);
