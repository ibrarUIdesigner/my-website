import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPKhzdOxe7eEnbBoxTx2BzDxEzfG0b9G8",
  authDomain: "portfolio-e626d.firebaseapp.com",
  databaseURL: "https://portfolio-e626d-default-rtdb.firebaseio.com",
  projectId: "portfolio-e626d",
  storageBucket: "portfolio-e626d.appspot.com",
  messagingSenderId: "798559667625",
  appId: "1:798559667625:web:80152edae1a9a9ad6db0b8",
  measurementId: "G-HMYV43GBC2",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
