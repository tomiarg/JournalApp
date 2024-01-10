import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()


export const signInWithGoogle = async() =>{
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        googleProvider.setCustomParameters({    prompt: 'select_account'})
        console.log(credential)
    } catch (error) {
        console.log(error)
    }
}