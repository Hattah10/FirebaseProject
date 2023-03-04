// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsn-c-mwOiJOAnqDh6vq43_BUNzWXHLIk",
  authDomain: "myproject-cf492.firebaseapp.com",
  projectId: "myproject-cf492",
  storageBucket: "myproject-cf492.appspot.com",
  messagingSenderId: "625162921358",
  appId: "1:625162921358:web:c20577c94e9fd7643df0df",
  measurementId: "G-SV6PZQ0YYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)