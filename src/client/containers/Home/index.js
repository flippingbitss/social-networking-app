import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

import NavBar from "src/client/components/NavBar";
import GraphQLMessage from "src/client/containers/EgGQLMessage";
import ReduxCounter from "src/client/containers/EgCounter";
import Styles from "src/client/containers/EgStyles";

class Home extends PureComponent {
  render() {
    /* eslint-disable no-unused-vars */
    const props = this.props;
    return (
      <div>
        <NavBar />

        <hr />
        <GraphQLMessage />

        <hr />
        <ReduxCounter />

        <hr />
        <p>Stylesheet examples:</p>
        <Styles />
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
