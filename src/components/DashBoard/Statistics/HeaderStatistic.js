import React, { Component } from "react";

class HeaderStatistic extends Component {
  render() {
    return (
      <section className="dashboard-counts no-padding-bottom">
        <div className="container-fluid">
          <div className="row bg-white has-shadow">
            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-violet">
                  <i className="icon-user" />
                </div>
                <div className="title">
                  <span>
                    Tổng
                    <br />
                    check in
                  </span>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: "25%", height: "4px" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar bg-violet"
                    />
                  </div>
                </div>
                <div className="number">
                  <strong>25</strong>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-red">
                  <i className="icon-padnote" />
                </div>
                <div className="title">
                  <span>
                    Chưa
                    <br />
                    check in
                  </span>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: "70%", height: "4px" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar bg-red"
                    />
                  </div>
                </div>
                <div className="number">
                  <strong>70</strong>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-green">
                  <i className="icon-bill" />
                </div>
                <div className="title">
                  <span>
                    Check in
                    <br />
                    muộn
                  </span>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: "40%", height: "4px" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar bg-green"
                    />
                  </div>
                </div>
                <div className="number">
                  <strong>40</strong>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="item d-flex align-items-center">
                <div className="icon bg-orange">
                  <i className="icon-check" />
                </div>
                <div className="title">
                  <span>
                    Tổng
                    <br />
                    Check out
                  </span>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: "50%", height: "4px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar bg-orange"
                    />
                  </div>
                </div>
                <div className="number">
                  <strong>50</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderStatistic;
