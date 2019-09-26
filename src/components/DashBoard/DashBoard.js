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
    const { projects } = this.props;
    console.log("projects", projects);
    return <HeaderStatistic />;
  }
}

const mapState = (state, props) => {
  console.log("all state dashboard", state);
  console.log("all props dashboard", props);
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  connect(
    mapState,
    null
  )
)(DashBoard);
