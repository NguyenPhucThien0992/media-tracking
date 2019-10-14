import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import humanReducer from "./humanReducer";
import projectReducer from "./projectReducer";
import employeeReducer from "./employeeReducer";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  form: FormReducer,
  humanReducer: humanReducer,
  authReducer: authReducer,
  projects: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  employeeReducer: employeeReducer
});

export default rootReducer;
