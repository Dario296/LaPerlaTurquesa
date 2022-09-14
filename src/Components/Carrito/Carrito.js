import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { UseContext } from "../../Configuraciones/Context"


const Carrito = () => {

  const { Carrito, Total, VaciarCarrito, EliminarProducto, Cantidad } = UseContext()

  return (
    <div className="container my-5">
      <h2>Tu carrito</h2>
      <hr/>
      { Carrito.map((Productos) => (
        <div key={Productos.Id}>
          <h3>{Productos.Nombre}</h3>
          <p>Precio: ${Productos.Precio? Productos.Precio : Math.round(Productos.PrecioD * 300)}</p>
          <p>Cantidad: {Productos.Cantidad}</p>
          <Button onClick={() => EliminarProducto(Productos.Id)} variant="contained" color="error" >Eliminar</Button>
          <hr/>
        </div>
      ))}
      {
        Carrito.length === 0? 
          <>
            <h4>Carrito vacio agrega algo</h4>
            <Button variant="contained"><Link className="Links2" to="/Tienda">Volver a tienda</Link></Button>
          </>
        :
        <>
          <h4>Total productos: {Cantidad()}</h4>
          <h4>Total: ${Total()}</h4>
          <Button variant="contained" color="error" onClick={VaciarCarrito}>Vaciar carrito</Button>
          <Button variant="contained"><Link className="Links2" to="/VerificacionPago">Pedir Pagar</Link></Button>
        </>
      }
      
    </div>
  )
}

export default Carrito