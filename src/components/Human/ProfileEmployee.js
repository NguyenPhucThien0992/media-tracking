import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import { NavLink } from "react-router-dom";
import Breadcum from "./../Breadcum/Breadcum";
class ProfileEmployee extends Component {
  render() {
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
                      <h5>Nguyễn Phúc Thiện</h5>
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
                    <NavLink to="/human/details" class="btn btn-primary">
                      Sửa thông tin
                    </NavLink>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-work">
                      {/* <p>WORK LINK</p>
                <a href="ad">Website Link</a>
                <br />
                <a href="asd">Bootsnipp Profile</a>
                <br />
                <a href="ads">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="ad">Web Designer</a>
                <br />
                <a href="asd">Web Developer</a>
                <br />
                <a href="asd">WordPress</a>
                <br />
                <a href="asd">WooCommerce</a>
                <br />
                <a href="ad">PHP, .Net</a>
                <br /> */}
                    </div>
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
                            <p>Nguyễn</p>
                          </div>
                          <div class="col-md-3">
                            <label>Tên (First name):</label>
                          </div>
                          <div class="col-md-3">
                            <p>Phúc Thiện</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Ngày sinh:</label>
                          </div>
                          <div class="col-md-6">
                            <p>29 - 09 - 1992</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Số điện thoại</label>
                          </div>
                          <div class="col-md-6">
                            <p>0785922827</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Giới tính</label>
                          </div>
                          <div class="col-md-6">
                            <p>Nam</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Email:</label>
                          </div>
                          <div class="col-md-6">
                            <p>nguyenphucthien0992@gmail.com</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Địa chỉ:</label>
                          </div>
                          <div class="col-md-6">
                            <p>Bình Chánh, Tp Hồ Chí Minh</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Chứng minh nhân dân:</label>
                          </div>
                          <div class="col-md-6">
                            <p>036489423</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Chiều cao (cm):</label>
                          </div>
                          <div class="col-md-6">
                            <p>173</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Cân nặng(kg):</label>
                          </div>
                          <div class="col-md-6">
                            <p>85</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Mã số thuế:</label>
                          </div>
                          <div class="col-md-6">
                            <p>036489423</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Số tài khoản ngân hàng:</label>
                          </div>
                          <div class="col-md-6">
                            <p>036489423</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <label>Tên ngân hàng:</label>
                          </div>
                          <div class="col-md-6">
                            <p>Vietcombank</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Chi nhánh ngân hàng</label>
                          </div>
                          <div class="col-md-6">
                            <p>Hồ Chí Minh</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <label>Nơi đăng kí làm việc</label>
                          </div>
                          <div class="col-md-6">
                            <span class="badge badge-primary">
                              Thành phố Hồ Chí Minh
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

export default ProfileEmployee;