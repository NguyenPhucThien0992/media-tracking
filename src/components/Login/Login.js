import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loginPhone } from "./../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import { LOGIN_PHONE_SUCCESS_MESSAGE } from "./../../store/constant/const";
class Login extends Component {
  state = {
    phoneNumber: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onLoginPhone = e => {
    const { loginPhone } = this.props;
    let rawPhoneNumber = this.state.phoneNumber;
    let tmpPhoneNumber = rawPhoneNumber.substring(1, 10);
    let phoneNumber = "+84".concat(tmpPhoneNumber);
    loginPhone(phoneNumber);
  };
  render() {
    const { authReducer } = this.props;

    if (
      authReducer &&
      authReducer.loginMessage === LOGIN_PHONE_SUCCESS_MESSAGE
    ) {
      return (
        <Redirect
          to={{
            pathname: "/login/otp"
          }}
        ></Redirect>
      );
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
                <div id="recaptcha-container"></div>
                <div className="col-lg-6 bg-white">
                  <div className="form d-flex align-items-center">
                    <div className="content">
                      <form method="post" className="form-validate">
                        <div className="form-group">
                          <input
                            id="phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            required
                            className="input-material"
                            onChange={this.handleChange}
                          />
                          <label
                            htmlFor="login-username"
                            className="label-material"
                          >
                            Số điện thoại
                          </label>
                        </div>
                        <div className="form-group"></div>
                      </form>
                      <button
                        className="btn btn-primary"
                        onClick={this.onLoginPhone}
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="captcha"></div>
        </div>
      </Fragment>
    );
  }
}

const mapState = state => {
  console.log("all login state", state);
  return {
    authReducer: state.authReducer,
    firebaseAuth: state.firebase.auth
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    loginPhone: phoneNumber => {
      dispatch(loginPhone(phoneNumber));
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Login);
