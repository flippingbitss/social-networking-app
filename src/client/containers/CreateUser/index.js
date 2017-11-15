import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import NavBar from "src/client/components/NavBar";
import createUser from "./createUser.gql";

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

@graphql(createUser)
class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <NavBar />
                <div className="body-content">
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="firstName"
                            label="First Name"
                            className={classes.textField}
                            onChange={event => this.updateInputValue(event)}
                            margin="normal"
                        /><br />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            className={classes.textField}
                            onChange={event => this.updateInputValue(event)}
                            margin="normal"
                        /><br />
                        <TextField
                            id="email"
                            label="Email Address"
                            className={classes.textField}
                            onChange={event => this.updateInputValue(event)}
                            margin="normal"
                        /><br />

                        <Button raised color="primary" className={classes.button} onClick={this.handleClick}>
                            Submit
                        </Button>

                    </form>
                </div>
            </div>
        );
    }

    updateInputValue(event) {
        this.setState({
            [event.target.id]: event.target.value.trim() ? event.target.value.trim() : null
        });
        console.log(this.state);        
    }

    handleClick = () => {
        this.props.mutate({
            variables: {
                input: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

export default withStyles(styles)(CreateUser);
