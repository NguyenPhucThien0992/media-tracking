import { GET_ALL_PROJECT } from "./../constant/const";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const getPrepareProjects = () => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .colection("projects")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .then(() => {
        dispatch({ type: GET_ALL_PROJECT });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
