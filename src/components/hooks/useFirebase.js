import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaion from "../Home/Login/Firebase/firebase.init";

initializeAuthenticaion();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true);
       return signInWithPopup(auth, provider)
            
            .finally(()=> setIsLoading(false));
    }
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubcribed;
    }, []);
    
    const signOutWithGoogle = () =>{
        signOut(auth).then(() => {
            console.log('log out success');
          }).catch((error) => {
            // An error happened.
          });
    }
    return{
        signInWithGoogle,
        signOutWithGoogle,
        user,
        isLoading
    }

}
export default useFirebase;
