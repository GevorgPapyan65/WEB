// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {initializeApp} from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOFajdf-jpWTZ2VDRfObGjKX8pmSSQ-nA",
  authDomain: "shop-ad60e.firebaseapp.com",
  projectId: "shop-ad60e",
  storageBucket: "shop-ad60e.appspot.com",
  messagingSenderId: "969782076024",
  appId: "1:969782076024:web:012778765b4df575af438d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;