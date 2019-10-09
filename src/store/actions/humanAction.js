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
    const path = `images/users/${uid}/`;
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

    if (newMember && newMember.firstName !== "" && newMember.lastName !== "") {
      var user = firebase.auth().currentUser;
      var firstName = newMember.firstName;
      var lastName = newMember.lastName;
      user.updateProfile({
        displayName: firstName.concat(lastName)
      });
    }

    var tmpAvatar, tmpFullBody, tmpIdBack, tmpIdFront;

    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .set({
        // avatar: tmpAvatar,
        // id_back: tmpIdFront,
        // id_front: tmpIdBack,
        // full_body: tmpFullBody
        address: newMember.address_home,
        bank_brand: newMember.bankBranch,
        bank_number: newMember.bankNumber,
        bank_name: newMember.bankName,
        birth_date: "null",
        city: newMember.provinceBank,
        district: newMember.registerWork,
        email: newMember.email,
        first_name: newMember.firstName,
        last_name: newMember.lastName,
        gender: newMember.gender,
        id: newMember.identityNumber,
        height: newMember.heightParam,
        weight: newMember.weightParam,
        tax: newMember.taxNumber,
        user_status_id: "1",
        registrationTokens: "null",
        userId: uid
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
      // .then(
      //   storageRef
      //     .child(path + avatarName)
      //     .getDownloadURL()
      //     .then(url => {
      //       tmpAvatar = url;
      //       console.log("tmpAvatar", url);
      //     })
      // )
      // .then(
      //   storageRef
      //     .child(path + frontIdentityName)
      //     .getDownloadURL()
      //     .then(url => {
      //       tmpIdFront = url;
      //       console.log("tmpIdFront", url);
      //     })
      // )
      // .then(
      //   storageRef
      //     .child(path + backIdentityName)
      //     .getDownloadURL()
      //     .then(url => {
      //       tmpIdBack = url;
      //       console.log("tmpIdBack", url);
      //     })
      // )
      // .then(
      //   storageRef
      //     .child(path + fullBodyName)
      //     .getDownloadURL()
      //     .then(url => {
      //       tmpFullBody = url;
      //       console.log("tmpFullBody", url);
      //     })
      // )
      .then(() => {
        dispatch({ type: CREATE_NEW_MEMBER_SUCCESS, newMember });
      })
      .catch(err => {
        dispatch({ type: CREATE_NEW_MEMBER_FAIL, err });
      });
  };
};
