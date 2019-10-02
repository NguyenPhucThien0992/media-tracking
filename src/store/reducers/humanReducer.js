import {
  CREATE_NEW_MEMBER_SUCCESS,
  CREATE_NEW_MEMBER_FAIL,
  CREATE_NEW_MEMBER_SUCCESS_MESSAGE
} from "./../constant/const";
const initState = {
  create_new_member_success_message: ""
};
const humanReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_NEW_MEMBER_SUCCESS:
      return {
        ...state,
        create_new_member_success_message: CREATE_NEW_MEMBER_SUCCESS_MESSAGE
      };
    case CREATE_NEW_MEMBER_FAIL:
      console.log("reducer creare project fail");
      return state;
    default:
      return state;
  }
};

export default humanReducer;
