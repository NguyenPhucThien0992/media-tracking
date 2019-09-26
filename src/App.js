import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import DashBoard from "./components/DashBoard/DashBoard";
import AccountGeneral from "./components/General/AccountGeneral/AccountGeneral";
import TimeGeneral from "./components/General/TimeGeneral/TimeGeneral";
import CreateProject from "./components/Project/CreateProject/CreateProject";
import PreviewProject from "./components/Project/CreateProject/PreviewProject";
import AllProjects from "./components/Project/AllProjects/AllProjects";
import PrepareProjects from "./components/Project/AllProjects/PrepareProjects/PrepareProjects";
import OnProgressProjects from "./components/Project/AllProjects/OnProgressProjects/OnProgressProjects";
import CompleteProjects from "./components/Project/AllProjects/CompleteProjects/CompleteProjects";
import Template from "./components/Project/Template/Template";
import Human from "./components/Human/Human";
import CreateNewEmployee from "./components/Human/CreateNewEmployee";
import CheckerTable from "./components/TimeChecker/CheckerTable/CheckerTable";
import CheckerTable1 from "./components/TimeChecker/CheckerTable/CheckerTable1";
import OnWorking from "./components/TimeChecker/OnWorking/OnWorking";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DayOff from "./components/DayOff/DayOff";

import Header from "./components/Menu/Header";
import Login from "./components/Login/Login";
import Otp from "./components/Login/Otp";
import ProfileEmployee from "./components/Human/ProfileEmployee";
import Admin from "./components/Admin/Admin";
import AddNewAgency from "./components/Admin/AddNewAgency";
import AgencyDetailed from "./components/Admin/AgencyDetailed";
import SearchEmployeeDetails from "./components/Human/SearchEmployeeDetails";
import ModifyImportedStore from "./components/Project/AllProjects/ModifyImportedStore";

class App extends Component {
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/logout" component={Login} exact />
          <Route path="/login/otp" component={Otp} exact></Route>
          <div className="page">
            <Header />
            <div className="page-content d-flex align-items-stretch">
              <Menu />
              <div className="content-inner">
                <Route path="/" component={DashBoard} exact />
                <Route
                  path="/overview-employee"
                  component={AccountGeneral}
                  exact
                />
                <Route path="/overview-time" component={TimeGeneral} />
                <Route path="/create-project" component={CreateProject} exact />
                <Route
                  path="/create-project/new-project"
                  component={PreviewProject}
                />
                <Route path="/all-project" component={AllProjects} exact />
                <Route
                  path="/all-project/prepare-project"
                  component={PrepareProjects}
                />
                <Route
                  path="/all-project/onprogress-project"
                  component={OnProgressProjects}
                />
                <Route
                  path="/all-project/complete-project"
                  component={CompleteProjects}
                />
                <Route
                  path="/all-project/modify-imported-store"
                  component={ModifyImportedStore}
                />
                <Route path="/template" component={Template} />
                <Route path="/human" component={Human} exact />
                <Route
                  path="/human/search/details"
                  exact
                  component={SearchEmployeeDetails}
                ></Route>
                <Route
                  path="/create-new-member"
                  exact
                  component={CreateNewEmployee}
                />
                <Route
                  path="/human/profile"
                  exact
                  component={ProfileEmployee}
                />
                <Route path="/checker-table" component={CheckerTable} />
                <Route path="/checker-table1" component={CheckerTable1} />
                <Route path="/on-working" component={OnWorking} />
                <Route path="/day-off" component={DayOff} />
                <Route path="/admin" component={Admin} exact />
                <Route path="/admin/add-new-agency" component={AddNewAgency} />
                <Route
                  path="/admin/agency/details"
                  component={AgencyDetailed}
                ></Route>
                {/* <Route component={NotFound} /> */}
              </div>
            </div>
          </div>
        </Switch>
        {/* <div className="row">{this.showContentMenus(routes)}</div> */}
      </Router>
    );
  }
}

export default App;
