import {
  TEST_PHONE,
  SIGNUP_SUCCES,
  SIGNUP_FAIL,
  LOGIN_PHONE_SUCCESS,
  LOGIN_PHONE_ERROR
} from "./../constant/const";
const initState = {
  authError: null
};

const testReducer = (state = initState, action) => {
  switch (action.type) {
    case TEST_PHONE:
      console.log("state", state);
      console.log("vo dc reducer");
      console.log("action", action);
      return state;
    case SIGNUP_SUCCES:
      console.log("vo dc sign up sucess");
      return state;
    case SIGNUP_FAIL:
      console.log("vo dc sign up fail");
      return state;
    case LOGIN_PHONE_SUCCESS:
      console.log("login thanh con");
      return state;
    case LOGIN_PHONE_ERROR:
      console.log("login fail");
      return state;
    default:
      return state;
  }
};

export default testReducer;
