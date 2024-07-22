// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//week 9 addition
//we need to import getFirestore in order to use authentication and query CRUD the database
import { getFirestore } from "firebase/firestore";
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
// this is needed for our to refrneces variables auth and db.
const app = initializeApp(firebaseConfig);


//added by kyle
//modules 
//this exports our auth as a refernece to our authentication 
export const auth = getAuth(app);
//week 9 added
//this exports the db as a refernce to our database
export const db = getFirestore(app);