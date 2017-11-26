import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Text from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import Icon from 'material-ui/Icon';


const styles = theme => ({
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    padding: theme.spacing.unit * 3
  }
});

const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu">
            <Icon color="contrast">menu</Icon>
          </IconButton>
          <Text type="title" color="inherit" className={classes.flex}>
            My App Bar
          </Text>
          <Icon color="contrast">search</Icon>
          <TextField
            autoFocus={true}
            value={"my test search "}
          />
          <Button color="contrast">Logout</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
