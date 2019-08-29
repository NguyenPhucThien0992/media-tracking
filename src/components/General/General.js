import React, { Component, Fragment } from "react";
import AccountGeneral from "./AccountGeneral/AccountGeneral";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class General extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route to="/overview/employee" component={AccountGeneral} />
        </Router>
      </Fragment>
    );
  }
}

export default General;
