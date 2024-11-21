import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your credentials)
const firebaseConfig = {
  apiKey: "AIzaSyD0pNi--cV5ub1NBOBm8HUqSHkhSb7pS1o",
  authDomain: "task-manager-29966.firebaseapp.com",
  projectId: "task-manager-29966",
  storageBucket: "task-manager-29966.appspot.com",
  messagingSenderId: "97090273737",
  appId: "1:97090273737:web:f69b56c0db536c6fe1a818",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
