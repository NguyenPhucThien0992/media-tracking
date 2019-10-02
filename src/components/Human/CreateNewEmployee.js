import React, { Component, Fragment } from "react";
import "./../../styles/Human/Human.css";
import Breadcum from "./../Breadcum/Breadcum";
import "react-datepicker/dist/react-datepicker.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import TextInput from "./../../common/form/TextInput";
import DateInput from "./../../common/form/DateInput";
import SelectInput from "./../../common/form/SelectInput";
import ImageUploadInput from "./../../common/form/ImageUploadInput";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthLessThan,
  isNumeric,
  hasLengthBetween
} from "revalidate";
import moment from "moment";
import { Button } from "semantic-ui-react";
import { createNewMember } from "./../../store/actions/humanAction";
import banks from "./../../common/banks/banks";
import provinces from "./../../common/province/provinces";
import { CREATE_NEW_MEMBER_SUCCESS_MESSAGE } from "./../../store/constant/const";
const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Định dạng email không hợp lệ"
);
const validate = combineValidators({
  firstName: isRequired({ message: "Vui lòng nhập tên" }),
  lastName: isRequired({ message: "Vui lòng nhập họ và tên lót" }),
  // dob: isRequired({ message: "Vui lòng nhập họ và tên" })
  gender: isRequired({ message: "Vui lòng chọn giới tính" }),
  email: composeValidators(
    isRequired({ message: "Vui lòng nhập địa chỉ email" }),
    isValidEmail
  )(),
  address: isRequired({ message: "Vui lòng nhập địa chỉ" }),
  identityNumber: composeValidators(
    isNumeric({ message: "Vui lòng chỉ nhập số" }),
    isRequired({ message: "Vui lòng nhập số chứng minh nhân dân" }),
    hasLengthBetween(9, 12)({
      message:
        "Vui lòng nhập số chứng minh nhân dân ít nhất 9 kí tự và nhiều nhất 12 kí tự"
    })
  )(),
  // frontIdentityNumberImage: isRequired({ message: "Vui lòng nhập họ và tên" }),
  // backIdentityNumberImage: isRequired({ message: "Vui lòng nhập họ và tên" }),
  heightParam: isRequired({ message: "Vui lòng nhập chiều cao" }),
  weightParam: isRequired({ message: "Vui lòng nhập cân nặng" }),
  // avatarImage: isRequired({ message: "Vui lòng nhập họ và tên" }),
  // fullBodyImage: isRequired({ message: "Vui lòng nhập họ và tên" }),
  taxNumber: isRequired({ message: "Vui lòng nhập mã số thuế" }),
  bankNumber: isRequired({ message: "Vui lòng nhập số tài khoản ngân hàng" })
  // bankName: isRequired({ message: "Vui lòng nhập họ và tên" }),
  // provineBank: isRequired({ message: "Vui lòng nhập họ và tên" }),
  // bankBranch: isRequired({ message: "Vui lòng nhập họ và tên" }),
  // registerWork: isRequired({ message: "Vui lòng nhập họ và tên" })
});
const genderOption = [
  { key: "nam", text: "Nam", value: "Nam" },
  { key: "nu", text: "Nữ", value: "Nữ" }
];

const renderImage = (imageState, imagePreviewUrl) => {
  if (imageState !== null) {
    return <img src={imagePreviewUrl} alt="" className="avatar_cmnd" />;
  }
};
const renderImageName = imageName => {
  if (imageName !== null) {
    return <p>{imageName}</p>;
  }
};

class CreateNewEmployee extends Component {
  onFormSubmit = (newMember, e) => {
    const auth = this.props.auth;
    const {
      frontIdentity,
      backIdentity,
      avatarImage,
      fullBodyImage
    } = this.state;

    var Upload = {
      frontIdentity: frontIdentity,
      backIdentity: backIdentity,
      avatarImage: avatarImage,
      fullBodyImage: fullBodyImage
    };
    this.props.createNewMember(newMember, auth, Upload);
  };
  state = {
    frontIdentity: null,
    frontIdentityUrl: null,
    frontIdentityName: null,
    backIdentity: null,
    backIdentityUrl: null,
    backIdentityName: null,
    avatarImage: null,
    avatarImageUrl: null,
    avatarImageName: null,
    fullBodyImage: null,
    fullBodyImageUrl: null,
    fullBodyImageName: null
  };

  fileChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        frontIdentityUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      [e.target.name]: e.target.files[0],
      frontIdentityName: e.target.files[0].name
    });
  };

  fileChangeBackIdentity = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        backIdentityUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      [e.target.name]: e.target.files[0],
      backIdentityName: e.target.files[0].name
    });
  };

  avatarChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        avatarImageUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      [e.target.name]: e.target.files[0],
      avatarImageName: e.target.files[0].name
    });
  };

  fullBodyChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        fullBodyImageUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      [e.target.name]: e.target.files[0],
      fullBodyImageName: e.target.files[0].name
    });
  };

  frontIdentityRef = React.createRef();
  backIdentityRef = React.createRef();
  avatarRef = React.createRef();
  fullBodyRef = React.createRef();
  render() {
    const {
      frontIdentity,
      frontIdentityUrl,
      frontIdentityName,
      backIdentity,
      backIdentityName,
      backIdentityUrl,
      avatarImage,
      avatarImageUrl,
      avatarImageName,
      fullBodyImage,
      fullBodyImageUrl,
      fullBodyImageName
    } = this.state;
    const { humanReducer } = this.props;
    // navigate to dashboard after complet signin
    if (
      humanReducer &&
      humanReducer.create_new_member_success_message ===
        CREATE_NEW_MEMBER_SUCCESS_MESSAGE
    ) {
      this.props.history.push("/");
    }
    return (
      <Fragment>
        <Breadcum Menu="Nhân sự" SubMenu="Chi tiết nhân viên" />
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Đăng ký tài khoản</h3>
            </div>
            <div className="card-body">
              <form
                className="form-horizontal"
                onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              >
                {/*  Tên */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Họ và tên:
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập tên"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/* Họ  */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Họ và tên lót:
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập họ và tên lót"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/* Ngày tháng năm sinh */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Ngày tháng năm sinh:
                  </label>
                  <Field
                    name="dob"
                    classNameDiv="col-sm-9"
                    component={DateInput}
                    placeholder="Vui lòng chọn ngày tháng năm sinh"
                    className="form-control"
                    showTimeSelect
                  ></Field>
                  <div class="line" />
                </div>
                {/* Giới tính */}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Giới tính:
                  </label>
                  <Field
                    name="gender"
                    type="text"
                    options={genderOption}
                    // classNameDiv="col-sm-9"
                    component={SelectInput}
                    placeholder="Vui lòng chọn giới tính"
                    // className="form-control"
                  ></Field>
                  <div class="line" />
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
                  <div class="line" />
                </div>
                {/* Địa chỉ*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Địa chỉ:
                  </label>
                  <Field
                    name="address"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập địa chỉ"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/* CMND*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">CMND:</label>
                  <Field
                    name="identityNumber"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập số chứng minh nhân dân"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/* Hình mặt trước cmnd*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Hình mặt trước cmnd:
                  </label>
                  <Field
                    name="frontIdentity"
                    type="file"
                    classNameDiv="col-sm-4"
                    classNameP="col-sm-3"
                    component={ImageUploadInput}
                    className="form-control"
                    fileInputRef={this.frontIdentityRef}
                    onChange={this.fileChange}
                  ></Field>
                  <div className="col-sm-3">
                    {renderImageName(frontIdentityName)}
                  </div>
                  <div className="col-sm-8 offset-sm-4">
                    {renderImage(frontIdentity, frontIdentityUrl)}
                  </div>

                  <div class="line" />
                </div>
                {/* Hình mặt sau cmnd*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Hình mặt sau cmnd:
                  </label>
                  <Field
                    type="file"
                    classNameDiv="col-sm-4"
                    classNameP="col-sm-3"
                    component={ImageUploadInput}
                    className="form-control"
                    fileInputRef={this.backIdentityRef}
                    onChange={this.fileChangeBackIdentity}
                    name="backIdentity"
                  ></Field>
                  <div className="col-sm-3">
                    {renderImageName(backIdentityName)}
                  </div>
                  <div className="col-sm-8 offset-sm-4">
                    {renderImage(backIdentity, backIdentityUrl)}
                  </div>
                  <div class="line" />
                </div>
                {/*Chiều cao*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Chiều cao(cm):
                  </label>
                  <Field
                    name="heightParam"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập chiều cao"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/*Cân nặng*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Cân nặng(Kg):
                  </label>
                  <Field
                    name="weightParam"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập cân nặng"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/* Hình chân dung*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Hình chân dung:
                  </label>
                  <Field
                    name="avatarImage"
                    type="file"
                    classNameDiv="col-sm-4"
                    classNameP="col-sm-3"
                    component={ImageUploadInput}
                    className="form-control"
                    fileInputRef={this.avatarRef}
                    onChange={this.avatarChange}
                  ></Field>
                  <div className="col-sm-3">
                    {renderImageName(avatarImageName)}
                  </div>
                  <div className="col-sm-8 offset-sm-4">
                    {renderImage(avatarImage, avatarImageUrl)}
                  </div>
                  <div class="line" />
                </div>
                {/* Hình toàn thân*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Hình toàn thân:
                  </label>
                  <Field
                    name="fullBodyImage"
                    type="file"
                    classNameDiv="col-sm-4"
                    classNameP="col-sm-3"
                    component={ImageUploadInput}
                    className="form-control"
                    fileInputRef={this.fullBodyRef}
                    onChange={this.fullBodyChange}
                  ></Field>
                  <div className="col-sm-3">
                    {renderImageName(fullBodyImageName)}
                  </div>
                  <div className="col-sm-8 offset-sm-4">
                    {renderImage(fullBodyImage, fullBodyImageUrl)}
                  </div>
                  <div class="line" />
                </div>
                {/*Mã số thuế*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Mã số thuế:
                  </label>
                  <Field
                    name="taxNumber"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập mã số thuế"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/*Số tài khoản ngân hàng*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Số tài khoản ngân hàng:
                  </label>
                  <Field
                    name="bankNumber"
                    type="number"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập số tài khoản ngân hàng"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/*Tên ngân hàng*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Tên ngân hàng:
                  </label>
                  <Field
                    name="bankName"
                    type="text"
                    options={banks}
                    // classNameDiv="col-sm-9"
                    component={SelectInput}
                    placeholder="Vui lòng chọn ngân hàng"
                    // className="form-control"
                  ></Field>
                  <div class="line" />
                </div>

                {/*Tỉnh ngân hàng*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Tỉnh ngân hàng:
                  </label>
                  <Field
                    name="provinceBank"
                    type="text"
                    options={provinces}
                    // classNameDiv="col-sm-9"
                    component={SelectInput}
                    placeholder="Vui lòng chọn tỉnh ngân hàng"
                    // className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/*Chi nhánh ngân hàng*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Chi nhánh ngân hàng:
                  </label>
                  <Field
                    name="bankBranch"
                    type="text"
                    classNameDiv="col-sm-9"
                    component={TextInput}
                    placeholder="Vui lòng nhập chi nhánh ngân hàng"
                    className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                {/*Nơi đăng kí làm việc*/}
                <div className="form-group row">
                  <label className="col-sm-3 form-control-label">
                    Nơi đăng kí làm việc:
                  </label>
                  <Field
                    name="registerWork"
                    type="text"
                    options={provinces}
                    // classNameDiv="col-sm-9"
                    component={SelectInput}
                    placeholder="Vui lòng chọn nơi đăng kí làm việc"
                    // className="form-control"
                  ></Field>
                  <div class="line" />
                </div>
                <Button positive type="submit">
                  Submit
                </Button>
                {/* <Button type="button" onClick={this.props.history.goBack}>
                  Cancel
                </Button> */}
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
    auth: state.firebase.auth,
    humanReducer: state.humanReducer
  };
};
const mapDispatch = dispatch => {
  return {
    createNewMember: (newMember, auth, Upload) => {
      return dispatch(createNewMember(newMember, auth, Upload));
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(
  reduxForm({ form: "createNewEmployee", enableReinitialize: true, validate })(
    CreateNewEmployee
  )
);
