import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
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
                            id="login-username"
                            type="text"
                            name="loginUsername"
                            required
                            data-msg="Please enter your username"
                            className="input-material"
                          />
                          <label
                            htmlFor="login-username"
                            className="label-material"
                          >
                            Số điện thoại
                          </label>
                        </div>
                        <div className="form-group"></div>
                        <NavLink
                          id="login"
                          to="/login/otp"
                          className="btn btn-primary"
                        >
                          Đăng nhập
                        </NavLink>
                      </form>
                      <a href="adaasd" className="forgot-pass">
                        Quên mật khẩu?
                      </a>
                      <br />
                      <small>Bạn chưa có tài khoản? </small>
                      <NavLink to="/human/details" className="signup">
                        Đăng ký
                      </NavLink>
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
export default Login;
