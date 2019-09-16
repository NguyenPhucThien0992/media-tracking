import { SIGNUP_FAIL, SIGNUP_SUCCES } from "./../constant/const";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const signUp = () => {
  // return (dispatch, getState, { getFirebase }) => {

  // };
  var phoneNumber = "0785922827";
  firebase.auth().settings.appVerificationDisabledForTesting = true;

  var testVerificationCode = "123456";

  // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
  // This will resolve after rendering without app verification.
  var appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  // signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
  // reCAPTCHA response.
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
      // confirmationResult can resolve with the whitelisted testVerificationCode above.

      return confirmationResult.confirm(testVerificationCode);
    })
    .then(function(user) {
      console.log("user", user);
    })
    .catch(function(error) {
      // Error; SMS not sent
      // ...
    });
};
