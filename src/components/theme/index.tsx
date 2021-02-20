import { createMuiTheme } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';

import { colorTheme } from './colorTheme';
import { typographyTheme } from './typographyTheme';
import { breakpointsTheme } from './breakpointsTheme';

export const stransaTheme = createMuiTheme(
  {
    ...colorTheme,
    ...typographyTheme,
    ...breakpointsTheme,
    props: {
      MuiTextField: {
        variant: 'outlined',
      },
      MuiButton: {
        variant: 'contained',
        color: 'primary',
      },
    },
  },
  jaJP,
);
