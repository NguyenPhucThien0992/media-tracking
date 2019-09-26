import {
  TEST_PHONE,
  SIGNUP_SUCCES,
  SIGNUP_FAIL,
  LOGIN_PHONE_SUCCESS,
  LOGIN_PHONE_ERROR
} from "./../constant/const";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

export const actPhone = message => {
  return {
    type: TEST_PHONE,
    message: message
  };
};

export const signUp = newUser => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("nguyenphucthien0992@gmail.com", "123456")
      .then(res => {
        dispatch({ type: SIGNUP_SUCCES });
      })
      .catch(err => {
        dispatch({ type: SIGNUP_FAIL });
      });
  };
};

export const signIn = message => {
  firebase.auth().languageCode = "it";
  firebase.auth().settings.appVerificationDisabledForTesting = true;
  var phoneNumber = "+84785922827";
  var testVerificationCode = "123456";
  var appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        confirmationResult.confirm(testVerificationCode);
      })
      .then(res => {
        dispatch({ type: LOGIN_PHONE_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_PHONE_ERROR });
      });
  };
};
