import { Star, StarOutlineOutlined, StartOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
        container
        spaicing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >
        <Grid item xs={12}>
            <StarOutlineOutlined sx={{fontSize:100, color: 'white' }}/>
        </Grid>
        <Grid item xs={12}>
            <Typography color='white' variant="h5">
                Selecciona o crea una entrada
            </Typography>
        </Grid>


    </Grid>

  )
}
