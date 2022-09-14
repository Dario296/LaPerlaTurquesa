import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "./img/logo.png"
import { Link } from 'react-router-dom';
import "./Header.scss"
import { Badge } from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';
import { UseContext } from '../../Configuraciones/Context';
import app from '../../Configuraciones/Firebase';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const NavBarTurquesa = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { Cantidad } = UseContext()
    const [user, setUser] = useState({})
    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        }
      })
    },[])
    const salir = async()=>{
      if (user.email) {
        await signOut(auth);
        setUser({})
      }
    }

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <AppBar className='Nav-Bar' position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}><MenuIcon className='Links' /></IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }} >
                            <MenuItem onClick={handleCloseNavMenu}><Button><Link className='Links1' to="/">Inicio</Link></Button></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Button><Link className='Links1' to="/Tienda">Tienda</Link></Button></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Button><Link className='Links1' to="/TusDudas">Tus Dudas</Link></Button></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Button><Link className='Links1' to="/Contacto">Contacto</Link></Button></MenuItem>
                        </Menu>
                    </Box>
                    <img className='Logo' src={Logo} alt="Turquesa" />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleCloseNavMenu}><Link className='Links' to="/">Inicio</Link></Button>
                        <Button onClick={handleCloseNavMenu}><Link className='Links' to="/Tienda">Tienda</Link></Button>
                        <Button onClick={handleCloseNavMenu}><Link className='Links' to="/TusDudas">Tus Dudas</Link></Button>
                        <Button onClick={handleCloseNavMenu}><Link className='Links' to="/Contacto">Contacto</Link></Button>
                    </Box>
                    <Button as={Link} to="/Carrito"><Badge badgeContent={Cantidad()} color="primary"><ShoppingCartCheckout className='Links'/></Badge></Button>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user? user.email : ""} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu} >
                            <MenuItem onClick={handleCloseUserMenu}><Button><Link className='Links1' to="/IniciarSesion">Iniciar</Link></Button></MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}><Button onClick={salir}><Link className='Links1' to="/">Salir</Link></Button></MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBarTurquesa;