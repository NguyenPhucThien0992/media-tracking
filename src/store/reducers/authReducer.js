import { SIGNUP_FAIL, SIGNUP_SUCCES } from "./../constant/const";

const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCES:
      console.log("success!");
      return {
        state,
        authError: null
      };
    case SIGNUP_FAIL:
      console.log("fail!");
      console.log(action.err);
      return {
        state,
        authError: null
      };

    default:
      return state;
  }
};

export default authReducer;
