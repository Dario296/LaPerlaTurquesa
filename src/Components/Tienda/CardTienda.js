import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CardTienda({Productos}) {
    const [Cantidad, setCantidad] = React.useState(1)

    const PrecioDolar = 300
    const PrecioP = Productos.Precio ? parseFloat(Productos.Precio) : parseFloat(Productos.PrecioD) * PrecioDolar
    
    const sumar = () => {
        setCantidad(Cantidad +1)
    }

    const restar = () => {
        if (Cantidad > 1 ) {
            setCantidad(Cantidad - 1)
        }
    }
    return (
        <Card className='Card' sx={{ width: 280, height: 400}}>
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
                    <Box className='Cantidad' sx={{ display: 'flex', alignItems: 'center'}}>
                        <Button color="error" onClick={restar}><RemoveIcon/></Button>
                        <Typography>{Cantidad}</Typography>
                        <Button onClick={sumar}><AddIcon/></Button>
                    </Box>
                    <Divider/>
                    <Button className='BtnAñadir' variant="contained" >Añadir al Carrito</Button>
                </Box>
            </CardActions>
        </Card>
    );
}
