// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANzP6mNVjfZqgk_kpwPBA0RzVM5HAAJzE",
    authDomain: "service-review-1c4f4.firebaseapp.com",
    projectId: "service-review-1c4f4",
    storageBucket: "service-review-1c4f4.appspot.com",
    messagingSenderId: "145316369942",
    appId: "1:145316369942:web:3be99b31023a7795074737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;