// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMRihRrMIqgO1dfwxOWdAwz1qWFprD34E",
  authDomain: "drangon-news-breankig.firebaseapp.com",
  projectId: "drangon-news-breankig",
  storageBucket: "drangon-news-breankig.firebasestorage.app",
  messagingSenderId: "1067028739857",
  appId: "1:1067028739857:web:089c226160de637461feb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app