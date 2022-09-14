import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  { Link as RouteLink }  from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import app from '../../../Configuraciones/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const CrearCuenta = () => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate();
  const crearCuenta = async(e) =>{
    try{
      e.preventDefault();
      await createUserWithEmailAndPassword(auth ,email, password)
      navigate(-2);
    }
    catch(error){
      console.log(error.message);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Crear Cuenta</Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField value={email} onChange={e=>setEmail(e.target.value)} required fullWidth id="email" label="Correo" name="email" autoComplete="email"/>
            </Grid>
            <Grid item xs={12}>
              <TextField value={password} onChange={e=>setPassword(e.target.value)} required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="new-password"/>
            </Grid>
          </Grid>
          <Button type="submit" onClick={crearCuenta} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Crear Cuenta</Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <RouteLink as={Link} to="/IniciarSesion" variant="body2">¿Tiene Cuenta? Iniciar Sesíon</RouteLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default CrearCuenta