import React from "react";
import PropTypes from "prop-types";

// HOC/decorator to listen to Redux store state
import { connect } from "react-redux";
import { createReducer } from "src/utils";
import counter from "./reducers";

// ----------------------
createReducer("counter", counter, { count: 0 });

// ----------------------
// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
@connect(state => ({ counter: state.counter }))
export default class ReduxCounter extends React.PureComponent {
  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number.isRequired
    })
  };

  static defaultProps = {
    counter: {
      count: 0
    }
  };

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop
  triggerIncrement = () => {
    this.props.dispatch({
      type: "INCREMENT_COUNTER"
    });
  };

  render() {
    const { count } = this.props.counter;
    return (
      <div>
        <h2>Listening to Redux counter: {count}</h2>
        <button onClick={this.triggerIncrement}>Increment</button>
      </div>
    );
  }
}
