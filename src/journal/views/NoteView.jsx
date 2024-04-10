import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/imageGallery"


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between'alignItems='center' sx={{mb:1}} className="animate__animated animate__fadeIn">
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                28 de Octubre, 2023
            </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
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
                label='titulo'
                sx={{border: 'none', mb: 1}}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                minRows={5}
                
            />
        </Grid>
        {/* Imágenes */}
        <ImageGallery/>
      
    </Grid>
  )
}
