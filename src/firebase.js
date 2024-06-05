// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2cvf2n_v46FCDM5gL6jc6yFSKZKzyBX8",
  authDomain: "authentication-d85d1.firebaseapp.com",
  projectId: "authentication-d85d1",
  storageBucket: "authentication-d85d1.appspot.com",
  messagingSenderId: "824436415126",
  appId: "1:824436415126:web:c1e6d3bd2dd2d4291bc0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const db=getFirestore(app);
export default app;