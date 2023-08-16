// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

var API_KEY = `${import.meta.env.VITE_API_KEY}`;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-chat-54535.firebaseapp.com",
  projectId: "react-chat-54535",
  storageBucket: "react-chat-54535.appspot.com",
  messagingSenderId: "412369458186",
  appId: "1:412369458186:web:ca521493fe6cbad2737bf3",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
