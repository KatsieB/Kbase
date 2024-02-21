import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCbi4mU18QAdJQy6LAu6hflsEJzyumq_wQ",
  authDomain: "kbase-f799d.firebaseapp.com",
  databaseURL: "https://kbase-f799d-default-rtdb.firebaseio.com",
  projectId: "kbase-f799d",
  storageBucket: "kbase-f799d.appspot.com",
  messagingSenderId: "222322279381",
  appId: "1:222322279381:web:a124f15681297986d3f35c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
