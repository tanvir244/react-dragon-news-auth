// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-JsObxfEoODmvekXOrGLfTtlEIf3cr4",
  authDomain: "react-dragon-news-auth-204d6.firebaseapp.com",
  projectId: "react-dragon-news-auth-204d6",
  storageBucket: "react-dragon-news-auth-204d6.appspot.com",
  messagingSenderId: "64683900305",
  appId: "1:64683900305:web:bccf96fc69f8509b9aae30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;