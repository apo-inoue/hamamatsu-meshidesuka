import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { RestaurantListItem } from '../../../containers/api/useFetchRestaurantList';

const useStyles = makeStyles(() => ({
  root: {
    height: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    height: 160,
  },
}));

type RestaurantCardProps = {
  restaurantListItem?: RestaurantListItem;
};

export const RestaurantCard: React.VFC<RestaurantCardProps> = ({
  restaurantListItem,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${restaurantListItem?.sys.id ?? ''}`);
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height={140}
          image={restaurantListItem?.fields.image.fields.file.url}
          title={restaurantListItem?.fields.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {restaurantListItem?.fields.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {restaurantListItem?.fields.lead}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
