import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticaion = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenticaion;