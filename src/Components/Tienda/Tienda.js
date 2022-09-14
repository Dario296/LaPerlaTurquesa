import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTienda from './CardTienda'
import MenuCategorias from './MenuCategorias'
import ListaProductos from './ProductosData'
// import {getFirestore, collection, getDocs } from 'firebase/firestore'
// import app from '../../Configuraciones/Firebase'
import "./Tienda.scss"

// const db = getFirestore(app)

const Tienda = () => {
  const [Productos, setProductos] = useState([])
  const { Categoria } = useParams()


  // borrar lo de abajo
  useEffect(()=>{
    if (!Categoria) {
      setProductos(ListaProductos)
  } else {
      setProductos( ListaProductos.filter((Productos) => Productos.Categoria === Categoria) )
  }
  },[Productos, Categoria])
  // borrar hasta aca



  // const [Productos, setProductos] = useState([])
  // const { Categoria } = useParams()
  // useEffect(()=>{
  //   const getProductos = async()=>{
  //     try {
  //       const querySnapshot = await getDocs(collection(db,"Listado Productos"))
  //       const docs = []
  //       querySnapshot.forEach((doc)=>{
  //         docs.push({...doc.data(), id: doc.id})
  //       })
  //       if (!Categoria) {
  //         setProductos(docs)
  //     } else {
  //         setProductos( docs.filter((Productos) => Productos.Categoria === Categoria) )
  //     }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getProductos();
  // },[Productos, Categoria])
  return (
    <div className='ContenedorTienda'>
      <MenuCategorias/>
      <div className="contenedor">
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
          { Productos.map((Productos) => <Grid item key={Productos.Id}><CardTienda Productos={Productos}/></Grid>) }
        </Grid>
      </div>
    </div>
    
  )
}

export default Tienda