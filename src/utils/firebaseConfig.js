import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFGJRkS0dNDOSYjj0ZtTAh4-TbIsQFesI",
  authDomain: "klimty-93d1f.firebaseapp.com",
  projectId: "klimty-93d1f",
  storageBucket: "klimty-93d1f.appspot.com",
  messagingSenderId: "197007393503",
  appId: "1:197007393503:web:1053a978d8ce2717e7df6a",
  measurementId: "G-64473D3Q3W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
export const storage = getStorage(app);
