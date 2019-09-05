import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <nav className="side-navbar">
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar">
            <NavLink to="/human/profile">
              <img
                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
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
          <li className="active">
            <a href="#DashBoard" data-toggle="collapse" aria-expanded="false">
              <i className="icon-home" />
              Bảng Điều Khiển
            </a>
            <ul id="DashBoard" className="collapse list-unstyled ">
              <li>
                <NavLink to="/">Thống kê</NavLink>
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="#General" data-toggle="collapse" aria-expanded="false">
              <i className="icon-home" />
              Tổng quan công ty
            </a>
            <ul id="General" className="collapse list-unstyled ">
              <li>
                <NavLink to="/overview-employee">Tổng quan nhân sự</NavLink>
              </li>
              <li>
                <NavLink to="/overview-time">Tổng quan thời gian</NavLink>
              </li>
            </ul>
          </li> */}
          <li>
            <a href="#Project" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-folder-o" aria-hidden="true" />
              Dự án
            </a>
            <ul id="Project" className="collapse list-unstyled ">
              {/* <li>
                <NavLink to="/create-project">Tạo dự án</NavLink>
              </li> */}
              <li>
                <NavLink to="/all-project">Tổng dự án</NavLink>
              </li>
              <li>
                <NavLink to="/template">Biểu mẫu</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#Human" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-user-o" aria-hidden="true" />
              Nhân sự
            </a>
            <ul id="Human" className="collapse list-unstyled ">
              <li>
                <NavLink to="/human">Nhân viên</NavLink>
              </li>
            </ul>
          </li>

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
              {/* <li>
                <NavLink to="/on-working">Đang làm việc</NavLink>
              </li> */}
            </ul>
          </li>

          <li>
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
              <i class="fa fa-snowflake-o" aria-hidden="true" />
              Admin
            </a>
            <ul id="SystemAdmin" className="collapse list-unstyled ">
              <li>
                <NavLink to="/admin">Bảng điều khiển</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
