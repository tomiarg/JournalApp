import { createSlice } from "@reduxjs/toolkit";

export const jounralSlice = createSlice({
    name: "journal",
    initialState:{
        isSaving: false,
        messageSaved: "",
        notes:[],
        active:null,
        // active: {
        //     id: 'ABC123',
        //     title:'',
        //     body: '',
        //     date: 1234567,
        //     imageUrls:[]
        // }

    },
    reducers:{
        savingNewNote:(state)=>{
            state.isSaving = true;
        },
        addEmptyNote:(state,action)=>{  
            state.notes.push(action.payload)
            state.isSaving = false

        },
        setActiveNote:(state,action)=>{
            state.active = action.payload;
            state.messageSaved = ''
        },
        setNotes:(state,action)=>{
            state.notes = action.payload            
        },
        setSaving:(state)=>{
            state.isSaving = true;
            state.messageSaved = ''
            
        },
        updateNote:(state,action)=>{
            state.isSaving= false;
            state.notes= state.notes.map((note)=>{
                if(note.id === action.payload.id){
                    return action.payload
                }

                return note;
            })
            state.messageSaved = `${action.payload.title}, actualizada correctamente `
        },
        setPhotosToACtiveNote: (state, action)=>{
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearActiveNote : (state)=>{
            state.isSaving= false;
            state.messageSaved= "";
            state.notes=[];
            state.active=null;
        },
        deleteNoteById:(state,action)=>{
            state.active = null;
            state.notes = state.notes.filter((note) =>note.id !== action.payload)
        }

    }
});

export const {savingNewNote,
            addEmptyNote,
            setActiveNote,
            setNotes,
            setSaving,
            updateNote,
            deleteNoteById,
            setPhotosToACtiveNote,
            clearActiveNote} = jounralSlice.actions

