import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOo8I7o7WNAyCGWunYCFWYlAzuEIg-RaM",
  authDomain: "mlafauci-app.firebaseapp.com",
  projectId: "mlafauci-app",
  storageBucket: "mlafauci-app.appspot.com",
  messagingSenderId: "365992560098",
  appId: "1:365992560098:web:b591c353c921efe11225bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);