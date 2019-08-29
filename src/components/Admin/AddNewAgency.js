import React, { Component, Fragment } from "react";
import Breadcum from "./../Breadcum/Breadcum";
import { NavLink } from "react-router-dom";

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
                    Trụ sở công ty dịch vụ
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Tên agency*/}
                  <label className="col-sm-3 form-control-label">
                    Tên công ty dịch vụ
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Email*/}
                  <label className="col-sm-3 form-control-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Phone */}
                  <label className="col-sm-3 form-control-label">
                    Số điện thoại
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
                    Logo công ty dịch vụ
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
                    Số điện thoại
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />

                  {/* Tài khoản agency */}
                  <label className="col-sm-3 form-control-label">
                    Tài khoản công ty dịch vụ
                  </label>
                  <div className="col-sm-9">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8"></div>
                  </div>
                  <div class="line" />
                </div>
                {/* Ngày bắt đầu */}
                <label className="col-sm-3 form-control-label">
                  Ngày bắt đầu
                </label>
                <div className="col-sm-9">
                  <input type="number" className="form-control" />
                </div>
                <div className="line" />
                <div class="input-group date" data-date-format="dd.mm.yyyy">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="dd.mm.yyyy"
                  />
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                  </div>
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
