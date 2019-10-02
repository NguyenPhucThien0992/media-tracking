import React, { Component, Fragment } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { confirmOtp } from "./../../store/actions/authAction";

import { CONFIRM_OTP_SUCCESS_MESSAGE } from "./../../store/constant/const";

class Otp extends Component {
  state = {
    otpCode: ""
  };
  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onConfirmOtp = () => {
    const { confirmOtp } = this.props;
    let otpCode = this.state.otpCode;
    let confirmationResult = this.props.authReducer.confirmationResult;

    confirmOtp(confirmationResult, otpCode);
  };

  render() {
    const { authReducer } = this.props;
    const confirmOtp = authReducer.confirmOtp;
    let isNewUser = null;

    if (typeof authReducer !== "undefined") {
      if (
        typeof authReducer.authenticationInfor !== "undefined" &&
        authReducer.authenticationInfor !== null
      ) {
        if (
          typeof authReducer.authenticationInfor.additionalUserInfo !==
            "undefined" &&
          authReducer.authenticationInfor.additionalUserInfo !== null
        ) {
          isNewUser =
            authReducer.authenticationInfor.additionalUserInfo.isNewUser;
        }
      } else {
        //
      }
    } else {
      //
    }

    if (confirmOtp && confirmOtp === CONFIRM_OTP_SUCCESS_MESSAGE) {
      if (isNewUser === false) {
        this.props.history.push("/create-new-member");
      } else if (isNewUser === true) {
        this.props.history.push("/");
      }
    }

    return (
      <Fragment>
        <div className="page login-page">
          <div className="container d-flex align-items-center">
            <div className="form-holder has-shadow">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info d-flex align-items-center">
                    <div className="content">
                      <div className="logo">
                        <h1>Media Tracking</h1>
                      </div>
                      <p>
                        Website này dùng cho mục đích quản lý nhân viên tham gia
                        các hoạt động quảng cáo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 bg-white">
                  <div className="form d-flex align-items-center">
                    <div className="content">
                      <form method="post" className="form-validate">
                        <div className="form-group">
                          <input
                            id="otpCode"
                            type="text"
                            name="loginUsername"
                            required
                            className="input-material"
                            onChange={this.onHandleChange}
                          />
                          <label
                            htmlFor="login-username"
                            className="label-material"
                          >
                            Nhập số OTP
                          </label>
                        </div>
                        <div className="form-group"></div>
                        <NavLink id="login" to="/" className="btn btn-primary">
                          Gửi
                        </NavLink>
                      </form>

                      <button onClick={this.onConfirmOtp}>Gui</button>
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
const mapState = state => {
  return {
    authReducer: state.authReducer
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    confirmOtp: (confirmationResult, otp) => {
      dispatch(confirmOtp(confirmationResult, otp));
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Otp);
