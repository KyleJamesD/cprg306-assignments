// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//added by kyel

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwYdASObGmHLMOTxtzAWxQwzy0f_DVGlQ",
  authDomain: "week8-0.firebaseapp.com",
  projectId: "week8-0",
  storageBucket: "week8-0.appspot.com",
  messagingSenderId: "1242086068",
  appId: "1:1242086068:web:55b3f9698a3427f40a75e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//added by kyle
export const auth = getAuth(app);

