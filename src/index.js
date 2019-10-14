import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyB0YvtqdLWXsJR97FpNXVrEIb8iqXl5qSs",
//   authDomain: "yolo-3393d.firebaseapp.com",
//   databaseURL: "https://yolo-3393d.firebaseio.com",
//   projectId: "yolo-3393d",
//   storageBucket: "yolo-3393d.appspot.com",
//   messagingSenderId: "1007534700532",
//   appId: "1:1007534700532:web:e000682613503e64452ba1"
// };

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App></App>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
