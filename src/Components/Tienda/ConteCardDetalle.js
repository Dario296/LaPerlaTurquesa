import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../../Configuraciones/Firebase'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import CardDetalle from './CardDetalle'
import { UseContext } from '../../Configuraciones/Context';
import { onAuthStateChanged, getAuth } from "firebase/auth";

const db = getFirestore(app)
const auth = getAuth(app);

const ConteCardDetalle = () => {

    const [user, setUser] = useState({})
    const [Productos, setProductos] = useState([])
    const {Id} = useParams()
    const { AgregarCarrito, EstaEnCarrito } = UseContext()
    const [Cantidad, setCantidad] = React.useState(1)

    useEffect(() => {
        const DocumentoRef = doc(db, "Listado Productos", Id)
        getDoc(DocumentoRef)
        .then((Docu)=>{
            setProductos(Docu.data())
        })
    },[Id])

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        }
      })
    },[])
    
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
        <CardDetalle Productos={Productos} Comprar={Comprar} Restar={Restar} Sumar={Sumar} user={user} EstaEnCarrito={EstaEnCarrito} Cantidad={Cantidad}/>
    )
}

export default ConteCardDetalle