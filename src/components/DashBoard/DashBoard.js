import React, { Component } from "react";
import HeaderStatistic from "./Statistics/HeaderStatistic";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

class DashBoard extends Component {
  render() {
    console.log("dashboard project", this.props.agency);
    return <HeaderStatistic />;
  }
}

const mapState = state => {
  console.log("state", state);
  return {
    agency: state.firestore.ordered.agency
  };
};

export default compose(
  firestoreConnect(() => [
    {
      collection: "agency"
    }
  ]),
  connect(mapState)
)(DashBoard);
