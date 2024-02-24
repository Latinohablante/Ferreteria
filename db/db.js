  import  {initializeApp}  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {getFirestore} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"


  const firebaseConfig = {
    apiKey: "AIzaSyAT2Qj9OkOke7-bc4uHsmsOm3DGBsNxU5o",
    authDomain: "ferreteriakks.firebaseapp.com",
    projectId: "ferreteriakks",
    storageBucket: "ferreteriakks.appspot.com",
    messagingSenderId: "814841204472",
    appId: "1:814841204472:web:0a8751b8e07f66482eb50d",
    measurementId: "G-B8G2EC8GVL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


console.log("conexion a la base de datos establecida")
