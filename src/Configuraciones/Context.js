import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

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
  
    const Total = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad * Producto.Precio, 0)
    }

    const VaciarCarrito = () => {
        setCarrito([])
    }
    
    return (
        <CartContext.Provider value={{Carrito, EstaEnCarrito, Cantidad, AgregarCarrito, EliminarProducto, Total, VaciarCarrito,}}>{children}</CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}