import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import { NavLink } from "react-router-dom";
import Breadcum from "./../Breadcum/Breadcum";
import "./../../styles/Admin/AgencyDetails.css";
class AgencyDetailed extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Admin" SubMenu="Chi tiết agency" />
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body no-padding">
              <div className="col-4 offset-4">
                <img
                  src="http://bestplus.vn/Userfiles/Upload/images/bestplus_vn-unilever_screen-shot-logo-wallpaper.png"
                  alt="person"
                  class="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="col-8 offset-2">
                {/* Trụ sở */}
                <div className="row">
                  <div className="col-md-4 left-title">Trụ sở agency:</div>
                  <div className="col-md-8 right-title">
                    A2-3, Khu công nghiệp Tây Bắc Củ Chi, Huyện Củ Chi, Tp Hồ
                    Chí Minh
                  </div>
                </div>
                {/* Agency name */}
                <div className="row">
                  <div className="col-md-4 left-title">Tên agency:</div>
                  <div className="col-md-8 right-title">
                    Công ty TNHH Unilever Việt Nam
                  </div>
                </div>
                {/* Email agency */}
                <div className="row">
                  <div className="col-md-4 left-title">Email agency:</div>
                  <div className="col-md-8 right-title">
                    unilevervietnam@uni.com.vn
                  </div>
                </div>
                {/* Phone agency */}
                <div className="row">
                  <div className="col-md-4 left-title">Phone agency</div>
                  <div className="col-md-8 right-title">0785922827</div>
                </div>

                {/* Tax agency */}
                <div className="row">
                  <div className="col-md-4 left-title">Mã số thuế agency:</div>
                  <div className="col-md-8 right-title">25456465654</div>
                </div>
                {/* Thông tin người đại diện */}
                <div className="row">
                  <div className="col-md-4 left-title">
                    Thông tin người đại diện
                  </div>
                </div>
                {/* tên đăng nhập */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">
                    Tên đăng nhập:
                  </div>
                  <div className="col-md-8 right-title">UnileverAdmin</div>
                </div>
                {/* Mật khẩu */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">Mật khẩu:</div>
                  <div className="col-md-8 right-title">*********</div>
                </div>

                {/* Họ tên */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">Họ tên:</div>
                  <div className="col-md-8 right-title">Nguyễn Phúc Thiện</div>
                </div>
                {/* hình chân dung */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">
                    Hình chân dung
                  </div>
                  <div className="col-md-8 right-title">
                    <img
                      src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                      alt=""
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                </div>
                {/* Số điện thoại */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">
                    Số điện thoại:
                  </div>
                  <div className="col-md-8 right-title">0785922827</div>
                </div>
                {/* Email */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">Email:</div>
                  <div className="col-md-8 right-title">
                    nguyenphucthien0992@gmail.com
                  </div>
                </div>
                {/* CMND */}
                <div className="row">
                  <div className="col-md-3 offset-1 left-title">CMND</div>
                  <div className="col-md-8 right-title">132364313</div>
                </div>
                {/* Ngày bắt đầu */}
                <div className="row">
                  <div className="col-md-4 left-title">Ngày bắt đầu</div>
                  <div className="col-md-8 right-title">02-02-2019</div>
                </div>
                {/* Ngày kết thúc */}

                <div className="row">
                  <div className="col-md-4 left-title">Ngày kết thúc</div>
                  <div className="col-md-8 right-title">02-02-2020</div>
                </div>
                {/* TLoại tài khoản*/}
                <div className="row">
                  <div className="col-md-4 left-title">Loại tài khoản:</div>
                  <div className="col-md-8 right-title">Cơ bản</div>
                </div>
                {/* Tình trạng */}
                <div className="row">
                  <div className="col-md-4 left-title">Tình trạng:</div>
                  <div className="col-md-8 right-title">Đang hoạt động</div>
                </div>
                {/* Tổng tài khoản */}
                <div className="row">
                  <div className="col-md-4 left-title">Tổng tài khoản:</div>
                  <div className="col-md-8 right-title">100</div>
                </div>
                {/* Tổng tài khoản đang dùng */}
                <div className="row">
                  <div className="col-md-4 left-title">Tổng tài đang dùng:</div>
                  <div className="col-md-8 right-title">30</div>
                </div>
                {/* tổng tài khoản còn lại */}
                <div className="row">
                  <div className="col-md-4 left-title">
                    Tổng tài khoản còn lại:
                  </div>
                  <div className="col-md-8 right-title">70</div>
                </div>
              </div>

              <div className="col-md-3 offset-9">
                <NavLink to="/admin/add-new-agency" className="btn btn-primary">
                  Cập nhật
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AgencyDetailed;
