import { useState } from "react";
import {useDispatch} from 'react-redux'
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth";


const formData={
    email: '',
    password: 0,
    displayName:''

}
const formValidations={
  email: [(value)=>value.includes('@'), 'el correo debe tener un @'],
  password: [(value)=>value.length >= 6, 'el password debe tener 6 letras o más'],
  displayName:[(value)=>value.length >= 1, 'el nombre es obligatorio'],

}


export const RegisterPage = () => {
  
  const dispatch = useDispatch()
  

  const [formSubmited, setFormSubmited]= useState(false)

  const {displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)


  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmited(true);
    if(!isFormValid)return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
   <AuthLayout title='Crear cuenta'>
    <form onSubmit={onSubmit}>
            <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
                
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}  
                error={!!emailValid && formSubmited}
                helperText={emailValid}              
                />
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}   
                />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}}>
                <Grid item xs={12}>
                  <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth>
                    Crear cuenta
                  </Button>

                </Grid>
                
              </Grid>
              <Grid container direction= 'row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  ingresar
                </Link>
              </Grid>

            </Grid>


          </form>

   </AuthLayout>
          

      
  )
}

