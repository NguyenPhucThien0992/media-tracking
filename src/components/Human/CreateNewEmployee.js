import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import Breadcum from "./../Breadcum/Breadcum";
class CreateNewEmployee extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Nhân sư" SubMenu="Chi tiết nhân viên" />
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Thông tin nhân viên</h3>
            </div>

            <div className="card-body">
              <form className="form-horizontal">
                <div className="form-group row">
                  {/* Họ tên */}
                  <label className="col-sm-3 form-control-label">
                    Họ và tên
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Chức vụ*/}
                  <label className="col-sm-3 form-control-label">Chức vụ</label>
                  <div className="col-sm-9">
                    <select className="form-control">
                      <option value="0">Director</option>
                      <option value="1">Manager</option>
                      <option value="2">Team Leader</option>
                      <option value="3">Field Operator</option>
                    </select>
                  </div>
                  <div class="line" />
                  {/* SDT */}
                  <label className="col-sm-3 form-control-label">
                    Số điện thoại
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* email */}
                  <label className="col-sm-3 form-control-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Dia chi */}
                  <label className="col-sm-3 form-control-label">Địa chỉ</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* CMND */}
                  <label className="col-sm-3 form-control-label">
                    Chứng minh nhân dân
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Hình chụp mặt trước cmnd */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Hình mặt trước cmnd
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
                      src="https://vcdn-thethao.vnecdn.net/2019/05/10/Untitled-3442-1557481595.jpg"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Hình chụp mặt sau cmnd */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Hình mặt sau cmnd
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
                      src="https://vcdn-thethao.vnecdn.net/2019/05/10/Untitled-3442-1557481595.jpg"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Chiều cao*/}
                  <label className="col-sm-3 form-control-label">
                    Chiều cao (cm)
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* cân nặng */}
                  <label className="col-sm-3 form-control-label">
                    Cân nặng (Kg)
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Hình chân dung */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Hình chân dung
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
                      src="https://vcdn-thethao.vnecdn.net/2019/05/10/Untitled-3442-1557481595.jpg"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Hình toàn thân */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Hình toàn thân
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
                      src="https://vcdn-thethao.vnecdn.net/2019/05/10/Untitled-3442-1557481595.jpg"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Mã số thuế */}
                  <label className="col-sm-3 form-control-label">
                    Mã số thuế
                  </label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Số tk ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Số tài khoản ngân hàng
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Tên ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Tên ngân hàng
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                  {/* Tỉnh ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Tỉnh/Thành phố ngân hàng
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div class="line" />
                </div>

                <div className="col-sm-2 offset-sm-10">
                  <button className="btn btn-success">Thêm mới</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateNewEmployee;
