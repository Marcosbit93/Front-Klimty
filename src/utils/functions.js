import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { providerGoogle, providerFacebook, storage } from "./firebaseConfig";
import axios from "axios";
import toast from "react-hot-toast";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const signUp = (auth, email, password, name, lastName) => {
  createUserWithEmailAndPassword(auth, email, password).then(() => {
    sendEmailVerification(auth.currentUser).then(() => {
      const { uid } = auth.currentUser;
      axios.post("http://localhost:3001/api/user", {
        name,
        lastName,
        email,
        uid,
      });
      toast.success(`We send you an email to ${email}`);
      signOut(auth);
    });
  });
};

export const logIn = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((res) => {
    if (!res.user.emailVerified) {
      sendEmailVerification(res.user.auth.currentUser);
      toast.error("your email is not verified");
      signOut(auth);
    } else {
      axios.get("http://localhost:3001/api/user").then((users) => {
        onAuthStateChanged(auth, (userF) => {
          const userFilter = users.data.filter((user) => {
            return user.uid === userF.uid;
          });
          localStorage.setItem("id", userFilter[0].id);
        });
      });
      toast.success("Successfully Logged In !");
    }
  });
};

export const signUpGoogle = (auth) => {
  signInWithPopup(auth, providerGoogle).then((res) => {
    //busco todos los usuarios

    axios
      .get("http://localhost:3001/api/user")
      .then((users) => {
        onAuthStateChanged(auth, (userF) => {
          const userFilter = users.data.filter((user) => {
            return user.uid === userF.uid;
          });
          //si no existe mi usuario lo crea
          if (!userFilter[0]) {
            const name = res.user.displayName.split(" ")[0];
            const lastName = res.user.displayName.split(" ")[1];
            const { email, uid } = res.user;

            axios.post("http://localhost:3001/api/user", {
              name,
              lastName,
              email,
              uid,
            });
          }
        });
      })
      .then(() => {
        axios.get("http://localhost:3001/api/user").then((users) => {
          onAuthStateChanged(auth, (userF) => {
            const userFilter = users.data.filter((user) => {
              return user.uid === userF.uid;
            });
            localStorage.setItem("id", userFilter[0].id);
          });
        });
        toast.success("Successfully Logged In !");
      });
  });
};

export const signUpFacebook = (auth) => {
  signInWithPopup(auth, providerFacebook).then((res) => {
    //busco todos los usuarios

    axios
      .get("http://localhost:3001/api/user")
      .then((users) => {
        onAuthStateChanged(auth, (userF) => {
          const userFilter = users.data.filter((user) => {
            return user.uid === userF.uid;
          });
          //si no existe mi usuario lo crea
          if (!userFilter[0]) {
            const name = res.user.displayName.split(" ")[0];
            const lastName = res.user.displayName.split(" ")[1];
            const { email, uid } = res.user;

            axios.post("http://localhost:3001/api/user", {
              name,
              lastName,
              email,
              uid,
            });
          }
        });
      })
      .then(() => {
        axios.get("http://localhost:3001/api/user").then((users) => {
          onAuthStateChanged(auth, (userF) => {
            const userFilter = users.data.filter((user) => {
              return user.uid === userF.uid;
            });
            localStorage.setItem("id", userFilter[0].id);
          });
        });
        toast.success("Successfully Logged In !");
      });
  });
};

export const forgotPassword = (auth, email) => {
  axios.get("http://localhost:3001/api/user").then((users) => {
    const userFilter = users.data.filter((user) => {
      return user?.email === email;
    });
    !userFilter[0]
      ? toast.error("please enter a valid email")
      : sendPasswordResetEmail(auth, email);
  });
};

export const logOut = (auth) => {
  signOut(auth);
  localStorage.removeItem("id");
};

export async function uploadAvatar(file) {
  if (file.type === "image/jpeg") {
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } else {
    toast.error("only jpg format");
  }
}
