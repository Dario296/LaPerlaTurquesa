import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import app from '../../Configuraciones/Firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const auth = getAuth(app);
const db = getFirestore(app)

const IniciarSalir = () => {

    const [Productos, setProductos] = useState([])
    const [user, setUser] = useState({})
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        }
      })
    },[])

    useEffect(()=>{
      const ProductosRef = collection(db, 'Listado Productos')
        getDocs(ProductosRef)
          .then((resp) => {
            const ProductosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
            setProductos(ProductosDB)
          })
    },[])

    const salir = async()=>{
      if (user.email) {
        await signOut(auth);
        setUser({})
      }
    }
    let usuario = "rodriguez.dario124@gmail.com"
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user? user.email : ""} src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} 
                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Button>
                        <Link className='Links1' to="/IniciarSesion">Iniciar</Link>
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={salir}>
                        <Link className='Links1' to="/">Salir</Link>
                    </Button>
                </MenuItem>
                {user.email === usuario?
                  <MenuItem onClick={handleCloseUserMenu}>
                      <Button>
                        <p>Total Productos = {Productos.length}</p>
                      </Button>
                  </MenuItem>
                  :
                  <></>
                }
            </Menu>
        </Box>
    )
}

export default IniciarSalir