
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAVuPIfA5YEYADPn5RIuwv15XG5yZLtWM",
  authDomain: "proyectocoder-9dbea.firebaseapp.com",
  projectId: "proyectocoder-9dbea",
  storageBucket: "proyectocoder-9dbea.appspot.com",
  messagingSenderId: "437954858857",
  appId: "1:437954858857:web:e422d2eec98b96b18eb7f8"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);