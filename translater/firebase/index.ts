import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAzuH8uyQiIze2UOlU3V0pFoewWUdGnxk0",
  authDomain: "extension-translator-7d6c1.firebaseapp.com",
  projectId: "extension-translator-7d6c1",
  storageBucket: "extension-translator-7d6c1.appspot.com",
  messagingSenderId: "425202702671",
  appId: "1:425202702671:web:016e6033c17559e6cd4d3a",
  measurementId: "G-RLY29CYV7E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
