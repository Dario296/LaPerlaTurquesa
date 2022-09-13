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

export default function CardTienda({Productos}) {
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
                Precio: Productos.Precio,
                PrecioD: Productos.PrecioD,
                Nombre: Productos.Nombre,
                Cantidad,
            }
            AgregarCarrito(itemToCart)
        }
    }

    return (
        <Card className='Card' sx={{ width: 280, height: 420}}>
            <Box sx={{display: 'flex', alignItems: 'center', margin:"10px"}}>
                <Typography flexGrow={1}>{Productos.Nombre}</Typography>
                <Typography>${PrecioP}</Typography>
            </Box>
            <CardMedia component="img" height="194" image={Productos.Imagen} alt={Productos.Nombre}/>
            <CardContent>
                <Typography variant="body2" >{Productos.Descripcion}</Typography>
            </CardContent>
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
        </Card>
    );
}
