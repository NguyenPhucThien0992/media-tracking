import {
  LOGIN_PHONE_SUCCESS,
  LOGIN_PHONE_ERROR,
  CONFIRM_OTP_FAIL,
  CONFIRM_OTP_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT_FAIL
} from "./../constant/const";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { firebaseApp } from "./../../ultils/index";

export const loginPhone = (phoneNumber, captcha) => {
  return (dispatch, getState) => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("captcha", {
      size: "invisible",
      callback: function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onRecaptchaVerifier();
      }
    });

    var appVerifier = window.recaptchaVerifier;

    firebaseApp
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        console.log("confirmation ok");
        window.confirmationResult = confirmationResult;
      })
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
    var confirmationResult = window.confirmationResult;
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

export const signout = message => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(res => dispatch({ type: SIGNOUT_SUCCESS, res }))
      .catch(err => {
        dispatch({ type: SIGNOUT_FAIL, err });
      });
  };
};
