import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Breadcum from "./../../../Breadcum/Breadcum";
import "./../../../../styles/Project/Project.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PrepareProjects extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Chi tiết dự án đang chuẩn bị" />
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
                  <div class="col-sm-12">
                    <div class="recent-updates card">
                      <div class="card-close">
                        <div class="dropdown">
                          <button
                            type="button"
                            id="closeCard6"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            class="dropdown-toggle"
                          >
                            <i class="fa fa-ellipsis-v"></i>
                          </button>
                          <div
                            aria-labelledby="closeCard6"
                            class="dropdown-menu dropdown-menu-right has-shadow"
                          >
                            <a
                              href="ewe"
                              data-toggle="modal"
                              data-target="#modify-general-info"
                              class="dropdown-item edit"
                            >
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                              Sửa
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-header">
                        <h3 class="h4">Thông tin chung dự án</h3>
                      </div>
                      <div class="card-body no-padding">
                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Tên dự án: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Project data -pg
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngành hàng </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Băng vệ sinh phụ nữ
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngày bắt đầu: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              09-30-2019
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngày kết thúc: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              02-02-2020
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Mô tả: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Không có
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal sửa thông tin chung */}
                <div
                  className="modal fade"
                  id="modify-general-info"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="modify-general-info"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modify-general-info">
                          Chỉnh sửa thông tin chung dự án
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
                        <div class="col-sm-12">
                          <div class="card">
                            <div class="card-body">
                              <form class="form-horizontal">
                                <div class="form-group row">
                                  <label class="col-sm-3 form-control-label">
                                    Tên dự án
                                  </label>
                                  <div class="col-sm-9">
                                    <input
                                      id="inputHorizontalSuccess"
                                      type="text"
                                      placeholder="Tên dự án"
                                      value="Project data-pg"
                                      class="form-control form-control-success"
                                    />
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-3 form-control-label">
                                    Ngành hàng
                                  </label>
                                  <div class="col-sm-9">
                                    <input
                                      id="inputHorizontalWarning"
                                      type="text"
                                      placeholder="Pasword"
                                      value="Băng vệ sinh phụ nữ"
                                      class="form-control form-control-warning"
                                    />
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-3 form-control-label">
                                    Ngày bắt đầu
                                  </label>
                                  <div class="col-sm-9">
                                    <DatePicker
                                      placeholderText="Ngày bắt đầu"
                                      value="03-30-2019"
                                    ></DatePicker>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-3 form-control-label">
                                    Ngày kết thúc
                                  </label>
                                  <div class="col-sm-9">
                                    {/* <input
                                      id="inputHorizontalWarning"
                                      type="text"
                                      placeholder="Pasword"
                                      value="02-02-2020"
                                      class="form-control form-control-warning"
                                    /> */}
                                    <DatePicker
                                      id="inputHorizontalWarning"
                                      placeholderText="Ngày bắt đầu"
                                      value="02-02-2020"
                                    ></DatePicker>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-3 form-control-label">
                                    Mô tả
                                  </label>
                                  <div class="col-sm-9">
                                    <input
                                      id="inputHorizontalWarning"
                                      type="textarea"
                                      placeholder="Pasword"
                                      value="Không có"
                                      class="form-control form-control-warning"
                                    />
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <div class="col-sm-9 offset-sm-3">
                                    <input
                                      type="submit"
                                      value="Lưu"
                                      class="btn btn-primary"
                                    />

                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Hủy
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <DatePicker placeholderText="Chọn ngày"></DatePicker>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card">
                    <div class="card-close">
                      <div class="dropdown">
                        <button
                          type="button"
                          id="closeCard6"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="dropdown-toggle"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          aria-labelledby="closeCard6"
                          class="dropdown-menu dropdown-menu-right has-shadow"
                        >
                          <NavLink
                            to="/all-project/modify-imported-store"
                            class="dropdown-item edit"
                          >
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                            Sửa cửa hàng
                          </NavLink>
                          <a
                            href="ds"
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#addNewJob"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                            Thêm mới công việc
                          </a>
                          <a
                            href="ds"
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#addNewRole"
                          >
                            <i class="fa fa-users" aria-hidden="true"></i>
                            Thêm mới vai trò
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4"> Thông tin dự án</h3>
                    </div>
                    <div className="card-body">
                      <div className="row table-checker">
                        <div className="table-wrapper">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Loại cửa hàng</th>
                                <th>Chuỗi cửa hàng</th>
                                <th>Mã cửa hàng</th>
                                <th>Tên cửa hàng</th>

                                <th>Shift Code</th>
                                <th>Shift Hour</th>
                                <th>Shift Start</th>
                                <th>Shift End</th>
                                <th>Nhân sự</th>
                                <th>Service</th>
                                <th>Remark</th>
                                <th>Hành động</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td className="table-store-brand">
                                  Supermarket
                                </td>
                                <td className="table-store-type">BigC</td>
                                <td className="table-store-code">
                                  <span>
                                    BigC001
                                    <span className="table-store-code-edit">
                                      <a
                                        href="fdsjk"
                                        data-toggle="modal"
                                        data-target="#editStoreCode"
                                      >
                                        <i
                                          class="fa fa-pencil-square-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </span>
                                  </span>
                                </td>
                                <td className="table-store-name">
                                  BIG-C MIỀN ĐÔNG
                                </td>

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
                                    {/* Modal add new employee for role */}
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
                                        <button
                                          className="btn btn-warning dropdown-item"
                                          data-toggle="modal"
                                          data-target="#editCurrentJob"
                                        >
                                          Sửa công việc
                                        </button>
                                        <button
                                          className="btn btn-danger dropdown-item"
                                          data-toggle="modal"
                                          data-target="#deletetJob"
                                        >
                                          Xóa công việc
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {/* Modal edit mã cửa hàng */}
                              <div
                                id="editStoreCode"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="editStoreCode"
                                aria-hidden="true"
                                className="modal fade text-left"
                              >
                                <div role="document" className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4
                                        id="editStoreCode"
                                        className="modal-title"
                                      >
                                        Sửa thông tin cửa hàng
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
                                          <label>
                                            Mã cửa hàng đã được nhập
                                          </label>
                                          <select
                                            className="custom-select"
                                            id="inputGroupSelect01"
                                          >
                                            <option selected>
                                              Vui lòng chọn...
                                            </option>
                                            <option value="1">BigC001</option>
                                            <option value="2">BigC002</option>
                                            <option value="3">BigC003</option>
                                          </select>
                                        </div>

                                        <div className="form-group">
                                          <label>
                                            Tên cửa hàng sau khi chọn
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Tên cửa hàng "
                                            value="Big C miền đông"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                          ></input>
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
                              {/* Modal xoa job */}
                              <div
                                id="deletetJob"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="deletetJob"
                                aria-hidden="true"
                                className="modal fade text-left"
                              >
                                <div role="document" className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4
                                        id="deletetJob"
                                        className="modal-title"
                                      >
                                        Xóa công việc
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
                                          <label>
                                            Bạn có chắc muốn xóa công việc này
                                          </label>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn btn-secondary"
                                      >
                                        Hủy
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
                              {/* Modal add new job */}
                              <div
                                id="addNewJob"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="addNewJob"
                                aria-hidden="true"
                                className="modal fade text-left"
                              >
                                <div role="document" className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4
                                        id="addNewJob"
                                        className="modal-title"
                                      >
                                        Thêm mới công việc
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
                                          <label>Loại cửa hàng</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập loại cửa hàng"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Chuỗi cửa hàng</label>
                                          <select>
                                            <option value="1">BIG C</option>
                                            <option value="2">COOP MART</option>
                                            <option value="3">LOTTE</option>
                                            <option value="4">EMART</option>
                                            <option value="5">
                                              MEGA MARKET
                                            </option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <label>Mã cửa hàng</label>
                                          <select>
                                            <option value="1">BIGC001</option>
                                            <option value="2">BIGC002</option>
                                            <option value="3">BIGC003</option>
                                            <option value="4">BIGC004</option>
                                            <option value="5">BIGC005</option>
                                          </select>
                                        </div>

                                        <div className="form-group">
                                          <label>Tên cửa hàng</label>
                                          <input
                                            type="text"
                                            disabled=""
                                            placeholder="Big C Miền Đông"
                                            class="form-control"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift code</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift code"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift hour</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift hour"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift start</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift start"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>Shift End</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập loại shift end"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>
                                            Số lượng nhân viên: PG role
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label className="modal-add-new-job">
                                            Vui lòng chọn nhân viên
                                          </label>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                              data-toggle="collapse"
                                              href="#collapsePgrole"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="collapsePgrole"
                                            />
                                          </div>
                                        </div>

                                        <div
                                          className="form-group collapse"
                                          id="collapsePgrole"
                                        >
                                          <label>
                                            Vui lòng nhập số điện thoại nhân
                                            viên
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>
                                            Số lượng nhân viên: SS role
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label className="modal-add-new-job">
                                            Vui lòng chọn nhân viên
                                          </label>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                              data-toggle="collapse"
                                              href="#collapseSsRole"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="collapseSsRole"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="form-group collapse"
                                          id="collapseSsRole"
                                        >
                                          <label>
                                            Vui lòng nhập số điện thoại nhân
                                            viên
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Service</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập service"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>Remark</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập remark"
                                            class="form-control form-control-success"
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
                                        Hủy
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
                              {/* Modal sửa công việc */}
                              <div
                                id="editCurrentJob"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="editCurrentJob"
                                aria-hidden="true"
                                className="modal fade text-left"
                              >
                                <div role="document" className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4
                                        id="editCurrentJob"
                                        className="modal-title"
                                      >
                                        Sửa công việc hiện tại
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
                                          <label>Loại cửa hàng</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập loại cửa hàng"
                                            value="Supermarket"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Chuỗi cửa hàng</label>
                                          <select value="1">
                                            <option value="1">BIG C</option>
                                            <option value="2">COOP MART</option>
                                            <option value="3">LOTTE</option>
                                            <option value="4">EMART</option>
                                            <option value="5">
                                              MEGA MARKET
                                            </option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <label>Mã cửa hàng</label>
                                          <select value="1">
                                            <option value="1">BIGC001</option>
                                            <option value="2">BIGC002</option>
                                            <option value="3">BIGC003</option>
                                            <option value="4">BIGC004</option>
                                            <option value="5">BIGC005</option>
                                          </select>
                                        </div>

                                        <div className="form-group">
                                          <label>Tên cửa hàng</label>
                                          <input
                                            type="text"
                                            disabled=""
                                            placeholder="Big C Miền Đông"
                                            value="Big C Miền Đông"
                                            class="form-control"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift code</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift code"
                                            value="1"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift hour</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift hour"
                                            value="6"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Shift start</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập shift start"
                                            value="3:00 CH"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>Shift End</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            value="9:00 CH"
                                            placeholder="Vui lòng nhập loại shift end"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>Số lượng PG</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            value="3"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                              data-toggle="collapse"
                                              href="#collapseAddPGRole"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="collapseAddPGRole"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="form-group"
                                          class="collapse"
                                          id="collapseAddPGRole"
                                        >
                                          <label>
                                            Vui lòng nhập số điện thoại nhân
                                            viên
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Số lượng SS</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            value="3"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                            />
                                          </div>
                                          <div class="client-avatar">
                                            <img
                                              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                              alt="..."
                                              class="img-fluid rounded-circle"
                                              data-toggle="collapse"
                                              href="#collapseAddSSRole"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="collapseAddSSRole"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="form-group"
                                          class="collapse"
                                          id="collapseAddSSRole"
                                        >
                                          <label>
                                            Vui lòng nhập số điện thoại nhân
                                            viên
                                          </label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="number"
                                            placeholder="Vui lòng nhập số lượng nhân viên cho công việc"
                                            class="form-control form-control-success"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label>Service</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập service"
                                            value="Roaming in store"
                                            class="form-control form-control-success"
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label>Remark</label>
                                          <input
                                            id="inputHorizontalSuccess"
                                            type="text"
                                            placeholder="Vui lòng nhập remark"
                                            value="Line nước mắm"
                                            class="form-control form-control-success"
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
                                        Hủy
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
                              {/* Modal thêm mới role */}
                              <div
                                id="addNewRole"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="addNewRole"
                                aria-hidden="true"
                                className="modal fade text-left"
                              >
                                <div role="document" className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4
                                        id="addNewRole"
                                        className="modal-title"
                                      >
                                        Thêm mới role
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
                                          <label>
                                            Vui lòng nhân tên vai trò mới
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Vui lòng nhập tên vai trò "
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                          ></input>
                                        </div>

                                        <div className="form-group">
                                          <label>
                                            Số lượng nhân viên mặc định
                                          </label>
                                          <input
                                            type="number"
                                            class="form-control"
                                            placeholder="Vui lòng nhập số lượng nhân viên mặc định"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                          ></input>
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
                            </tbody>
                          </table>
                        </div>
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

export default PrepareProjects;
