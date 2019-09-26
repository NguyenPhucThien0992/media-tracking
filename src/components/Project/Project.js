import React, { Component, Fragment } from "react";
import CreateProject from "./CreateProject/CreateProject";
import Template from "./Template/Template";
import AllProjects from "./AllProjects/AllProjects";
import { connect } from "react-redux";

class Project extends Component {
  render() {
    return (
      <Fragment>
        {/* <CreateProject /> */}

        {/* <Template /> */}
        {/* <AllProjects /> */}
      </Fragment>
    );
  }
}

const mapState = state => {
  console.log("state", state);
  return {
    projects: state
  };
};
export default connect(
  mapState,
  null
)(Project);
