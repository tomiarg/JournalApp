import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()


export const signInWithGoogle = async() =>{
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        googleProvider.setCustomParameters({    prompt: 'select_account'})
        const {displayName, email,photoURL, uid} = result.user
        
        return{
            ok: true,
            //user info
            displayName,
            photoURL,
            email,
            uid
        }
    } catch (error) {
        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }
}