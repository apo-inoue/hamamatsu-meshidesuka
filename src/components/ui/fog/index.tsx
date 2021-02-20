import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    opacity: 0.6,
    transition: 'opacity 0s',
    transitionDelay: '0.15s',
  },
}));

type FogProps = {
  isPending: boolean;
};

export const Fog: React.FC<FogProps> = ({ children, isPending }) => {
  const classes = useStyles();

  return <div className={clsx(isPending && classes.root)}>{children}</div>;
};
