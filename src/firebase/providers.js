import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
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

export const registerUserWithEmailPassword = async ({email, password, displayName})=>{
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoURL} = resp.user
        await updateProfile(firebaseAuth.currentUser,{displayName})
        return{
            ok:true,
            uid,
            photoURL,
            email,
            displayName
        }
        
    } catch (error) {
        console.log(error)
        return{
            ok: false,
            errorMessage: error.message
        }
        
    }

}

export const loginWithEmailPassword = async({email, password, displayName})=>{
    //
   
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const {uid, photoURL, displayName} = resp.user
        await updateProfile(firebaseAuth.currentUser,{displayName})
        return{
            ok:true,
            uid,
            photoURL,
            email,
            displayName
        }
        
    } catch (error) {
        console.log(error)
        return{
            ok: false,
            errorMessage: error.message
        }        
    }
    
}

export const logoutFirebase = async() =>{
    return await firebaseAuth.signOut();
}