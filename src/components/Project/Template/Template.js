import React, { Component, Fragment } from "react";
import Breadcum from "./../../Breadcum/Breadcum";

class Template extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Biểu mẫu" />
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Template import dự án</h3>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                  <div className="project-title d-flex align-items-center">
                    <div className="image has-shadow">
                      <img
                        src="img/project-1.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <h3 className="h4">Template import dự án</h3>
                      <small>Version 1.0</small>
                    </div>
                  </div>
                  <div className="project-date">
                    <span>Project_data_version_1.xlsm</span>
                  </div>
                </div>
                <div className="right-col col-lg-6 d-flex align-items-center">
                  <div className="time">
                    <i className="fa fa-clock-o" />
                    15-04-2019 at 12:00 PM
                  </div>
                  <div className="comments">
                    <i className="fa fa-download" aria-hidden="true" />
                    <a className="download" href="dasd">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Template tạo cửa hàng</h3>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                  <div className="project-title d-flex align-items-center">
                    <div className="image has-shadow">
                      <img
                        src="img/project-1.jpg"
                        alt="..."
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <h3 className="h4">Template tạo cửa hàng cho dự án</h3>
                      <small>Version 1.0</small>
                    </div>
                  </div>
                  <div className="project-date">
                    <span>Project_Store_version_1.xlsm</span>
                  </div>
                </div>
                <div className="right-col col-lg-6 d-flex align-items-center">
                  <div className="time">
                    <i className="fa fa-clock-o" />
                    15-04-2019 at 12:00 PM
                  </div>
                  <div className="comments">
                    <i className="fa fa-download" aria-hidden="true" />
                    <a className="download" href="dasd">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Template;
