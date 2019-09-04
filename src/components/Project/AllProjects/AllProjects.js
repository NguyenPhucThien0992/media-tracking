import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Breadcum from "./../../Breadcum/Breadcum";

class AllProjects extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Tổng dự án" />
        <div className="container-fluid">
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
                    <option value="2">Project_Samsung_version_1.xlsm</option>
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
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Dự án đang giai đoạn chuẩn bị</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Mã dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Tên dự án
                  </a>
                  <a className="dropdown-item" href="#dsd">
                    Ngày bắt đầu
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã dự án</th>
                      <th>Tên dự án</th>
                      <th>Ngành hàng</th>
                      <th>Bắt đầu</th>
                      <th>Kết thúc</th>
                      <th>Nhân viên</th>
                      <th>Hoạt động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>PJ001</td>
                      <td>Quảng cáo bột giặt omo</td>
                      <td>Bột giặt</td>
                      <td>30/09/2019</td>
                      <td>20/02/2020</td>
                      <td>100</td>
                      <td>
                        <div className="dropdown-area">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Hành động
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <NavLink
                                to="/all-project/prepare-project"
                                className="dropdown-item btn btn-primary"
                                style={{ marginRight: "10px" }}
                              >
                                Chi tiết
                              </NavLink>
                              <button
                                className="dropdown-item btn btn-success"
                                data-toggle="modal"
                                data-target="#projectPrepareStatus"
                              >
                                Trạng thái
                              </button>
                              <button
                                className="btn btn-danger dropdown-item"
                                data-toggle="modal"
                                data-target="#deletePrepareProject"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal xóa dự án đang chuẩn bị */}
          <div
            className="modal fade"
            id="deletePrepareProject"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deletePrepareProject"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deletePrepareProject">
                    Xóa dự án
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
                <div className="modal-body">Bạn có chắc muốn xóa dự án này</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Không
                  </button>
                  <button type="button" className="btn btn-primary">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal cho chỉnh sửa trạng thái */}
          <div
            className="modal fade"
            id="projectPrepareStatus"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="projectPrepareStatus"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="projectPrepareStatus">
                    Thay đổi trạng thái dự án
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
                  Bạn có chắc muốn thay đổi trạng thái dự án sang hoàn thành
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Không
                  </button>
                  <button type="button" className="btn btn-primary">
                    Có
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dự án đang chạy */}
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Dự án đang chạy</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Mã dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Tên dự án
                  </a>
                  <a className="dropdown-item" href="#dsd">
                    Ngày bắt đầu
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã dự án</th>
                      <th>Tên dự án</th>
                      <th>Ngành hàng</th>
                      <th>Bắt đầu</th>
                      <th>Kết thúc</th>
                      <th>Nhân viên</th>
                      <th>Hoạt động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>PJ001</td>
                      <td>Quảng cáo bột giặt omo</td>
                      <td>Bột giặt</td>
                      <td>30/09/2019</td>
                      <td>20/02/2020</td>
                      <td>100</td>
                      <td>
                        <div className="dropdown-area">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Hành động
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <NavLink
                                to="/all-project/onprogress-project"
                                className="dropdown-item btn btn-primary"
                              >
                                Chi tiết
                              </NavLink>
                              <button
                                className="dropdown-item btn btn-success"
                                data-toggle="modal"
                                data-target="#projectPrepareStatus"
                              >
                                Trạng thái
                              </button>
                              <button
                                className="btn btn-danger dropdown-item"
                                data-toggle="modal"
                                data-target="#deleteOnProgressProject"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal xóa dự án đang chạy */}
          <div
            className="modal fade"
            id="deleteOnProgressProject"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteOnProgressProject"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteOnProgressProject">
                    Xóa dự án
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
                <div className="modal-body">Bạn có chắc muốn xóa dự án này</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Không
                  </button>
                  <button type="button" className="btn btn-primary">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal cho chỉnh sửa trạng thái dự án đang chạy*/}
          <div
            className="modal fade"
            id="projectOnProgressStatus"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="projectOnProgressStatus"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="projectOnProgressStatus">
                    Thay đổi trạng thái dự án
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
                  Bạn có chắc muốn thay đổi trạng thái dự án sang hoàn thành
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Không
                  </button>
                  <button type="button" className="btn btn-primary">
                    Có
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dự án hoàn thành */}
        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Dự án hoàn thành</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Mã dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Tên dự án
                  </a>
                  <a className="dropdown-item" href="#dsd">
                    Ngày bắt đầu
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã dự án</th>
                      <th>Tên dự án</th>
                      <th>Ngành hàng</th>
                      <th>Bắt đầu</th>
                      <th>Kết thúc</th>
                      <th>Nhân viên</th>
                      <th>Hoạt động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>PJ001</td>
                      <td>Quảng cáo bột giặt omo</td>
                      <td>Bột giặt</td>
                      <td>30/09/2019</td>
                      <td>20/02/2020</td>
                      <td>100</td>
                      <td>
                        <div className="dropdown-area">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Hành động
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <NavLink
                                to="/all-project/complete-project"
                                className="dropdown-item btn btn-primary"
                              >
                                Chi tiết
                              </NavLink>

                              <button
                                className="btn btn-danger dropdown-item"
                                data-toggle="modal"
                                data-target="#deleteCompleteProject"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal xóa dự án hoàn thành */}
          <div
            className="modal fade"
            id="deleteCompleteProject"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteCompleteProject"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteCompleteProject">
                    Xóa dự án
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
                <div className="modal-body">Bạn có chắc muốn xóa dự án này</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Không
                  </button>
                  <button type="button" className="btn btn-primary">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AllProjects;
