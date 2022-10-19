import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbkPIM0cZyZtWOQOpD0d_uhUwUBTSX-nA",
  authDomain: "react-firebase-auth-b2e2a.firebaseapp.com",
  projectId: "react-firebase-auth-b2e2a",
  storageBucket: "react-firebase-auth-b2e2a.appspot.com",
  messagingSenderId: "126100011320",
  appId: "1:126100011320:web:6bde2d42a371e4fdcaa9cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
