import {
  GET_SUB_COLLABORATE_FAIL,
  GET_SUB_COLLABORATE_SUCCESS
} from "./../constant/const";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const getAllCollaborate = () => {
  return (dispatch, getState) => {
    var uid;
    var sub_collaborate = [];

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        uid = user.uid;

        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .collection("agency")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              firebase
                .firestore()
                .collection("users")
                .doc(uid)
                .collection("agency")
                .doc(doc.id)
                .collection("under")
                .get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    sub_collaborate.push(doc.data());
                  });
                  dispatch({
                    type: GET_SUB_COLLABORATE_SUCCESS,
                    sub_collaborate: sub_collaborate
                  });
                });
              // .then(() => {
              //   console.log("Action sub_collaborate", sub_collaborate);
              //   console.log("action type sub", typeof sub_collaborate);
              //   console.log("action length", sub_collaborate.length);
              //   console.log("action", sub_collaborate[0]);
              // })
              // .catch(err => {
              //   console.log("Error getting documents", err);
              // });
            });
          })
          // .then(item => {
          //   dispatch({
          //     type: GET_SUB_COLLABORATE_SUCCESS,
          //     sub_collaborate: sub_collaborate
          //   });
          // })
          .catch(err => {
            dispatch({ type: GET_SUB_COLLABORATE_FAIL });
          });
      } else {
        // No user is signed in.
      }
    });
  };
};
