// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsGysTysMAnLopiKBDo5bJ3OpHbDXstdA",
  authDomain: "shop-da439.firebaseapp.com",
  projectId: "shop-da439",
  storageBucket: "shop-da439.appspot.com",
  messagingSenderId: "915589662095",
  appId: "1:915589662095:web:fd4f5e53df6dcdc6dcb7fa",
  measurementId: "G-GF5KMD7HKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
