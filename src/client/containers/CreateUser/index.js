import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

import NavBar from "src/client/components/NavBar";

class CreateUser extends React.Component {
    render() {
        const props = this.props;

        return (
            <div>
                <NavBar />
                <div className="body-content">
                    <form className={props.container} noValidate autoComplete="off">
                        <TextField
                            id="firstName"
                            label="First Name"
                            className={props.textField}
                            margin="normal"
                        /><br />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            className={props.textField}
                            margin="normal"
                        /><br />
                        <TextField
                            id="email"
                            label="Email Address"
                            className={props.textField}
                            margin="normal"
                        /><br />
                        



                    </form>
                </div>
            </div>
        );
    }
}


// query
// mutation {
//     createUser(input: {firstName: "Johnnnn", lastName: "Doeeeee", email: "pleasework7@work.com"}) {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
  

export default CreateUser;
