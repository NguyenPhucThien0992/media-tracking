import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import { NavLink } from "react-router-dom";
import Breadcum from "./../Breadcum/Breadcum";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/app";
import banks from "./../../common/banks/banks";
import provinces from "./../../common/province/provinces";

class ProfileEmployee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, phoneNumber, bankName, province, registerWork } = this.props;

    return (
      <Fragment>
        <Breadcum Menu="Nhân sự" SubMenu="Nhân viên" />
        <div class="container emp-profile">
          <div className="card">
            <div className="card-body">
              <form method="post">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img
                        src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                        alt=""
                        style={{ width: "300px", height: "300px" }}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h5>
                        {user && user !== undefined
                          ? user.firstName.concat(" ", user.lastName)
                          : null}
                      </h5>
                      <h6>Director</h6>
                      {/* <p class="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p> */}
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Thông tin cá nhân
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-2">
                    {/* <NavLink to="/human/details" class="btn btn-primary">
                      Sửa chức vụ
                    </NavLink> */}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addNewEmployee"
                    >
                      Sửa chức vụ
                    </button>
                    <div
                      className="modal fade"
                      id="addNewEmployee"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="addNewEmployee"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addNewEmployee">
                              Sửa chức vụ
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
                            Vui lòng chọn chức vụ cho nhân viên
                          </div>
                          <div className="col-sm-8 offset-2 dropdown-area">
                            <select name="account" class="form-control mb-3">
                              <option>Director</option>
                              <option>Manager</option>
                              <option> Teamleader</option>
                              <option>Field Operator</option>
                            </select>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                              Sửa
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-work"></div>
                  </div>
                  <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="row">
                          <div class="col-md-3">
                            <label>Họ (Last name):</label>
                          </div>
                          <div class="col-md-3">
                            <p>
                              {user && user !== undefined
                                ? user.firstName
                                : null}
                            </p>
                          </div>
                          <div class="col-md-3">
                            <label>Tên (First name):</label>
                          </div>
                          <div class="col-md-3">
                            <p>
                              {user && user !== undefined
                                ? user.lastName
                                : null}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Ngày sinh:</label>
                          </div>
                          <div class="col-md-6">
                            <p>Not available</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Số điện thoại</label>
                          </div>
                          <div class="col-md-6">
                            <p>{phoneNumber}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Giới tính</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined ? user.gender : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Email:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined ? user.email : null}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Địa chỉ:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined ? user.address : null}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Chứng minh nhân dân:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.identityNumber
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Chiều cao (cm):</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.heightParam
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Cân nặng(kg):</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.weightParam
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Mã số thuế:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.taxNumber
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Số tài khoản ngân hàng:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.bankNumber
                                : null}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Tên ngân hàng:</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {bankName && bankName !== undefined
                                ? bankName
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Chi nhánh ngân hàng</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {user && user !== undefined
                                ? user.bankBranch
                                : null}
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Nơi đăng kí làm việc</label>
                          </div>
                          <div class="col-md-6">
                            <span class="badge badge-primary">
                              {registerWork && registerWork !== undefined
                                ? registerWork
                                : null}
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3"></div>
                          <div class="col-md-6">
                            <span
                              class="badge badge-primary"
                              style={{ marginRight: "10px" }}
                            >
                              Quận 5 ,
                            </span>
                            <span
                              class="badge badge-primary"
                              style={{ marginRight: "10px" }}
                            >
                              Quận 6 ,
                            </span>
                            <span
                              class="badge badge-primary"
                              style={{ marginRight: "10px" }}
                            >
                              Quận 7
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapState = state => {
  var allUsers, userUid, user, phoneNumber, bankName, province, registerWork;
  if (
    state.firestore.ordered.testConnectDb &&
    state.firestore.ordered.testConnectDb !== null
  ) {
    allUsers = state.firestore.ordered.testConnectDb;
  }
  if (state.firebase.auth && state.firebase.auth.uid !== null) {
    userUid = state.firebase.auth.uid;
  }

  if (allUsers && allUsers != null) {
    if (userUid && userUid !== null) {
      allUsers.forEach(item => {
        if (item.uid === userUid) {
          user = item;
        }
      });
    }
  }

  if (
    state.firebase.auth.phoneNumber &&
    state.firebase.auth.phoneNumber !== null
  ) {
    phoneNumber = state.firebase.auth.phoneNumber;
    phoneNumber = phoneNumber.substring(3, 12);
    phoneNumber = "0".concat(phoneNumber);
  } else {
    phoneNumber = null;
  }

  if (user && user !== null) {
    banks.forEach(item => {
      if (item.key === user.bankName) {
        return (bankName = item.text);
      }
    });
  } else {
    bankName = null;
  }
  if (user && user !== null) {
    provinces.forEach(item => {
      if (item.key === user.provinceBank) {
        return (province = item.text);
      }
    });
  } else {
    bankName = null;
  }
  if (user && user !== null) {
    provinces.forEach(item => {
      if (item.key === user.registerWork) {
        return (registerWork = item.text);
      }
    });
  } else {
    registerWork = null;
  }
  return {
    auth: state.firebase.auth,
    authReducer: state.authReducer,
    users: state.firestore.ordered.testConnectDb,
    user: user,
    phoneNumber: phoneNumber,
    bankName: bankName,
    province: province,
    registerWork: registerWork
  };
};
export default compose(
  firestoreConnect([
    {
      collection: "testConnectDb"
    }
  ]),
  connect(
    mapState,
    null
  )
)(ProfileEmployee);
