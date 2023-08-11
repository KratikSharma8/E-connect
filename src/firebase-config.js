import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBeVcL5R67p5enu6qNh1DKRzXi7cU6V0OU",
  authDomain: "eco-connect-08.firebaseapp.com",
  projectId: "eco-connect-08",
  storageBucket: "eco-connect-08.appspot.com",
  messagingSenderId: "898066317124",
  appId: "1:898066317124:web:982097c707bfadd28a2111",
  measurementId: "G-LRQ571PD9D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(); 
const firestore = getFirestore();
console.log("app",app,"auth",auth,"firestore ",firestore);
export { auth, firestore, app ,createUserWithEmailAndPassword, sendEmailVerification }; 