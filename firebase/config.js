import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrUxZLjyqjLaAEygpk_6n1iWcdjRKQUk8",
  authDomain: "chronicle-site.firebaseapp.com",
  projectId: "chronicle-site",
  storageBucket: "chronicle-site.appspot.com",
  messagingSenderId: "858799673474",
  appId: "1:858799673474:web:c3ab6aca5b0ffa8f42e49b",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
