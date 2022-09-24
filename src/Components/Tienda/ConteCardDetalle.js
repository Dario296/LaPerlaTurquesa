import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../../Configuraciones/Firebase'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import CardDetalle from './CardDetalle'

const db = getFirestore(app)

const ConteCardDetalle = () => {

    const [Productos, setProductos] = useState([])
    const {Id} = useParams()

    useEffect(() => {
        const DocumentoRef = doc(db, "Listado Productos", Id)
        getDoc(DocumentoRef)
        .then((Docu)=>{
            setProductos(Docu.data())
        })
    },[Id])

    return (
        <CardDetalle Productos={Productos}/>
    )
}

export default ConteCardDetalle