// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDQPT7J2UvbE1cbyRi5Ni6chr7XYAc3P4",
  authDomain: "product-feedback-fem.firebaseapp.com",
  projectId: "product-feedback-fem",
  storageBucket: "product-feedback-fem.appspot.com",
  messagingSenderId: "320296046089",
  appId: "1:320296046089:web:fa59ad380de675cbd7f2d8",
  measurementId: "G-ZDBVFDHXK1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
