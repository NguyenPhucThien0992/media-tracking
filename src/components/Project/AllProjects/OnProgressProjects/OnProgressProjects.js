import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Breadcum from "./../../../Breadcum/Breadcum";
import "./../../../../styles/Project/Project.css";
class OnProgressProjects extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Dự án đang chạy" />
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
                  style={{ marginTop: "30px", marginBottom: "30px" }}
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
                    {/* <div className="form-group">
                    <div className="input-group date" id="datetimepicker1">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
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
                              <th>Mã cửa hàng</th>
                              <th>Tên cửa hàng</th>
                              <th>Tỉnh thành</th>
                              <th>Shift Code</th>
                              <th>Shift Hour</th>
                              <th>Shift Start</th>
                              <th>Shift End</th>
                              <th>Nhân sự</th>
                              <th>Service</th>
                              <th>Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BigC001</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>Thành phố Hồ Chí Minh</td>
                              <td>1</td>
                              <td>6</td>
                              <td>3:00 CH</td>
                              <td>9:00 CH</td>
                              <td>
                                <div className="row">
                                  <span>PG role:</span>

                                  <img
                                    src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu1"
                                  />
                                  {/* dropmenu  PG role */}
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

                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="modal"
                                    data-target="#addEmployee1"
                                  />
                                  <div
                                    id="addEmployee1"
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="addEmployee1"
                                    aria-hidden="true"
                                    className="modal fade text-left"
                                  >
                                    <div
                                      role="document"
                                      className="modal-dialog"
                                    >
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
                                              <label>Số điện thoại</label>
                                              <input
                                                type="number"
                                                placeholder="Số điện thoại"
                                                className="form-control"
                                              />
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
                                </div>
                                <div className="row">
                                  <span>SS role:</span>
                                  <img
                                    src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu2"
                                  />
                                  {/* dropmenu  SS role */}
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
                                  <img
                                    src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu3"
                                  />
                                  {/* dropmenu  SS role */}
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
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="modal"
                                    data-target="#addEmployee2"
                                  />
                                  <div
                                    id="addEmployee2"
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="addEmployee2"
                                    aria-hidden="true"
                                    className="modal fade text-left"
                                  >
                                    <div
                                      role="document"
                                      className="modal-dialog"
                                    >
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
                                              <label>Số điện thoại</label>
                                              <input
                                                type="number"
                                                placeholder="Số điện thoại"
                                                className="form-control"
                                              />
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
                                </div>
                              </td>
                              <td>Roaming in store</td>
                              <td>Line nước mắm</td>
                            </tr>
                            {/* <tr>
                              <th scope="row">2</th>
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
                                  data-toggle="modal"
                                  data-target="#addEmployee2"
                                >
                                  +
                                </button>
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
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu5"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu5"
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
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* pagination */}
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="asd">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Ngày đã hoàn thành */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4"> Dự án hoàn thành</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Loại cửa hàng</th>
                              <th>Chuỗi cửa hàng</th>
                              <th>Mã cửa hàng</th>
                              <th>Tên cửa hàng</th>
                              <th>Tỉnh thành</th>
                              <th>Shift Code</th>
                              <th>Shift Hour</th>
                              <th>Shift Start</th>
                              <th>Shift End</th>
                              <th>Nhân sự</th>
                              <th>Service</th>
                              <th>Remark</th>
                              <th>Báo cáo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BigC001</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>Thành phố Hồ Chí Minh</td>
                              <td>1</td>
                              <td>6</td>
                              <td>3:00 CH</td>
                              <td>9:00 CH</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu6"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu6"
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
                                  </div>
                                </div>
                              </td>

                              <td>Roaming in store</td>
                              <td>Line nước mắm</td>
                              <td>
                                <button className="btn btn-info">
                                  Download
                                </button>
                              </td>
                            </tr>
                            {/* <tr>
                              <th scope="row">2</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BIG-C MIỀN AN LẠC</td>
                              <td>2</td>
                              <td>29/09/2019</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu7"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu7"
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
                                    id="dropdownMenu8"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu8"
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
                                  </div>
                                </div>
                                <img
                                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                  alt="Avatar"
                                  className="avatar"
                                />
                              </td>
                              <td />
                              <td>BigC</td>
                              <td>
                                <button className="btn btn-info">
                                  Download
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>1</td>
                              <td>29/09/2019</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu9"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu9"
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
                                  </div>
                                </div>
                              </td>
                              <td />
                              <td>BigC</td>
                              <td>
                                <button className="btn btn-info">
                                  Download
                                </button>
                              </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* pagination */}
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="asd">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Next
                        </a>
                      </li>
                    </ul>
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

export default OnProgressProjects;
