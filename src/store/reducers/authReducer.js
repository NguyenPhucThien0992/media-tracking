import {
  LOGIN_PHONE_ERROR,
  LOGIN_PHONE_SUCCESS,
  CONFIRM_OTP_FAIL,
  CONFIRM_OTP_SUCCESS,
  LOGIN_PHONE_SUCCESS_MESSAGE,
  CONFIRM_OTP_SUCCESS_MESSAGE,
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_SUCCESS_MESSAGE
} from "./../constant/const";

const initState = {
  loginMessage: null,
  confirmationResult: null,
  confirmOtp: null,
  authenticationInfor: null,
  signoutMessage: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_PHONE_SUCCESS:
      return {
        ...state,
        confirmationResult: action.res,
        loginMessage: LOGIN_PHONE_SUCCESS_MESSAGE
      };
    case LOGIN_PHONE_ERROR:
      return { ...state, loginMessage: null };
    case CONFIRM_OTP_SUCCESS:
      console.log("confirmation otp success");
      return {
        ...state,
        confirmOtp: CONFIRM_OTP_SUCCESS_MESSAGE,
        authenticationInfor: action.res
      };
    case CONFIRM_OTP_FAIL:
      console.log("confirmation otp failed");
      return { ...state, confirmOtp: "failed" };
    case SIGNOUT_SUCCESS:
      console.log("signout sucess");
      return {
        ...state,
        signoutMessage: SIGNOUT_SUCCESS_MESSAGE
      };
    case SIGNOUT_FAIL:
      console.log("signout fail");
      return state;
    default:
      return state;
  }
};

export default authReducer;
