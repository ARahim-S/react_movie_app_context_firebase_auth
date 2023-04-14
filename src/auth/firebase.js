import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });

    toast.success("Successfully registered!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");
  } catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    toast.success("Logged in successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");
  } catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const logOut = () => {
  signOut(auth);
  toast.success("Logged out successfully!");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpGoogleProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
};
