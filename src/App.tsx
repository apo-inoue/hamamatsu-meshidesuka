import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './containers/providers';
import { RoutesConfig } from './routes';

export const App: React.VFC = () => (
  <Providers>
    <CssBaseline />
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </Providers>
);
