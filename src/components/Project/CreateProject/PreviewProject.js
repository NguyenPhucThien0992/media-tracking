import React, { Component, Fragment } from "react";
import Breadcum from "./../../Breadcum/Breadcum";
import { NavLink } from "react-router-dom";

class PreviewProject extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Chi tiết dự án" />
        <div className="container">
          <div className="col-lg-12">
            <div className="client card">
              <div className="card-close" />
              <div className="card-body text-center">
                <div className="client-avatar">
                  <img
                    src="http://static.vaa.org.vn/data_files/news_files/image/201705/08/logo-unilever-2_rkrcs.jpg"
                    alt="..."
                    className="img-fluid rounded-circle"
                  />
                </div>

                <div className="row">
                  <div className="col-12 project_data ">
                    <span className="float-left">Tên dự án: </span>
                    <span className="float-left"> Project Data - PG</span>
                  </div>
                  <div className="col-12 project_data ">
                    <span className="float-left">Ngành hàng: </span>
                    <span className="float-left"> Băng vệ sinh phụ nữ</span>
                  </div>
                  <div className="col-12 project_data ">
                    <span className="float-left">Thời gian: </span>
                    <span className="float-left"> 09/30/2019 - 2/2/2020</span>
                  </div>
                  <div className="col-12 project_data ">
                    <span className="float-left">Mô tả: </span>
                    <span className="float-left"> Không có</span>
                  </div>
                </div>

                <div
                  className="row"
                  style={{ marginBottom: "30px", marginTop: "30px" }}
                >
                  <div className="col-2">
                    <button className="btn btn-success">
                      <i className="fa fa-filter" aria-hidden="true" />
                      Bộ lọc
                    </button>
                  </div>
                  <div className="col-3">
                    <select className="browser-default custom-select">
                      <option value="0">Loại cửa hàng</option>
                      <option value="1">Supermarket</option>
                      <option value="2">Hypermarket</option>
                      <option value="3">FoodStore</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select className="browser-default custom-select">
                      <option value="0">Chuỗi cửa hàng</option>
                      <option value="1">BigC</option>
                      <option value="2">Coo-op Mart</option>
                      <option value="3">Lotte</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <input type="month" name="bdaytime" />
                    {/* <div class="form-group">
                    <div class="input-group date" id="datetimepicker1">
                      <input type="text" class="form-control" />
                      <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div> */}
                  </div>
                </div>

                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4"> Thông tin dự án</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Loại cửa hàng</th>
                              <th>Chuỗi cửa hàng</th>
                              <th>Tên cửa hàng</th>
                              <th>Ca</th>
                              <th>Ngày</th>
                              <th>Nhân viên</th>
                              <th>Service</th>
                              <th>Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>1</td>
                              <td>30/09/2019</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu1"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu1"
                                  >
                                    <NavLink
                                      className="dropdown-item btn btn-success"
                                      to="/human/profile"
                                    >
                                      <i
                                        className="fa fa-info"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Thông tin
                                    </NavLink>
                                    <NavLink
                                      to="/"
                                      className="dropdown-item btn btn-danger"
                                      type="button"
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Xóa
                                    </NavLink>
                                  </div>
                                </div>
                                <button
                                  className="btn btn-default"
                                  style={{
                                    borderRadius: "50%",
                                    textAlign: "center"
                                  }}
                                  data-toggle="modal"
                                  data-target="#addEmployee1"
                                >
                                  +
                                </button>
                                <div
                                  id="addEmployee1"
                                  tabIndex="-1"
                                  role="dialog"
                                  aria-labelledby="addEmployee1"
                                  aria-hidden="true"
                                  className="modal fade text-left"
                                >
                                  <div role="document" className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4
                                          id="addEmployee1"
                                          className="modal-title"
                                        >
                                          Thêm mới nhân viên
                                        </h4>
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          className="close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <form>
                                          <div className="form-group">
                                            <label>Loại nhân viên</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Nhân viên công ty
                                              </option>
                                              <option value="1">
                                                Nhân viên hệ thống website
                                              </option>
                                            </select>
                                          </div>
                                          <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <input
                                              type="number"
                                              placeholder="Số điện thoại"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label>Chức vụ</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Director
                                              </option>
                                              <option value="1">Manager</option>
                                              <option value="2">
                                                Team Leader
                                              </option>
                                              <option value="3">
                                                Field Operator
                                              </option>
                                            </select>
                                          </div>
                                        </form>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          className="btn btn-secondary"
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Lưu
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td />
                              <td>BigC</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BIG-C MIỀN AN LẠC</td>
                              <td>2</td>
                              <td>30/09/2019</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu2"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu2"
                                  >
                                    <NavLink
                                      className="dropdown-item btn btn-success"
                                      to="/human/profile"
                                    >
                                      <i
                                        className="fa fa-info"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Thông tin
                                    </NavLink>
                                    <NavLink
                                      to="/"
                                      className="dropdown-item btn btn-danger"
                                      type="button"
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Xóa
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu3"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu3"
                                  >
                                    <NavLink
                                      className="dropdown-item btn btn-success"
                                      to="/human/profile"
                                    >
                                      <i
                                        className="fa fa-info"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Thông tin
                                    </NavLink>
                                    <NavLink
                                      className="dropdown-item btn btn-danger"
                                      type="button"
                                      to="/"
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Xóa
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu4"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu4"
                                  >
                                    <NavLink
                                      className="dropdown-item btn btn-success"
                                      to="/human/profile"
                                    >
                                      <i
                                        className="fa fa-info"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Thông tin
                                    </NavLink>
                                    <NavLink
                                      className="dropdown-item btn btn-danger"
                                      type="button"
                                      to="/"
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Xóa
                                    </NavLink>
                                  </div>
                                </div>
                                <button
                                  className="btn btn-default"
                                  style={{
                                    borderRadius: "50%",
                                    textAlign: "center"
                                  }}
                                  data-target="#addEmployee2"
                                  data-toggle="modal"
                                >
                                  +
                                </button>
                                {/* Modal add nhan vien */}
                                <div
                                  id="addEmployee2"
                                  tabIndex="-1"
                                  role="dialog"
                                  aria-labelledby="addEmployee2"
                                  aria-hidden="true"
                                  className="modal fade text-left"
                                >
                                  <div role="document" className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4
                                          id="addEmployee2"
                                          className="modal-title"
                                        >
                                          Thêm mới nhân viên
                                        </h4>
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          className="close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <form>
                                          <div className="form-group">
                                            <label>Loại nhân viên</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Nhân viên công ty
                                              </option>
                                              <option value="1">
                                                Nhân viên hệ thống website
                                              </option>
                                            </select>
                                          </div>
                                          <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <input
                                              type="number"
                                              placeholder="Số điện thoại"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label>Chức vụ</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Director
                                              </option>
                                              <option value="1">Manager</option>
                                              <option value="2">
                                                Team Leader
                                              </option>
                                              <option value="3">
                                                Field Operator
                                              </option>
                                            </select>
                                          </div>
                                        </form>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          className="btn btn-secondary"
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Lưu
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td />
                              <td>BigC</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>1</td>
                              <td>30/09/2019</td>
                              <td>
                                <img
                                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                  alt="Avatar"
                                  className="avatar"
                                />
                                <button
                                  className="btn btn-default"
                                  style={{
                                    borderRadius: "50%",
                                    textAlign: "center"
                                  }}
                                  data-toggle="modal"
                                  data-target="#addEmployee3"
                                >
                                  +
                                </button>
                                <div
                                  id="addEmployee3"
                                  tabIndex="-1"
                                  role="dialog"
                                  aria-labelledby="addEmployee3"
                                  aria-hidden="true"
                                  className="modal fade text-left"
                                >
                                  <div role="document" className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4
                                          id="addEmployee3"
                                          className="modal-title"
                                        >
                                          Thêm mới nhân viên
                                        </h4>
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          className="close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <form>
                                          <div className="form-group">
                                            <label>Loại nhân viên</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Nhân viên công ty
                                              </option>
                                              <option value="1">
                                                Nhân viên hệ thống website
                                              </option>
                                            </select>
                                          </div>
                                          <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <input
                                              type="number"
                                              placeholder="Số điện thoại"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label>Chức vụ</label>
                                            <select className="form-control">
                                              <option value="0">
                                                Director
                                              </option>
                                              <option value="1">Manager</option>
                                              <option value="2">
                                                Team Leader
                                              </option>
                                              <option value="3">
                                                Field Operator
                                              </option>
                                            </select>
                                          </div>
                                        </form>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          data-dismiss="modal"
                                          className="btn btn-secondary"
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Lưu
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td />
                              <td>BigC</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PreviewProject;
