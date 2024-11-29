import { app } from "@/utils/firebaseSetup";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged as _onAuthStateChanged } from "firebase/auth";

export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

const auth = getAuth(app);

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        return result
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}