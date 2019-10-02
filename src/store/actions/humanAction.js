import {
  CREATE_NEW_MEMBER_SUCCESS,
  CREATE_NEW_MEMBER_FAIL
} from "./../constant/const";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import moment from "moment";
export const createNewMember = (newMember, auth, Upload) => {
  return (dispatch, getState) => {
    const uid = auth.uid ? auth.uid : "";
    const path = `users/${uid}/`;
    var storageRef = firebase.storage().ref();
    var metadata = {
      contentType: "image/png"
    };
    var frontIdentityName = Upload.frontIdentity ? "frontIdentity.png" : null;
    var frontIdentity = Upload.frontIdentity ? Upload.frontIdentity : null;
    var backIdentityName = Upload.backIdentity ? "backIdentity.png" : null;
    var backIdentity = Upload.backIdentity ? Upload.frontIdentity : null;
    var avatarName = Upload.avatarImage ? "avatar.png" : null;
    var avatar = Upload.avatarImage ? Upload.avatarImage : null;
    var fullBodyName = Upload.fullBodyImage ? "fullBody.png" : null;
    var fullBody = Upload.fullBodyImage ? Upload.fullBodyImage : null;

    firebase
      .firestore()
      .collection("testConnectDb")
      .add({
        firstName: newMember.firstName,
        lastName: newMember.lastName,
        // dob: moment(newMember.dob).format()
        // phoneNumber: auth.phoneNumber
        gender: newMember.gender,
        email: newMember.email,
        address: newMember.address,
        identityNumber: newMember.identityNumber,
        // frontIdentityNumberImage: newMember.frontIdentityNumberImage,
        // backIdentityNumberImage: newMember.backIdentityNumberImage,
        heightParam: newMember.heightParam,
        weightParam: newMember.weightParam,
        // avatarImage: newMember.avatarImage,
        // fullBodyImage: newMember.fullBodyImage,
        taxNumber: newMember.taxNumber,
        bankNumber: newMember.bankNumber,
        bankName: newMember.bankName,
        provinceBank: newMember.provinceBank,
        bankBranch: newMember.bankBranch,
        registerWork: newMember.registerWork,
        user_status_id: "1",
        uid: uid
      })
      .then(storageRef.child(path + frontIdentityName).delete())
      .then(
        storageRef.child(path + frontIdentityName).put(frontIdentity, metadata)
      )
      .then(storageRef.child(path + backIdentityName).delete())
      .then(
        storageRef.child(path + backIdentityName).put(backIdentity, metadata)
      )
      .then(storageRef.child(path + avatarName).delete())
      .then(storageRef.child(path + avatarName).put(avatar, metadata))
      .then(storageRef.child(path + fullBodyName).delete())
      .then(storageRef.child(path + fullBodyName).put(fullBody, metadata))
      .then(() => {
        dispatch({ type: CREATE_NEW_MEMBER_SUCCESS, newMember });
      })
      .catch(err => {
        dispatch({ type: CREATE_NEW_MEMBER_FAIL, err });
      });
  };
};
