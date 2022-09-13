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
          <button onClick={() => EliminarProducto(Productos.Id)} className="btn btn-danger mx-2">Eliminar</button>
          <hr/>
        </div>
      ))}
      <h4>Total productos: {Cantidad()}</h4>
      <h4>Total: ${Total()}</h4>
      <button onClick={VaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
    </div>
  )
}

export default Carrito