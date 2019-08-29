import React, { Component, Fragment } from "react";
import "./../../../styles/Project/CreateProject.css";
import { NavLink } from "react-router-dom";
import Breadcum from "./../../Breadcum/Breadcum";
class CreateProject extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Tạo dự án" />
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <button
                  href="asd"
                  className="btn btn-info"
                  data-target="#createProject"
                  data-toggle="modal"
                >
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    style={{ paddingRight: "5px" }}
                  />
                  Tạo dự án
                </button>

                <button
                  href="asd"
                  className="btn btn-success"
                  data-target="#importExcel"
                  data-toggle="modal"
                >
                  Import excel
                </button>
              </div>
            </div>
            {/* Modal create project */}
            <div
              className="modal fade"
              id="createProject"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="createProject"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="createProject">
                      Tạo dự án
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Vui lòng chọn tập tin excel cần import
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        value="0"
                      >
                        <option value="0">Chọn tập tin...</option>
                        <option value="1">Project_Omo_version_1.xlsm</option>
                        <option value="2">
                          Project_Samsung_version_1.xlsm
                        </option>
                        <option value="3">roject_Apple_version_1.xlsm</option>
                      </select>
                      <div className="input-group-append">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect02"
                        >
                          Excel
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    {/* <button type="button" className="btn btn-primary">
                      Lưu
                    </button> */}
                    <NavLink
                      to="/all-project/prepare-project"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Lưu
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal import excel */}
            <div
              className="modal fade"
              id="importExcel"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="importExcel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="importExcel">
                      Import Excel
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Vui lòng chọn tập tin excel cần import
                    <div className="input-group mb-3">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile01"
                        >
                          Chọn thư mục cần import
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Lịch sử import dự án</h3>
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
                      <h3 className="h4">Dự án quảng cáo Omo</h3>
                      <small>Bột giặt Omo</small>
                    </div>
                  </div>
                  <div className="project-date">
                    <span>Project_Omo_version_1.xlsm</span>
                  </div>
                </div>
                <div className="right-col col-lg-6 d-flex align-items-center">
                  <div className="time">
                    <i className="fa fa-clock-o" />
                    22-07-2019 at 12:00 PM
                  </div>
                  <div className="comments">
                    <i className="fa fa-download" aria-hidden="true" />
                    <a className="download" href="dasd">
                      Download
                    </a>
                  </div>
                  <div className="comments">
                    <i className="fa fa-trash" aria-hidden="true" />
                    <a className="delete" href="dasd">
                      Xóa
                    </a>
                  </div>
                </div>
              </div>
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
                      <h3 className="h4">Dự án thiết kế concept</h3>
                      <small>Công ty Samsung</small>
                    </div>
                  </div>
                  <div className="project-date">
                    <span>Project_Samsung_version_1.xlsm</span>
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
                  <div className="comments">
                    <i className="fa fa-trash" aria-hidden="true" />
                    <a className="delete" href="dasd">
                      Xóa
                    </a>
                  </div>
                </div>
              </div>
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
                      <h3 className="h4">Dự án quảng cáo Iphone X </h3>
                      <small>Công Ty Apple</small>
                    </div>
                  </div>
                  <div className="project-date">
                    <span>Project_Apple_version_1.xlsm</span>
                  </div>
                </div>
                <div className="right-col col-lg-6 d-flex align-items-center">
                  <div className="time">
                    <i className="fa fa-clock-o" />
                    12-05-2019 at 12:00 PM
                  </div>
                  <div className="comments">
                    <i className="fa fa-download" aria-hidden="true" />
                    <a className="download" href="dasd">
                      Download
                    </a>
                  </div>
                  <div className="comments">
                    <i className="fa fa-trash" aria-hidden="true" />
                    <a className="delete" href="dasd">
                      Xóa
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

export default CreateProject;
