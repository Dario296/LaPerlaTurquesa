import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import app from '../../../Configuraciones/Firebase';
import { getAuth, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const Facebook = new FacebookAuthProvider();
const Google = new GoogleAuthProvider();

const IniciarSesion = () => {
  const navigate = useNavigate();
  const iniciarFacebook = async(e) =>{
    try{
      e.preventDefault();
      await signInWithPopup(auth, Facebook)
      navigate("/Tienda");
    }
    catch(error){
      console.log(error.message);
    }
  }
  const iniciarGoogle = async(e) =>{
    try{
      e.preventDefault();
      await signInWithPopup(auth, Google)
      navigate("/Tienda");
    }
    catch(error){
      console.log(error.message);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Button onClick={iniciarFacebook} fullWidth variant="contained" sx={{ mt: 15, mb: 2 }}>Iniciar Con Facebook</Button>
      <Button onClick={iniciarGoogle} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Iniciar Con Google</Button>
    </Container>
  );
}

export default IniciarSesion