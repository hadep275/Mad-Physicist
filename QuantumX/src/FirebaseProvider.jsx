import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getFunctions} from 'firebase/functions';
const FireBaseContext = createContext();
export const useFirebase = () => useContext(FireBaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyALvWaIFBjhjvwLPLQFJZ4Ebbes_q705CM",
  authDomain: "fun3project.firebaseapp.com",
  projectId: "fun3project",
  storageBucket: "fun3project.appspot.com",
  messagingSenderId: "306353405918",
  appId: "1:306353405918:web:2fba99d1df187ee6a7274f",
  measurementId: "G-QS7S4QDF50",
};
const FirebaseProvider = (props) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const children = props.children;
  const cloudFuncs = getFunctions(app);
  const db = getFirestore(app);
  const store = getStorage(app);

  const theValues = { app, auth, db, store, cloudFuncs };
  return (
    <FireBaseContext.Provider value={theValues}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default FirebaseProvider;
