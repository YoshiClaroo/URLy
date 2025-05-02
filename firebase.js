// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAt79jrJpE2OZgb9MunFkjREeB3t4_Vznk",
  authDomain: "urlyi-b3947.firebaseapp.com",
  projectId: "urlyi-b3947",
  storageBucket: "urlyi-b3947.appspot.com",
  messagingSenderId: "732077984332",
  appId: "1:732077984332:web:840e5c1eb645999ede82e9",
  measurementId: "G-VPHWGQG61Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
