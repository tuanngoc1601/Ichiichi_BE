import { initializeApp, firebase } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAggjZKaL_pq_I8Pp8hWyDq4c7rc75jHgY",
  authDomain: "my-first-project-testing-6551e.firebaseapp.com",
  databaseURL: "https://my-first-project-testing-6551e.firebaseio.com",
  projectId: "my-first-project-testing-6551e",
  storageBucket: "my-first-project-testing-6551e.appspot.com",
  messagingSenderId: "292616769370",
  appId: "1:292616769370:web:5437edb75f9223e6192d63",
  measurementId: "G-CC04MC8B84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app, firebaseConfig.storageBucket);


// export const firebaseConfig = 
//   {
//     apiKey: "AIzaSyAggjZKaL_pq_I8Pp8hWyDq4c7rc75jHgY",
//     authDomain: "my-first-project-testing-6551e.firebaseapp.com",
//     databaseURL: "https://my-first-project-testing-6551e.firebaseio.com",
//     projectId: "my-first-project-testing-6551e",
//     storageBucket: "my-first-project-testing-6551e.appspot.com",
//     messagingSenderId: "292616769370",
//     appId: "1:292616769370:web:5437edb75f9223e6192d63",
//     measurementId: "G-CC04MC8B84"
//   };