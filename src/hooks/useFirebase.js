import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from "../Firebase/init.firebase";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const signOutGoogle = () => {
        signOut(auth).then(() => {
            setUser();
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return { user, signInUsingGoogle, signOutGoogle }

}

export default useFirebase;