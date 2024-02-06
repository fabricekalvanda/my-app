// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCesujcKrpDxtX3PzzxQGwsuDfdMtXgalY",
  authDomain: "firestock-d5771.firebaseapp.com",
  projectId: "firestock-d5771",
  storageBucket: "firestock-d5771.appspot.com",
  messagingSenderId: "805686172545",
  appId: "1:805686172545:web:9d4a89f53119fefd6b2680"
};

// Initialize Firebase
const app = () => {
    if(!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object ti firebase-config.js');
    } else {
        console.log('Firebase initialized')
    }
    return initializeApp(firebaseConfig);
}

export default app;