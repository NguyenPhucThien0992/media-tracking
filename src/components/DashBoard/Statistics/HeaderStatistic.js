import React, { Component } from "react";

class HeaderStatistic extends Component {
  render() {
    return (
      <section class="dashboard-counts no-padding-bottom">
        <div class="container-fluid">
          <div class="row bg-white has-shadow">
            <div class="col-xl-3 col-sm-6">
              <div class="item d-flex align-items-center">
                <div class="icon bg-violet">
                  <i class="icon-user" />
                </div>
                <div class="title">
                  <span>
                    Tổng
                    <br />
                    check in
                  </span>
                  <div class="progress">
                    <div
                      role="progressbar"
                      style={{ width: "25%", height: "4px" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar bg-violet"
                    />
                  </div>
                </div>
                <div class="number">
                  <strong>25</strong>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6">
              <div class="item d-flex align-items-center">
                <div class="icon bg-red">
                  <i class="icon-padnote" />
                </div>
                <div class="title">
                  <span>
                    Chưa
                    <br />
                    check in
                  </span>
                  <div class="progress">
                    <div
                      role="progressbar"
                      style={{ width: "70%", height: "4px" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar bg-red"
                    />
                  </div>
                </div>
                <div class="number">
                  <strong>70</strong>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6">
              <div class="item d-flex align-items-center">
                <div class="icon bg-green">
                  <i class="icon-bill" />
                </div>
                <div class="title">
                  <span>
                    Check in
                    <br />
                    muộn
                  </span>
                  <div class="progress">
                    <div
                      role="progressbar"
                      style={{ width: "40%", height: "4px" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar bg-green"
                    />
                  </div>
                </div>
                <div class="number">
                  <strong>40</strong>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6">
              <div class="item d-flex align-items-center">
                <div class="icon bg-orange">
                  <i class="icon-check" />
                </div>
                <div class="title">
                  <span>
                    Tổng
                    <br />
                    Check out
                  </span>
                  <div class="progress">
                    <div
                      role="progressbar"
                      style={{ width: "50%", height: "4px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar bg-orange"
                    />
                  </div>
                </div>
                <div class="number">
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
