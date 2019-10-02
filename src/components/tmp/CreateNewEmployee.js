import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import Breadcum from "./../Breadcum/Breadcum";
import "react-datepicker/dist/react-datepicker.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import TextInput from "./../../common/form/TextInput";
import DateInput from "./../../common/form/DateInput";
import SelectInput from "./../../common/form/SelectInput";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
const genderOption = [
  {
    key: "nam",
    text: "Nam",
    value: "nam"
  },
  {
    key: "nữ",
    text: "Nữ",
    value: "nữ"
  }
];
class CreateNewEmployee extends Component {
  state = {
    phoneNumber: "",
    fullName: "",
    email: ""
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("ASDas");
  };
  render() {
    const { auth } = this.props;

    return (
      <Fragment>
        <Breadcum Menu="Nhân sư" SubMenu="Chi tiết nhân viên" />
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Đăng ký tài khoản</h3>
              <h3>ádasdas</h3>
            </div>
            <div className="card-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                {/* Họ và tên */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">Họ:</label>
                  <Field
                    name="fullName"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập họ và tên"
                    className="form-control"
                  ></Field>
                </div>
                {/* Họ và tên */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">Họ:</label>
                  <Field
                    name="fullName"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập họ và tên"
                    className="form-control"
                  ></Field>
                </div>
                {/* Ngày tháng năm sinh */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Ngày tháng năm sinh:
                  </label>
                  <Field
                    name="title"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={DateInput}
                    placeholder="Vui lòng chọn ngày tháng năm sinh"
                    className="form-control"
                  ></Field>
                </div>
                {/* Số điện thoại */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Số điện thoại
                  </label>
                  <Field
                    name="phoneNumber"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập số điện thoại"
                    className="form-control"
                  ></Field>
                </div>
                {/* Giới tính */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Giới tính:
                  </label>
                  <Field
                    name="gender"
                    type="text"
                    options={category}
                    classNameDiv="col-sm-9"
                    multiple={false}
                    component={SelectInput}
                    placeholder="Vui lòng chọn giới tính"
                    className="form-control"
                  ></Field>
                </div>
                {/* Email*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">Email:</label>
                  <Field
                    name="email"
                    type="email"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập địa chỉ email"
                    className="form-control"
                  ></Field>
                </div>
              </form>
              <p>phân vùng chia</p>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  {/* Họ tên */}
                  {/* <label className="col-sm-3 form-control-label">
                    Họ và tên:
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.handleChange}
                      type="text"
                      id="fullName"
                      placeholder="Vui lòng nhập họ và tên"
                      className="form-control"
                    />
                  </div> */}
                  {/* <div class="line" /> */}
                  {/* Ngày tháng năm sinh */}
                  {/* <label className="col-sm-3 form-control-label">
                    Ngày tháng năm sinh:
                  </label>
                  <div className="col-sm-9">
                    <DatePicker
                      placeholderText="Ngày tháng năm sinh"
                      value="29-09-1992"
                    ></DatePicker>
                  </div>
                  <div class="line" /> */}
                  {/* Chức vụ*/}
                  {/* <label className="col-sm-3 form-control-label">Chức vụ</label>
                  <div className="col-sm-9">
                    <select className="form-control">
                      <option value="0">Director</option>
                      <option value="1">Manager</option>
                      <option value="2">Team Leader</option>
                      <option value="3">Field Operator</option>
                    </select>
                  </div>
                  <div class="line" /> */}
                  {/* SDT */}
                  {/* <label className="col-sm-3 form-control-label">
                    Số điện thoại:
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.handleChange}
                      type="tel"
                      id="phoneNumber"
                      className="form-control"
                      placeholder="Vui lòng nhập số điện thoại"
                    />
                  </div>
                  <div class="line" /> */}
                  {/* Giới tính */}
                  {/* <label className="col-sm-3 form-control-label">
                    Giới tính:
                  </label>
                  <div className="col-sm-9">
                    <select className="form-control">
                      <oprion value="0">Nam</oprion>
                      <option value="1">Nữ</option>
                    </select>
                  </div>
                  <div class="line" /> */}
                  {/* email */}
                  <label className="col-sm-3 form-control-label">Email:</label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.handleChange}
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Vui lòng nhập địa chỉ email"
                    />
                  </div>
                  <div class="line" />
                  {/* Dia chi */}
                  <label className="col-sm-3 form-control-label">
                    Địa chỉ:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập địa chỉ"
                    />
                  </div>
                  <div class="line" />
                  {/* CMND */}
                  <label className="col-sm-3 form-control-label">
                    Chứng minh nhân dân:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Vui lòng nhập số chứng minh nhân dân"
                    />
                  </div>
                  <div class="line" />
                  {/* Hình chụp mặt trước cmnd */}
                  <label
                    for="fileInput"
                    className="col-sm-3 form-control-label"
                  >
                    Hình mặt trước cmnd:
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
                      src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
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
                    Hình mặt sau cmnd:
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
                      src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Chiều cao*/}
                  <label className="col-sm-3 form-control-label">
                    Chiều cao (cm):
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Vui lòng nhập chiều cao"
                    />
                  </div>
                  <div class="line" />
                  {/* cân nặng */}
                  <label className="col-sm-3 form-control-label">
                    Cân nặng (Kg):
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Vui lòng nhập cân nặng"
                    />
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
                      src="hhttps://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
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
                      src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                      alt=""
                      className="avatar_cmnd"
                    />
                  </div>
                  <div class="line" />
                  {/* Mã số thuế */}
                  <label className="col-sm-3 form-control-label">
                    Mã số thuế:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Vui lòng nhập mã số thuế"
                    />
                  </div>
                  <div class="line" />
                  {/* Số tk ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Số tài khoản ngân hàng:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập số tài khoản ngân hàng"
                    />
                  </div>
                  <div class="line" />
                  {/* Tên ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Tên ngân hàng:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập tên ngân hàng"
                    />
                  </div>
                  <div class="line" />
                  {/* Tỉnh ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Chi nhanh ngân hàng:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập tên chi nhánh ngân hàng"
                    />
                  </div>
                  <div class="line" />
                  {/* Tỉnh ngân hàng */}
                  <label className="col-sm-3 form-control-label">
                    Nơi đăng kí làm việc:
                  </label>
                  <div className="col-sm-9">
                    <select>
                      <option>Thành phố Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                      <option>Hà Nội</option>
                      <option>Bình Dương</option>
                    </select>
                  </div>
                  <div class="line" />

                  <div className="col-sm-9 offset-3">
                    <input
                      type="text"
                      placeholder="Vui lòng nhập quận/huyện đăng kí làm việc"
                      className="form-control"
                    ></input>
                  </div>
                  <div class="line" />
                </div>

                <div className="col-sm-2 offset-sm-10">
                  <button className="btn btn-success">Đăng kí</button>
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
  return {
    auth: state.firebase.auth
  };
};
const mapDispatch = dispatch => {
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(reduxForm({ form: "createNewEmployee" })(CreateNewEmployee));
