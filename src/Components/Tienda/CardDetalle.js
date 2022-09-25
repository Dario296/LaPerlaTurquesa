import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

export default function CardDetalle({ Productos, Comprar, Restar, Sumar, user, EstaEnCarrito, Cantidad }) {
    const PrecioDolar = parseFloat(Productos.PrecioD) * 300
    const PrecioP = Productos.Precio ? parseFloat(Productos.Precio) : Math.round(PrecioDolar)
    
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