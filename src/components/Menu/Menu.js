import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/app";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAvatar:
        "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
    };
  }

  getAvatar = uid => {
    const storage = firebase.storage().ref();
    storage
      .child(`users/${uid}/avatar.png`)
      .getDownloadURL()
      .then(url => {
        this.setState({
          menuAvatar: url
        });
      })
      .catch(error => {});
  };
  render() {
    const { auth } = this.props;
    if (auth && auth.uid !== null) {
      this.getAvatar(auth.uid);
    }
    return (
      <nav className="side-navbar">
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar">
            <NavLink to="/human/profile">
              <img
                src={this.state.menuAvatar}
                alt="..."
                className="img-fluid rounded-circle"
              />
            </NavLink>
          </div>
          <div className="title">
            <h1 className="h4">Media Tracking</h1>
            <p>OMG company</p>
          </div>
        </div>
        <ul className="list-unstyled">
          <li style={{ display: "inline-block" }}>
            <i className="icon-home" style={{ marginLeft: "15px" }} />
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none",
                paddingLeft: "5px"
              }}
              to="/"
            >
              Công việc
            </NavLink>
          </li>
          <li style={{ display: "inline-block" }}>
            <i className="icon-home" style={{ marginLeft: "15px" }} />
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none",
                paddingLeft: "5px"
              }}
              to="/report-timekeeping"
            >
              Báo cáo chấm công
            </NavLink>
          </li>
          <li style={{ display: "inline-block" }}>
            <i className="icon-home" style={{ marginLeft: "15px" }} />
            <NavLink
              style={{
                display: "inline-block",
                textDecoration: "none",
                paddingLeft: "5px"
              }}
              to="/forms"
            >
              Đơn từ
            </NavLink>
          </li>
          <li>
            <a href="#Observe" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-user-o" aria-hidden="true" />
              Giám sát
            </a>
            <ul id="Observe" className="collapse list-unstyled ">
              <li>
                <NavLink to="/Observe/Checker">Chấm công</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/Employee">Nhân viên</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/Report">Thông báo</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/Projects">Dự án</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/Stores">Cửa hàng</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/SubForms">Đơn từ</NavLink>
              </li>
              <li>
                <NavLink to="/Observe/Report">Báo cáo</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <a href="#Admin" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-user-o" aria-hidden="true" />
              Giám sát
            </a>
            <ul id="Admin" className="collapse list-unstyled ">
              <li>
                <NavLink to="/admin/manage-employee">Quản lý nhân viên</NavLink>
              </li>
              <li>
                <NavLink to="/admin/manage-account">Quản lý tài khoản</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#GeneralAdmin"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa fa-user-o" aria-hidden="true" />
              General Admin
            </a>
            <ul id="GeneralAdmin" className="collapse list-unstyled ">
              <li>
                <NavLink to="/generaladmin/manage-agency">
                  Quản lý agency
                </NavLink>
              </li>
              <li>
                <NavLink to="/generaladmin/manage-user">Quản lý user</NavLink>
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="#Project" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-folder-o" aria-hidden="true" />
              Dự án
            </a>
            <ul id="Project" className="collapse list-unstyled ">
              <li>
                <NavLink to="/all-project">Tổng dự án</NavLink>
              </li>
              <li>
                <NavLink to="/template">Biểu mẫu</NavLink>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <a href="#Human" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-user-o" aria-hidden="true" />
              Nhân sự
            </a>
            <ul id="Human" className="collapse list-unstyled ">
              <li>
                <NavLink to="/human">Nhân viên</NavLink>
              </li>
            </ul>
          </li> */}
          {/* 
          <li>
            <a href="#TimeChecker" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-calendar-o" aria-hidden="true" />
              Chấm công
            </a>
            <ul id="TimeChecker" className="collapse list-unstyled ">
              <li>
                <NavLink to="/checker-table">Bảng chấm công</NavLink>
              </li>
              <li>
                <NavLink to="/checker-table1">Bảng chấm công 2</NavLink>
              </li>
              <li>
                <NavLink to="/on-working">Đang làm việc</NavLink>
              </li>
            </ul>
          </li> */}

          {/* <li>
            <a href="#DayOff" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-paper-plane-o" aria-hidden="true" />
              Nghỉ phép
            </a>
            <ul id="DayOff" className="collapse list-unstyled ">
              <li>
                <NavLink to="/day-off">Quản lý nghỉ phép</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#SystemAdmin" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-snowflake-o" aria-hidden="true" />
              Admin
            </a>
            <ul id="SystemAdmin" className="collapse list-unstyled ">
              <li>
                <NavLink to="/admin">Bảng điều khiển</NavLink>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    );
  }
}
const mapState = state => {
  return {
    auth: state.firebase.auth,
    authReducer: state.authReducer
  };
};

export default connect(
  mapState,
  null
)(Menu);
