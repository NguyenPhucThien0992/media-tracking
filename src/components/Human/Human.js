import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import { NavLink } from "react-router-dom";
import Breadcum from "./../Breadcum/Breadcum";

class Human extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Nhân sự" SubMenu="Nhân viên" />
        <section className="dashboard-counts no-padding-bottom">
          <div className="container-fluid">
            <div className="row bg-white has-shadow">
              <div className="col-xl-6 col-sm-6">
                <div className="item d-flex align-items-center">
                  {/* <NavLink
                    to="/human/details"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#addEmployee"
                  >
                    Tạo mới
                  </NavLink> */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">Tìm kiếm nhân sự mới</h3>
                    </div>
                    <div className="card-body">
                      <form className="form-inline">
                        <div className="form-group">
                          <label for="inlineFormInput" className="sr-only">
                            Số điện thoại
                          </label>
                          <input
                            id="inlineFormInput"
                            type="text"
                            placeholder="Số điện thoại"
                            className="mr-3 form-control"
                          />
                        </div>

                        <div className="form-group">
                          <NavLink
                            to="/human/search/details"
                            className="btn btn-success"
                          >
                            Tìm kiếm
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    id="addEmployee"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="addEmployee"
                    aria-hidden="true"
                    className="modal fade text-left"
                  >
                    <div role="document" className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 id="addEmployee1" className="modal-title">
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
                            {/* <div className="form-group">
                              <label>Loại nhân viên</label>
                              <select className="form-control">
                                <option value="0">Nhân viên công ty</option>
                                <option value="1">
                                  Nhân viên hệ thống website
                                </option>
                              </select>
                            </div> */}
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
                                <option value="0">Director</option>
                                <option value="1">Manager</option>
                                <option value="2">Team Leader</option>
                                <option value="3">Field Operator</option>
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
                          <button type="button" className="btn btn-primary">
                            Lưu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6">
                <div className="item d-flex align-items-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filters
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#gfh">
                        A-Z
                      </a>
                      <a className="dropdown-item" href="#fgh">
                        Vị trí
                      </a>
                      <a className="dropdown-item" href="#fgh">
                        Z-A
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard-counts no-padding-bottom">
          <div className="container-fluid">
            <div className="row bg-white has-shadow">
              {/* item 1 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <NavLink to="/human/profile" className="feed-profile">
                            <img
                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                              alt="person"
                              className="img-fluid rounded-circle"
                            />
                          </NavLink>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span> Team Leader </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger "
                          data-target="#deleteEmployee1"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal xóa 1*/}
              <div
                className="modal fade"
                id="deleteEmployee1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="deleteEmployee1"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="deleteEmployee1">
                        Xóa nhân viên
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
                      Bạn có chắc muốn xóa nhân viên này!
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
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <a href="#dfgdfg" className="feed-profile">
                            <NavLink
                              to="/human/profile"
                              className="feed-profile"
                            >
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt="person"
                                className="img-fluid rounded-circle"
                              />
                            </NavLink>
                          </a>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span>Director </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-target="#deleteEmployee2"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal xóa 2 */}
                <div
                  className="modal fade"
                  id="deleteEmployee2"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="deleteEmployee2"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmployee2">
                          Xóa nhân viên
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
                        Bạn có chắc muốn xóa nhân viên này!
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
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* item 3 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <a href="#dfgdfg" className="feed-profile">
                            <NavLink
                              to="/human/profile"
                              className="feed-profile"
                            >
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt="person"
                                className="img-fluid rounded-circle"
                              />
                            </NavLink>
                          </a>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span>Director </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-target="#deleteEmployee3"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal xóa 3 */}
                <div
                  className="modal fade"
                  id="deleteEmployee3"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="deleteEmployee3"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmployee3">
                          Xóa nhân viên
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
                        Bạn có chắc muốn xóa nhân viên này!
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
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <a href="#dfgdfg" className="feed-profile">
                            <NavLink
                              to="/human/profile"
                              className="feed-profile"
                            >
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt="person"
                                className="img-fluid rounded-circle"
                              />
                            </NavLink>
                          </a>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span>Field Operator </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ccol-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-target="#deleteEmployee4"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal xóa 4 */}
                <div
                  className="modal fade"
                  id="deleteEmployee4"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="deleteEmployee4"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmployee4">
                          Xóa nhân viên
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
                        Bạn có chắc muốn xóa nhân viên này!
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
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 5 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <a href="#dfgdfg" className="feed-profile">
                            <NavLink
                              to="/human/profile"
                              className="feed-profile"
                            >
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt="person"
                                className="img-fluid rounded-circle"
                              />
                            </NavLink>
                          </a>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span>Manager </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-target="#deleteEmployee5"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal xóa 5 */}
                <div
                  className="modal fade"
                  id="deleteEmployee5"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="deleteEmployee5"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmployee5">
                          Xóa nhân viên
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
                        Bạn có chắc muốn xóa nhân viên này!
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
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 6 */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="daily-feeds card">
                  <div className="card-body no-padding">
                    <div className="item">
                      <div className="feed d-flex justify-content-between">
                        <div className="feed-body d-flex justify-content-between">
                          <a href="#dfgdfg" className="feed-profile">
                            <NavLink
                              to="/human/profile"
                              className="feed-profile"
                            >
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt="person"
                                className="img-fluid rounded-circle"
                              />
                            </NavLink>
                          </a>
                          <div className="content">
                            <h5>Nguyễn Văn A</h5>
                            <span>FO </span>
                            <div className="full-date">
                              <span>
                                <i
                                  className="fa fa-envelope-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <small>nguyenvana@gmail.com</small>
                            </div>
                            <div className="full-date">
                              <span>
                                <i className="fa fa-phone" aria-hidden="true" />
                              </span>
                              <small>078521497</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 offset-md-5 edit-employee">
                        <NavLink to="/human/profile" className="btn btn-info">
                          Sửa
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          data-target="#deleteEmployee6"
                          data-toggle="modal"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal xóa 6 */}
                <div
                  className="modal fade"
                  id="deleteEmployee6"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="deleteEmployee6"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmployee6">
                          Xóa nhân viên
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
                        Bạn có chắc muốn xóa nhân viên này!
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
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="as#" tabIndex="-1">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="asd#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="as#">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="as#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="asd#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Human;
