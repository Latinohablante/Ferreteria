 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import {getFirestore} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAT2Qj9OkOke7-bc4uHsmsOm3DGBsNxU5o",
   authDomain: "ferreteriakks.firebaseapp.com",
   projectId: "ferreteriakks",
   storageBucket: "ferreteriakks.appspot.com",
   messagingSenderId: "814841204472",
   appId: "1:814841204472:web:9a1f1a8db7e77e162eb50d",
   measurementId: "G-8NLMEZYZSR"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);




export const db = getFirestore(app);
console.log("conexion a la base de datos establecida")