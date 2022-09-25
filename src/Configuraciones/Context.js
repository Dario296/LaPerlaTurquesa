import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

export const Context = createContext()

export const Provider = ({children}) => {

    const [Carrito, setCarrito] = useState([])
    
    const EstaEnCarrito  = (Id) => {
      return Carrito.some((Producto) => Producto.Id === Id)
    }

    const Cantidad = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad, 0)
    }

    const AgregarCarrito = (Producto) => {
      setCarrito([...Carrito, Producto])
    }

    const EliminarProducto = (Id) => {
        setCarrito( Carrito.filter((Producto) => Producto.Id !== Id) )
    }
  
    const SubTotal1 = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad * Producto.Precio, 0)
    }
    const SubTotal2 = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad * Producto.PrecioD * 300, 0)
    }
    const Total = () => {
        const Total = SubTotal1() + Math.round(SubTotal2())
        return Total
    }

    const VaciarCarrito = () => {
        Swal.fire({
            title: '¿Esta seguro?',
            showDenyButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Borrado', '', 'success')
              setCarrito([])
            } else if (result.isDenied) {
              Swal.fire('Los cambios no se guardan', '', 'info')
            }
        })
    }
    
    return (
        <Context.Provider value={{Carrito, EstaEnCarrito, Cantidad, AgregarCarrito, EliminarProducto, Total, VaciarCarrito,}}>{children}</Context.Provider>
    )
}

export const UseContext = () => {
    return useContext(Context)
}