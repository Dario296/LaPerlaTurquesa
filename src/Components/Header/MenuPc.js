import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./img/logo.png"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MenuCategorias from '../Tienda/MenuCategorias';

const MenuPc = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img className='Logo' src={Logo} alt="Turquesa" />
            <Button>
                <Link className='Links' to="/">Inicio</Link>
            </Button>
            <ButtonGroup aria-label="Basic example">
                <Button>
                    <Link className='Links' to="/Tienda">Tienda</Link>
                </Button>
                <MenuCategorias/>
            </ButtonGroup>
            <Button>
                <Link className='Links' to="/TusDudas">Tus Dudas</Link>
            </Button>
            <Button>
                <Link className='Links' to="/Contacto">Contacto</Link>
            </Button>
        </Box>
    )
}

export default MenuPc
