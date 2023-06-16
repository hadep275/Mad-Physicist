import React, {createContext, useContext} from 'react'; 
import{ initializeApp } from "firebase/app";
const FireBaseContext =createContext();
export const useFirebase =()=> useContext(FireBaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyALvWaIFBjhjvwLPLQFJZ4Ebbes_q705CM",
  authDomain: "fun3project.firebaseapp.com",
  projectId: "fun3project",
  storageBucket: "fun3project.appspot.com",
  messagingSenderId: "306353405918",
  appId: "1:306353405918:web:2fba99d1df187ee6a7274f",
  measurementId: "G-QS7S4QDF50"
};
const FirebaseProvider = (props) => {
    const children =props.children;
    const app = initializeApp(firebaseConfig);
    const theValues ={app};
  return (
    <FireBaseContext.Provider value={theValues}>
      {children}
    </FireBaseContext.Provider>
  )
}

export default FirebaseProvider

