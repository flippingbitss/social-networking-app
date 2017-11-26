import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function FriendListItem(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://via.placeholder.com/350x150"
          title="Jane Doe"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            My Friend 
          </Typography>
          <Typography component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Follow
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

FriendListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FriendListItem);