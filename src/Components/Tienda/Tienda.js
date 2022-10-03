import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTienda from './CardTienda'
import MenuCategorias from './MenuCategorias'
import {getFirestore, collection, getDocs, query, where, limit } from 'firebase/firestore'
import app from '../../Configuraciones/Firebase'
import "./Tienda.scss"

const db = getFirestore(app)

const Tienda = () => {
  const [Productos, setProductos] = useState([])
  const [ProductosN, setProductosN] = useState([])
  const [ProductosO, setProductosO] = useState([])
  const { Categoria } = useParams()
  const [Limite, setLimite] = React.useState(30)
  const VerMas = () => {
    setLimite(Limite + 30)
  }

  useEffect(()=>{
    const ProductosRef = collection(db, 'Listado Productos')
    if (Categoria) {
      const Respuesta =  query(ProductosRef, where('Categoria', '==', Categoria), limit(Limite))
      getDocs(Respuesta)
        .then((resp) => {
          const ProductosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
          setProductos(ProductosDB)
        })
    }
    else{
      const RespuestaN =  query(ProductosRef, where('Estado', '==', 'Nuevo'), limit(15))
      getDocs(RespuestaN)
        .then((resp) => {
          const ProductosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
          setProductosN(ProductosDB)
        })
      const RespuestaO =  query(ProductosRef, where('Estado', '==', 'Oferta'), limit(15))
      getDocs(RespuestaO)
        .then((resp) => {
          const ProductosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
          setProductosO(ProductosDB)
        })
    }
    
  },[Categoria, Limite])

  return (
    <div className='ContenedorTienda'>
      <MenuCategorias/>
      {
        Categoria?
        <div className="contenedor">
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
            { Productos.map((Productos) => <Grid item key={Productos.Id}><CardTienda Productos={Productos}/></Grid>) }
          </Grid>
          <Button variant="contained" className='BtmVerMas' onClick={VerMas}>Ver Mas</Button>
        </div>
      :
        <>
          <div className="contenedor">
            <h2 className='TitulosTienda'>Productos Nuevos</h2>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
              { ProductosN.map((Productos) => <Grid item key={Productos.Id}><CardTienda Productos={Productos}/></Grid>) }
            </Grid>
          </div>
          <div className="contenedor">
            <h2 className='TitulosTienda'>Ofertas de la semana</h2>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
              { ProductosO.map((Productos) => <Grid item key={Productos.Id}><CardTienda Productos={Productos}/></Grid>) }
            </Grid>
          </div>
        </>
      }
    </div>
    
  )
}

export default Tienda