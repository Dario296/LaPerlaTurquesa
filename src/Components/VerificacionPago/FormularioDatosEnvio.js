import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, {Fragment, useState} from 'react'
import { UseContext } from '../../Configuraciones/Context';

const FormularioDatosEnvio = ({nextStep}) => {
    const { Carrito } = UseContext()
    const[ datos, setDatos ] = useState({ 
        Nombre: "", 
        Apellido: "", 
        Direccion1: "", 
        Direccion2: "", 
        Ciudad: "", 
        Provincia: "" 
    })
    const cambioImput = (event) =>{setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })}

    function RealizarPedido(){
        let PrecioDolar = 300
        let productosParaWsp = Carrito.map(Producto => `- ${Producto.Descripcion}, Cantidad: ${Producto.Cantidad}, $${Producto.Precio? Producto.Precio : Producto.PrecioD * PrecioDolar} C/U, ${Producto.Link}      ...`);
        const productosConFormatoAmigable = productosParaWsp.join('\n').split("., ").join(". ");
        let direccionmensaje = JSON.stringify(datos).replace(/[&\\#+()$~%.'"*?<>{}]/g, '').split(",").join(", ").split(":").join(": ")
        let mensaje = productosConFormatoAmigable + ". " + direccionmensaje
        window.location.href = 'https://api.whatsapp.com/send?phone=3512591067&text=Me%20interesan%20los%20siguientes%20productos%20%20%20' + mensaje
    }
    
    return (
        <Fragment>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>    
                        <input onChange={cambioImput} required placeholder='Nombre*' name="Nombre" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required placeholder='Apellido*' name="Apellido" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required placeholder='Direccion 1*' name="Direccion1" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} placeholder='Direccion 2' name="Direccion2" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required placeholder='Ciudad*' name="Ciudad" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required placeholder='Estado/Provincia/Region*' name="Provincia" className="form-control"/>
                    </Grid>
                </Grid>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
                    <Button component={Link} to="/Carrito">Atras</Button>
                    {datos.Nombre === "" || datos.Apellido === "" || datos.Direccion1 === "" || datos.Ciudad === "" || datos.Provincia === "" ? <></> : <Button variant='contained' onClick={RealizarPedido}>Realizar Pedido</Button>}
                </div>
            </form>
        </Fragment>
    )
}

export default FormularioDatosEnvio