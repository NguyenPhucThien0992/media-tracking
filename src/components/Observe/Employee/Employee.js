import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getAllCollaborate } from "./../../../store/actions/employeeAction";
import { withFirebase } from "react-redux-firebase";

class Employee extends Component {
  componentDidMount() {
    const { getAllCollaborate } = this.props;
    getAllCollaborate();
  }

  render() {
    const { sub_collaborate } = this.props;
    if (sub_collaborate) {
      sub_collaborate.forEach(item => {
        console.log("kaka");
      });
    }
    return (
      <div>
        <div>werwer</div>
      </div>
    );
  }
}

const mapState = (state, props) => {
  return {
    sub_collaborate: state.employeeReducer.sub_collaborate
  };
};
const mapDispatch = dispatch => {
  return {
    getAllCollaborate: () => {
      return dispatch(getAllCollaborate());
    }
  };
};
export default compose(
  withFirebase,
  connect(
    mapState,
    mapDispatch
  )
)(Employee);
