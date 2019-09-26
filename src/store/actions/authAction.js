import {
  LOGIN_PHONE_SUCCESS,
  LOGIN_PHONE_ERROR,
  CONFIRM_OTP_FAIL,
  CONFIRM_OTP_SUCCESS
} from "./../constant/const";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const loginPhone = phoneNumber => {
  firebase.auth().languageCode = "it";
  // firebase.auth().useDeviceLanguage();
  firebase.auth().settings.appVerificationDisabledForTesting = true;
  var appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      //  .then(ConfirmationResult => {
      // firebase.auth().ConfirmationResult = ConfirmationResult;
      // })
      .then(res => {
        dispatch({ type: LOGIN_PHONE_SUCCESS, res });
      })
      .catch(err => {
        dispatch({ type: LOGIN_PHONE_ERROR, err });
      });
  };
};

export const confirmOtp = (confirmationResult, otp) => {
  return (dispatch, getState) => {
    confirmationResult
      .confirm(otp)
      .then(res => {
        dispatch({ type: CONFIRM_OTP_SUCCESS, res });
      })
      .catch(err => {
        dispatch({ type: CONFIRM_OTP_FAIL, err });
      });
  };
};
