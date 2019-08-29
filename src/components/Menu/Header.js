import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <nav className="navbar">
            <div className="search-box">
              <button className="dismiss">
                <i className="icon-close" />
              </button>
              <form id="searchForm" action="#" role="search">
                <input
                  type="search"
                  placeholder="Nhập từ khóa cần tìm...."
                  className="form-control"
                />
              </form>
            </div>
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
                <div className="navbar-header">
                  <a
                    href="index.html"
                    className="navbar-brand d-none d-sm-inline-block"
                  >
                    {/* <div className="brand-text d-none d-lg-inline-block">
                      <span>Bootstrap </span>
                      <strong>Dashboard</strong>
                    </div> */}
                    <div className="brand-text d-none d-sm-inline-block d-lg-none">
                      <strong>BD</strong>
                    </div>
                  </a>
                  <a id="toggle-btn" href="#sdf" className="menu-btn active">
                    <span />
                    <span />
                    <span />
                  </a>
                </div>

                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                  <li className="nav-item d-flex align-items-center">
                    <small style={{ color: "pink", marginRight: "20px" }}>
                      Tài khoản của bạn còn 365 ngày
                    </small>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a id="search" href="#sdf">
                      <i className="icon-search" />
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      id="notifications"
                      rel="nofollow"
                      data-target="#"
                      href="#sdf"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link"
                    >
                      <i className="fa fa-bell-o" />
                      <span className="badge bg-red badge-corner">12</span>
                    </a>
                    <ul
                      aria-labelledby="notifications"
                      className="dropdown-menu"
                    >
                      <li>
                        <a rel="nofollow" href="#sf" className="dropdown-item">
                          <div className="notification">
                            <div className="notification-content">
                              <i className="fa fa-envelope bg-green" />
                              Bạn có 6 tin nhắn mới
                            </div>
                            <div className="notification-time">
                              <small>4 phút trước</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a rel="nofollow" href="#sdf" className="dropdown-item">
                          <div className="notification">
                            <div className="notification-content">
                              <i className="fa fa-twitter bg-blue" />
                              Bạn có thông báo xin nghỉ phép
                            </div>
                            <div className="notification-time">
                              <small>5 phút trước</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a rel="nofollow" href="#sdf" className="dropdown-item">
                          <div className="notification">
                            <div className="notification-content">
                              <i className="fa fa-upload bg-orange" />
                              Bạn có thông báo duyệt nhân sự
                            </div>
                            <div className="notification-time">
                              <small>10 phút trước</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="#sdfds"
                          className="dropdown-item all-notifications text-center"
                        >
                          <strong>Xem tất cả thông báo </strong>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      id="languages"
                      rel="nofollow"
                      data-target="#"
                      href="#asd"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link language dropdown-toggle"
                    >
                      <img src="/img/flags/16/VN.png" alt="English" />
                      <span className="d-none d-sm-inline-block">Viet Nam</span>
                    </a>
                    <ul aria-labelledby="languages" className="dropdown-menu">
                      <li>
                        <a rel="nofollow" href="#asd" className="dropdown-item">
                          <img
                            src="/img/flags/16/VN.png"
                            alt="English"
                            className="mr-2"
                          />
                          Viet Nam
                        </a>
                      </li>
                      <li>
                        <a rel="nofollow" href="#asd" className="dropdown-item">
                          <img
                            src="/img/flags/16/GB.png"
                            alt="English"
                            className="mr-2"
                          />
                          English
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/logout" className="nav-link logout">
                      <span className="d-none d-sm-inline">Đăng xuất</span>
                      <i className="fa fa-sign-out" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header;
