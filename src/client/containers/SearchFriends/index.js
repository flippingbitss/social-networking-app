import React, { PureComponent } from "react"
import PropTypes from 'prop-types'

import NavBar from "src/client/components/NavBar";
import GraphQLMessage from "src/client/containers/EgGQLMessage";
import ReduxCounter from "src/client/containers/EgCounter";
import Styles from "src/client/containers/EgStyles";
import FriendListItem from "src/client/components/FriendListItem";
class SearchFriends extends PureComponent {
    
 static propTypes = {
   title: PropTypes.string
 };

  render() {
    /* eslint-disable no-unused-vars */
    const props = this.props;
    return (
      <div>
        <NavBar />
       
      <div className="body-content"><FriendListItem/></div> 
          
      </div>
    );
  }
}


export default SearchFriends;
