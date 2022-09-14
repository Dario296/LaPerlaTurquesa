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
import  { Link as RouteLink}  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import app from '../../../Configuraciones/Firebase';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const IniciarSesion = () => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate();
  const iniciar = async(e) =>{
    try{
      e.preventDefault();
      await signInWithEmailAndPassword(auth ,email, password)
      navigate(-1);
    }
    catch(error){
      console.log(error.message);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField value={email} onChange={e=>setEmail(e.target.value)} margin="normal" required fullWidth id="email" label="Correo" name="email" autoComplete="email" autoFocus/>
          <TextField value={password} onChange={e=>setPassword(e.target.value)} margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password"/>
          <Button onClick={iniciar} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Iniciar</Button>
          <Grid container>
            {/* <Grid item xs><Link href="#" variant="body2">¿Olvido su contraseña?</Link></Grid> */}
            <Grid item><RouteLink as={Link} to="/CrearCuenta" variant="body2">{"¿No tiene cuenta? Crear cuenta"}</RouteLink></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default IniciarSesion