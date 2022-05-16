import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0JWj2y9iu48onN_9yD8IuXuqLzy3KFWQ",
  authDomain: "cooking-ninja-site-654f3.firebaseapp.com",
  projectId: "cooking-ninja-site-654f3",
  storageBucket: "cooking-ninja-site-654f3.appspot.com",
  messagingSenderId: "162474733236",
  appId: "1:162474733236:web:40914042351533c70231e1",
  measurementId: "G-D2FCQ6BDBT",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
