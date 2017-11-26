import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Icon from "material-ui/Icon";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  }
});

function NavBarList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button to="/" component={Link}>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button to="/search" component={Link}>
          <ListItemIcon>
            <Icon>search</Icon>
          </ListItemIcon>
          <ListItemText primary="Search Friends" />
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List> */}
    </div>
  );
}

NavBarList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBarList);
