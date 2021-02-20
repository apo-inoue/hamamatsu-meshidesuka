import React from 'react';

import { Typography, Toolbar, AppBar, Container, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              ハママツメシデスカ
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth="lg">
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
};
