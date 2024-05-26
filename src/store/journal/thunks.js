import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp, firebaseDB } from "../../firebase/config";
import { addEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToACtiveNote, setSaving, updateNote } from "./";
import { fileUpload, loadNote } from "../../helpers";
import { update } from "firebase/database";

export const startNewNote= () =>{
    return async( dispatch, getState) =>{
        const {uid} = getState().auth;
        //uid del user
         dispatch(savingNewNote())
        const newNote ={
            title:'',
            body:'',
            date:new Date().getTime()
        }

        const newDoc = doc(collection(getFirestore(firebaseApp), `${uid}/journal/notes` ))
        const setDocRta = await setDoc(newDoc, newNote)
        console.log({setDocRta, newDoc})

        newNote.id = newDoc.id;
        dispatch(addEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}


export const startLoadingNotes = (uid ='')=>{
    return async (dispatch, getState) =>{
        const {uid} = getState().auth;
        if(!uid) throw new Error('El uid no existe')
        const loadedNotes = await loadNote(uid)
        dispatch(setNotes(loadedNotes))
    }
}

export const startSaveNote = () =>{
    return async (dispatch, getState)=>{
        dispatch(setSaving())
        const {uid} = getState().auth;
        const {active:note} = getState().journal

        const noteToFireStore = {...note}

        delete noteToFireStore.id;

        const docRef = doc(getFirestore(firebaseApp), `${uid}/journal/notes/${note.id}` )
        await setDoc(docRef, noteToFireStore, {merge: true})
        dispatch(updateNote(note))
        
    }
}

export const startUploadingFiles =(files = [])=>{
    return async (dispatch) =>{
        dispatch(setSaving())
        const fileUploadPromises = []
        for (const file of files ) {
          fileUploadPromises.push(fileUpload(file))        
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToACtiveNote(photosUrls))
    }
    

}