
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}






import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ff767.firebaseapp.com",
  projectId: "interviewiq-ff767",
  storageBucket: "interviewiq-ff767.firebasestorage.app",
  messagingSenderId: "802228998928",
  appId: "1:802228998928:web:119f5677ec54f414d5cb95"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}