import React, { Component, Fragment } from "react";
import Breadcum from "./../Breadcum/Breadcum";
import { NavLink } from "react-router-dom";
class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Admin" SubMenu="Bảng điều khiển" />
        <section className="projects no-padding-top">
          <div className="card">
            <div class="card-header">Danh sách đối tác</div>
            <div className="card-body">
              <div class="table-responsive">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tên đối tác</th>

                      <th>Loại tài khoản</th>
                      <th>Ngày kích hoạt</th>
                      <th>Tổng tài khoản đang dùng</th>
                      <th>Tổng tài khoản còn lại</th>
                      <th>Tình trạng</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Công ty Omo</td>

                      <td>
                        <span style={{ color: "green", fontWeight: "bold" }}>
                          Cơ bản
                        </span>
                      </td>
                      <td>15/06/2019</td>
                      <td>32</td>
                      <td>20</td>
                      <td style={{ color: "green", fontWeight: "bold" }}>
                        Đang hoạt động
                      </td>
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
                                className="btn btn-warning dropdown-item"
                                to="/admin/agency/details"
                              >
                                Chi tiết
                              </NavLink>
                              <button
                                className="btn btn-danger dropdown-item"
                                data-toggle="modal"
                                data-target="#deleteAgency1"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Modal xóa agency */}
                        <div
                          className="modal fade"
                          id="deleteAgency1"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="deleteAgency1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="deleteAgency1">
                                  Xóa agency
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
                                Bạn có chắc muốn xóa agency này?
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Không
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Công ty Comfort</td>

                      <td>
                        <span style={{ color: "pink", fontWeight: "bold" }}>
                          Nâng cao 1
                        </span>
                      </td>
                      <td>15/06/2019</td>
                      <td>32</td>
                      <td>20</td>
                      <td style={{ color: "red", fontWeight: "bold" }}>
                        Tạm ngừng hoạt động
                      </td>
                      <td>
                        <NavLink
                          to="/admin/add-new-agency"
                          className="btn btn-primary"
                        >
                          Cập nhật
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-toggle="modal"
                          data-target="#deleteAgency2"
                        >
                          Xóa
                        </button>
                        {/* Modal xóa agency */}
                        <div
                          className="modal fade"
                          id="deleteAgency2"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="deleteAgency2"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="deleteAgency2">
                                  Xóa agency
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
                                Bạn có chắc muốn xóa agency này?
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Không
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Công ty Tide</td>
                      <td>
                        <span style={{ color: "blue", fontWeight: "bold" }}>
                          Tùy chọn
                        </span>
                      </td>
                      <td>15/06/2019</td>
                      <td>32</td>
                      <td>20</td>
                      <td style={{ color: "green", fontWeight: "bold" }}>
                        Đang hoạt động
                      </td>
                      <td>
                        <NavLink
                          to="/admin/add-new-agency"
                          className="btn btn-primary"
                        >
                          Cập nhật
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-toggle="modal"
                          data-target="#deleteAgency3"
                        >
                          Xóa
                        </button>
                        {/* Modal xóa agency */}
                        <div
                          className="modal fade"
                          id="deleteAgency3"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="deleteAgency3"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="deleteAgency3">
                                  Xóa agency
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
                                Bạn có chắc muốn xóa agency này?
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Không
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                  <div className="col-2 offset-10">
                    <NavLink
                      to="/admin/add-new-agency"
                      className="btn btn-warning"
                    >
                      Thêm mới đối tác
                    </NavLink>
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

export default Admin;
