import {
  CREATE_NEW_MEMBER_SUCCESS,
  CREATE_NEW_MEMBER_FAIL,
  CREATE_NEW_MEMBER_SUCCESS_MESSAGE
} from "./../constant/const";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import {
  GET_SUB_COLLABORATE_FAIL,
  GET_SUB_COLLABORATE_SUCCESS
} from "./../constant/const";

const initState = {};
const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SUB_COLLABORATE_SUCCESS:
      return {
        sub_collaborate: action.sub_collaborate
      };
    case GET_SUB_COLLABORATE_FAIL:
      console.log("get all sub collaborare failed");
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default employeeReducer;
