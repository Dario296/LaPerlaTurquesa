import { Box, Button, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

export default function CardDetalle({ Productos, Comprar, Restar, Sumar, user, EstaEnCarrito, Cantidad }) {
    const PrecioDolar = parseFloat(Productos.PrecioD) * 300
    const PrecioP = Productos.Precio ? parseFloat(Productos.Precio) : Math.round(PrecioDolar)
    
    return (
        <>
            <div className='CardDetalle'>
                <div className='mx-3'>
                    <Typography variant='h4' className='TituloPro'>{Productos.Nombre}</Typography>
                    <img src={Productos.Imagen} alt={Productos.Nombre} className="img-fluid imgProductos"/>
                </div>
                <div className='mx-3'>
                    {user.email? <Typography variant='h4'>Precio: ${PrecioP}</Typography> : null}
                    <Typography variant="h5" className='Descripcion'>{Productos.Descripcion}</Typography>
                    {user.email?
                        <Box className="Contador">
                            {EstaEnCarrito(Productos.Id)
                                ?   <>
                                        <Button variant="contained"><Link className='BtnCarrito' to="/Tienda">Seguir Comprando</Link></Button>
                                        <Button  className='mx-1' variant="contained"><Link className='BtnCarrito' to="/Carrito">Terminar compra</Link></Button>
                                    </>
                                :   
                                <>
                                    <Box className='Cantidad' sx={{ display: 'flex', alignItems: 'center'}}>
                                        <Button color="error" onClick={Restar}><RemoveIcon/></Button>
                                        <Typography>{Cantidad}</Typography>
                                        <Button onClick={Sumar}><AddIcon/></Button>
                                    </Box>
                                    <Divider/>
                                    <Button variant="contained" onClick={Comprar} >Añadir al Carrito</Button>
                                </>
                            }
                        </Box>
                        :
                        <div className='Inicia'>Inicia sesion para poder comprar</div>
                    }
                </div>
            </div>
            {/* <Typography variant='h4'>Productos relacionados</Typography> */}
            
        </>
    );
}