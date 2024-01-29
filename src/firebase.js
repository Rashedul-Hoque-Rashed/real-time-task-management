// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwwj2JHjxRdnf9kPWPpP9xHLveOotRB4",
  authDomain: "real-time-task-managemen-d4567.firebaseapp.com",
  projectId: "real-time-task-managemen-d4567",
  storageBucket: "real-time-task-managemen-d4567.appspot.com",
  messagingSenderId: "472086517086",
  appId: "1:472086517086:web:66badcbf5addda0e2f6bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;