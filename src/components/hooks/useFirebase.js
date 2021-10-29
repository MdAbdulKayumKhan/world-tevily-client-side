import { getAuth, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import initializeAuthenticaion from "../Home/Login/Firebase/firebase.init";

initializeAuthenticaion();
const useFirebase = () => {
    const auth = getAuth();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
    }
    const signOutWithGoogle = () =>{
        signOut(auth).then(() => {
            console.log('log out success');
          }).catch((error) => {
            // An error happened.
          });
    }
    return{
        signInWithGoogle,
        signOutWithGoogle
    }

}
export default useFirebase;
