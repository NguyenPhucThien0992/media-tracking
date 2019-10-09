import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB0YvtqdLWXsJR97FpNXVrEIb8iqXl5qSs",
  authDomain: "yolo-3393d.firebaseapp.com",
  databaseURL: "https://yolo-3393d.firebaseio.com",
  projectId: "yolo-3393d",
  storageBucket: "yolo-3393d.appspot.com",
  messagingSenderId: "1007534700532",
  appId: "1:1007534700532:web:e000682613503e64452ba1"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const phoneProvider = new firebase.auth.PhoneAuthProvider();
export default firebase;
