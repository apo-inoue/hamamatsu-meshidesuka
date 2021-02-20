import React from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Suggestions } from '../../../containers/api/useFetchRestaurantSuggestions';

type RestaurantSuggestionsProps = {
  suggestions?: Suggestions;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export const RestaurantSuggestions: React.VFC<RestaurantSuggestionsProps> = ({
  suggestions,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" color="primary" paragraph align="center">
        ハママツメシデスカ
      </Typography>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {suggestions?.fields.images.map((image) => (
            <GridListTile key={image.fields.title}>
              <img src={image.fields.file.url} alt={image.fields.title} />
              <GridListTileBar
                title={image.fields.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Box>
  );
};
