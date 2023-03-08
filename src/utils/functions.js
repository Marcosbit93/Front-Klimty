import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { provider } from "./firebaseConfig";



export const signUp = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((res) => {
    sendEmailVerification(res.user.auth.currentUser);
    alert("We send you an email to verify it")
    signOut(auth);
  });
};

export const logIn = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((res) => {
      if (!res.user.emailVerified) {
        sendEmailVerification(res.user.auth.currentUser);
        alert("your email is not verified");
        signOut(auth);
      } 
  });
};


export const signUpGoogle = (auth) => {
  signInWithPopup(auth, provider);
};

export const logOut = (auth) => {
  signOut(auth);
};
