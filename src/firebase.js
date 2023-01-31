import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-j0wNu4pV0DUDZ0RZm2ja7CimvP7G1uM",
  authDomain: "clone-8e1fa.firebaseapp.com",
  projectId: "clone-8e1fa",
  storageBucket: "clone-8e1fa.appspot.com",
  messagingSenderId: "451867348088",
  appId: "1:451867348088:web:c9cb84750c7fe40d00718d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
