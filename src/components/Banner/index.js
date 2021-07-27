import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../../redux/actions";

export class Banner extends Component {
  incrementValue = () => {
    this.props.increAction(1);
  };
  decrementValue = () => {
    this.props.decreAction(1);
  };
  render() {
    return (
      <div>
        <hr />
        <h1>Banner</h1>
        <button onClick={this.incrementValue}>Increment</button>
        <button onClick={this.decrementValue}>Decrement</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increAction: (payload) => dispatch(incrementAction(payload)),
  decreAction: (payload) => dispatch(decrementAction(payload)),
});

export default connect(null, mapDispatchToProps)(Banner);
