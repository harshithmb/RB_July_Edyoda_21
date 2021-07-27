import React, { Component } from "react"; // rcredux
import { connect } from "react-redux";

export class Topbar extends Component {
  render() {
    const { userType, count } = this.props;
    return (
      <div>
        <h1>
          Topbar - {userType} - {count}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userType: state.userType,
  count: state.count,
});

export default connect(mapStateToProps, null)(Topbar);
