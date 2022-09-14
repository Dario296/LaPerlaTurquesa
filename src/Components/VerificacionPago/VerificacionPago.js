import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormularioDatosEnvio from './FormularioDatosEnvio';
import {useState} from "react"

const theme = createTheme();

const VerificacionPago = () => {
  const steps = ['Datos de Envio'];
  const [activeStep, setActiveStep] = useState(0)
  const nextStep = () => setActiveStep((prevActivestep)=> prevActivestep + 1);
  const backStep = () => setActiveStep((prevActivestep)=> prevActivestep - 1);
  const Formularios = () => activeStep ===0? <FormularioDatosEnvio nextStep={nextStep}/> : <></> // <FormularioTarjeta nextStep={nextStep} backStep={backStep} />

  return (
    <div className="contenedor">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formularios/>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default VerificacionPago