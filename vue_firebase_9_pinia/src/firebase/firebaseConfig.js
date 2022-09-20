
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbgBtDFMt1T2N5ahiXb-B8AIZ5oMBHIJI",
  authDomain: "vue-3-2022-ab254.firebaseapp.com",
  projectId: "vue-3-2022-ab254",
  storageBucket: "vue-3-2022-ab254.appspot.com",
  messagingSenderId: "1035116517407",
  appId: "1:1035116517407:web:8a8c21ff34decfdad39d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
