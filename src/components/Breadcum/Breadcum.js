import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Breadcum extends Component {
  render() {
    return (
      <Fragment>
        <header className="page-header" style={{ marginBottom: "70px" }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ marginLeft: "70px" }}>
              <li className="breadcrumb-item">
                <NavLink to="/">{this.props.Menu}</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {this.props.SubMenu}
              </li>
            </ol>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Breadcum;
