import React, { Component } from "react";

class AccountGeneral extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <div className="bar-chart-example card">
          <div className="card-close">
            <div className="dropdown">
              <button
                type="button"
                id="closeCard6"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-ellipsis-v" />
              </button>
              <div
                aria-labelledby="closeCard6"
                className="dropdown-menu dropdown-menu-right has-shadow"
              >
                <a href="asd" className="dropdown-item remove">
                  <i className="fa fa-times" />
                  Close
                </a>
                <a href="as" className="dropdown-item edit">
                  <i className="fa fa-gear" />
                  Edit
                </a>
              </div>
            </div>
          </div>
          <div className="card-header d-flex align-items-center">
            <h3 className="h4">Bar Chart Example</h3>
          </div>
          <div className="card-body">
            <canvas id="barChartExample" />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountGeneral;
