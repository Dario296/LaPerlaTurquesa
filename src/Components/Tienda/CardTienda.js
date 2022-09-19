import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UseContext } from '../../Configuraciones/Context';
import { Link } from 'react-router-dom';
import app from '../../Configuraciones/Firebase';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged, } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

export default function CardTienda({Productos}) {
    const [user, setUser] = useState({})
    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        }
      })
    },[])
    const { AgregarCarrito, EstaEnCarrito } = UseContext()

    const [Cantidad, setCantidad] = React.useState(1)

    const PrecioDolar = parseFloat(Productos.PrecioD) * 300
    const PrecioP = Productos.Precio ? parseFloat(Productos.Precio) : Math.round(PrecioDolar)
    
    const Sumar = () => {
        setCantidad(Cantidad +1)
    }

    const Restar = () => {
        if (Cantidad > 1 ) {
            setCantidad(Cantidad - 1)
        }
    }
    const Comprar = () => {
        if (Cantidad >=1) {
            const itemToCart = {
                Id: Productos.Id,
                Nombre: Productos.Nombre,
                Descripcion: Productos.Descripcion,
                Precio: Productos.Precio,
                PrecioD: Productos.PrecioD,
                Link: Productos.Link,
                Cantidad,
            }
            AgregarCarrito(itemToCart)
        }
    }

    return (
        <Card className='Card' sx={user.email? { width: 280, height: 420}: { width: 280, height: 380}}>
            <Box sx={{display: 'flex', alignItems: 'center', margin:"10px"}}>
                <Typography flexGrow={1}>{Productos.Nombre}</Typography>
                { user.email? <Typography>${PrecioP}</Typography> : <></>}
            </Box>
            <CardMedia component="img" height="194" image={Productos.Imagen} alt={Productos.Nombre}/>
            <CardContent>
                <Typography variant="body2" >{Productos.Descripcion}</Typography>
            </CardContent>
            {
                user.email? 
                <CardActions>
                    <Box className="Contador">
                        {EstaEnCarrito(Productos.Id)
                            ?   <Button  className='BtnAñadir' variant="contained"><Link className='BtnCarrito' to="/Carrito">Terminar compra</Link></Button>
                            :   <>
                            <Box className='Cantidad' sx={{ display: 'flex', alignItems: 'center'}}>
                                <Button color="error" onClick={Restar}><RemoveIcon/></Button>
                                <Typography>{Cantidad}</Typography>
                                <Button onClick={Sumar}><AddIcon/></Button>
                            </Box>
                            <Divider/>
                            <Button className='BtnAñadir' variant="contained" onClick={Comprar} >Añadir al Carrito</Button></>
                        }
                    </Box>
                </CardActions>
                :
                <h6 className='inicia'>Inicia sesion para comprar</h6>
            }
        </Card>
    );
}
