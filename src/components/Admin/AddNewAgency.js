import React, { Component, Fragment } from "react";
import Breadcum from "./../Breadcum/Breadcum";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddNewAgency extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Menu" SubMenu="Thêm mới agency" />
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Thông tin agency</h3>
            </div>

            <div className="card-body">
              <form className="form-horizontal">
                <div className="form-group row">
                  {/* Trụ sở agency */}
                  <label className="col-sm-3 form-control-label">
                    Trụ sở agency:
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Tên agency*/}
                  <label className="col-sm-3 form-control-label">
                    Tên agency:
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Email*/}
                  <label className="col-sm-3 form-control-label">
                    Email agency:
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Phone */}
                  <label className="col-sm-3 form-control-label">
                    Phone agency:
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Logo Agency */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Logo công ty dịch vụ:
                  </label>
                  <div className="col-sm-9">
                    <input
                      id="fileInput"
                      type="file"
                      className="form-control-file"
                    />
                  </div>
                  <div className="col-sm-8 offset-sm-4">
                    <img
                      src="https://www.omg-asia.com/_img/omg200_trans.png"
                      alt=""
                      className="avatar_cmnd"
                      style={{ backgroundColor: "black" }}
                    />
                  </div>
                  <div class="line" />
                  {/* Mã số thuế */}
                  <label className="col-sm-3 form-control-label">
                    Mã số thuế agency:
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />

                  {/* Tài khoản agency */}
                  <label className="col-sm-3 form-control-label">
                    Thông tin người đại diện:
                  </label>
                  <div className="col-sm-9"></div>
                  <div class="line" />
                  {/* tên đăng nhập */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Tên đăng nhập:
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* mật khẩu */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Mật khẩu
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Họ tên người đại diện */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Họ tên người đại diện:
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* hình chân dung */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Hình chân dung
                  </label>
                  <div className="col-sm-7">
                    <img
                      src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                      alt=""
                      className="avatar_cmnd"
                      style={{ backgroundColor: "black" }}
                    />
                  </div>
                  <div class="line" />
                  {/* SDT người đại diện */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Số điện thoại người đại diện:
                  </label>
                  <div className="col-sm-7">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* email ng ười đai diện*/}
                  <label className="col-sm-3 offset-2 form-control-label">
                    Email người đại diện:
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* CMND người đại diện */}
                  <label className="col-sm-3 offset-2 form-control-label">
                    CMND người đại diện:
                  </label>
                  <div className="col-sm-7">
                    <input type=" number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Ngày bắt đầu */}
                  <label className="col-sm-3 form-control-label">
                    Ngày bắt đâu
                  </label>
                  <div className="col-sm-9">
                    <DatePicker
                      placeholderText="Ngày bắt đầu"
                      value="03-30-2019"
                    ></DatePicker>
                  </div>
                  <div class="line" />
                  {/* Ngày kết thúc */}
                  <label className="col-sm-3 form-control-label">
                    Ngày kết thúc
                  </label>
                  <div className="col-sm-9">
                    <DatePicker
                      placeholderText="Ngày kết thúc"
                      value="03-30-2020"
                    ></DatePicker>
                  </div>
                  <div class="line" />
                </div>

                <div className="col-4 offset-8">
                  <NavLink
                    to="/admin"
                    className="btn btn-warning"
                    style={{ marginRight: "5px" }}
                  >
                    Hủy bỏ
                  </NavLink>
                  <button className="btn btn-success">Thêm mới</button>
                  <button className="btn btn-danger">Đặt lại mật khẩu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddNewAgency;
