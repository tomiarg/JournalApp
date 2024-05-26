import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/imageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'


export const NoteView = () => {

    const dispatch = useDispatch()
     
     const {active:note, messageSaved, isSaving} = useSelector(state=>state.journal)

     const {title, body, date, onInputChange, formState} = useForm(note)

     const dateString = useMemo(()=>{
        const newDate = new Date()
        return newDate.toUTCString()
     },[date])

     useEffect(()=>{
        dispatch(setActiveNote(formState))
     }, [formState])

     useEffect(()=>{
        if(messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }

     },[messageSaved])


     const fileInpputRef = useRef()


     const onSaveNote =()=>{
        dispatch(startSaveNote())
     }
     const onFileInputChange = ({target})=>{
        if(target.files === 0) return
        dispatch(startUploadingFiles(target.files))

     }
  return (
    <Grid container direction='row' justifyContent='space-between'alignItems='center' sx={{mb:1}} className="animate__animated animate__fadeIn">
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                {dateString}
            </Typography>
        </Grid>
        <Grid item>
            <input
             type="file"
             multiple 
             ref={fileInpputRef}
             onChange={onFileInputChange}
             style={{display:"none"}}
             />
             <IconButton
             color="primary"
             disabled={isSaving}
             onClick={()=>fileInpputRef.current.click()}
             >
                <UploadFileOutlined/>
             </IconButton>
            <Button 
                disabled={isSaving}
                color="primary"
                sx={{padding: 2}}
                onClick={onSaveNote}
            >
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>

        </Grid>
        <Grid container>
            <TextField
               type="text"
               variant="filled"
               fullWidth
               placeholder="Ingrese un título"
               label="Título"
               sx={{ border: "none", mb: 1 }}
               name="title"
               value={title}
               onChange={onInputChange}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={5}
                sx={{ border: "none", mb: 1 }}
                name="body"
                value={body}
                onChange={onInputChange}
                
            />
        </Grid>
        <Grid container justifyContent='end'>
            <Button>
                <DeleteOutline/>
            </Button>

        </Grid>
        {/* Imágenes */}
        <ImageGallery
            images={note.imageUrls}
        />
      
    </Grid>
  )
}
