import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.firebase";

const initAuth = () => {
    initializeApp(firebaseConfig);
}

export default initAuth;
