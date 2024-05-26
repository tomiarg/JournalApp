import { collection, getDocs, getFirestore } from "firebase/firestore"
import { firebaseApp } from "../firebase/config";

export const loadNote = async(uid='') =>{
    if(!uid) throw new Error('El uid no existe')
    
    const collectionRef = collection(getFirestore(firebaseApp), `${uid}/journal/notes` );
    const docs = await getDocs(collectionRef)
    const notes = []
    docs.forEach(doc=>{
        notes.push({id:doc.id, ...doc.data()})
    })

    
    return notes

}