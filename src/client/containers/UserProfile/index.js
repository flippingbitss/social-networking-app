/* Imports */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'; // GraphQL
import user from 'src/client/containers/UserProfile/userProfile.gql';
// import Divider from 'material-ui/Divider';
// import {List, ListItem} from 'material-ui/List';
// import MobileTearSheet from '../../../MobileTearSheet';

/* App */
//@graphql(message)
@graphql(user)
export default class UserProfile extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        about: PropTypes.string,
        tags: PropTypes.shape({
          title: PropTypes.string
        }),
        followers: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string
        }),
        following: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string
        }),
      }),
    }),
  }

  static defaultProps = {
    data: {
      message: {
        text: null,
      },
    },
  }

  render() {
    const { data } = this.props;

    const id = data.user && data.user.id;
    const firstName = data.user && data.user.firstName;
    const lastName = data.user && data.user.lastName;
    const age = data.user && data.user.age;
    const email = data.user && data.user.email;
    const about = data.user && data.user.about;
    const tagTitle = data.user && data.user.tags.title;
    const followersFN = data.user && data.user.followers.firstName;
    const followersLN = data.user && data.user.followers.lastName;
    const followingFN = data.user && data.user.following.firstName;
    const followingLN = data.user && data.user.following.lastName;

    const isLoading = data.loading ? 'yes' : 'nope';

    // const style = {
    //   marginLeft: 20,
    // };   
    
    return (
      <div>
        <h2>User ID: <em>{id}</em></h2>
        <h2>First Name: <em>{firstName}</em></h2>
        <h2>Last Name: <em>{lastName}</em></h2>
        <h2>Age: <em>{age}</em></h2>
        <h2>Email: <em>{email}</em></h2>
        <h2>About: <em>{about}</em></h2>
        <h2>Tags: <em>{tagTitle}</em></h2>
        <h2>Followers: <em>{followersFN}{followersLN}</em></h2>
        <h2>Following: <em>{followingFN}{followingLN}</em></h2>
      </div>
    );
  }
}

//export default DividerExampleForm;