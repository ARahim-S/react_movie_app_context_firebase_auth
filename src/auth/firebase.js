import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmDjnNViLeCIY3JMQU1FPRaTKajgyks5Q",
  authDomain: "movie-app-44f29.firebaseapp.com",
  projectId: "movie-app-44f29",
  storageBucket: "movie-app-44f29.appspot.com",
  messagingSenderId: "331060826821",
  appId: "1:331060826821:web:1d77a9e224b097d08796ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

export const loginUser = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};
