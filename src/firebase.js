// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCK_1QzgovEzSCKeDaLuYg9nFsnxEqSsFE",
    authDomain: "clone-52287.firebaseapp.com",
    projectId: "clone-52287",
    storageBucket: "clone-52287.appspot.com",
    messagingSenderId: "1073125742387",
    appId: "1:1073125742387:web:a822d0400560e5655fd046",
    measurementId: "G-M7K6KMBQMG"
  };

  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  const auth = getAuth(app);
  export{db,auth};

  
