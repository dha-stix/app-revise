import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5ceRVBWV6PtFbltQPSLO63uIXZ3nkL3g",
  authDomain: "app-revise.firebaseapp.com",
  projectId: "app-revise",
  storageBucket: "app-revise.appspot.com",
  messagingSenderId: "1030737814012",
  appId: "1:1030737814012:web:68f6dbe211198c27ac9279",
  measurementId: "G-XHGBEFDMYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {provider, auth, analytics}
export default getFirestore();