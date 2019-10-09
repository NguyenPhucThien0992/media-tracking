import React, { Component, Fragment } from "react";
import Breadcum from "./../Breadcum/Breadcum";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

class Forms extends Component {
  render() {
    const { day_off } = this.props;
    let form_approved = null;
    let form_waiting = null;
    console.log("day off", day_off);

    if (day_off && day_off.length >= 1) {
      var index = 0;
      form_approved = day_off.map((day, key) => {
        var time_off = new Date(day.time.seconds * 1000);

        if (day.status === 1) {
          index = index + 1;
          return (
            <tr>
              <th key={key}>{index}</th>
              <th>{day.employee_name}</th>
              <th>{day.project_name}</th>
              <th>{day.reason}</th>
              <th>{`${time_off.getDate()}/${time_off.getMonth()}/${time_off.getFullYear()}`}</th>
              <th>{day.type}</th>
              <th>
                <span class="badge badge-pill badge-success">Chấp nhận</span>
              </th>
            </tr>
          );
        }
      });
    }
    if (day_off && day_off.length >= 1) {
      var index = 0;
      form_waiting = day_off.map((day, key) => {
        var time_off = new Date(day.time.seconds * 1000);

        if (day.status === 2) {
          index = index + 1;
          return (
            <tr>
              <th key={key}>{index}</th>
              <th>{day.employee_name}</th>
              <th>{day.project_name}</th>
              <th>{day.reason}</th>
              <th>{`${time_off.getDate()}/${time_off.getMonth()}/${time_off.getFullYear()}`}</th>
              <th>{day.type}</th>
              <th>
                <span class="badge badge-primary">Chờ duyệt</span>
              </th>
            </tr>
          );
        }
      });
    }
    return (
      <Fragment>
        <Breadcum Menu="Đơn từ" SubMenu="Quản lý nghỉ phép" />

        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#approved-list"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Danh sách chấp nhận
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#waiting-approved-list"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Danh sách chờ duyệt
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="approved-list"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Họ tên</th>
                          <th>Tên dự án</th>
                          <th>Lí do</th>
                          <th>Thời gian nghỉ</th>
                          <th>Loại phép</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>{form_approved}</tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="waiting-approved-list"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Họ tên</th>
                          <th>Tên dự án</th>
                          <th>Lí do</th>
                          <th>Thời gian nghỉ</th>
                          <th>Loại phép</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>{form_waiting}</tbody>
                    </table>
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

const mapState = state => {
  var uid = state.firebase.auth.uid;
  var application = state.firestore.ordered.application;
  var day_off = [];

  if (application && application !== null) {
    application.forEach(item => {
      if (item.user_id === uid) {
        day_off.push(item);
      }
    });
  }

  return {
    day_off: day_off
  };
};
export default compose(
  firestoreConnect([
    {
      collection: "application"
    }
  ]),
  connect(
    mapState,
    null
  )
)(Forms);
