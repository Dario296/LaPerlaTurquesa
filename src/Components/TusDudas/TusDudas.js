import React from 'react'
import "./Dudas.scss"

const TusDudas = () => {
    return (
      <div className="contenedor">
        <h2 className='Preguntas'>¿Cómo comprar?</h2>
        <p className="ParrafoD">Para poder ver los precios y comprar debes registrarte e iniciar sesión con tu cuenta de Facebook o Google. Una vez seleccionado los productos deseados al finalizar el pedido se nos envía automáticamente con el listado de productos y un total parcial sujeto a disponibilidad de stock.</p>
        <h2 className='Preguntas'>¿Cómo pagar?</h2>
        <p className="ParrafoD">Una vez que seleccione sus productos y envié el mensaje con el listado le responderemos a la brevedad confirmando el stock del pedido con el total. El pago se confirma y coordina vía mensaje o llamada de WhatsApp. El mismo será mediante transferencia bancaria.</p>
        <h2 className='Preguntas'>¿Cómo se envía y recibo mi compra?</h2>
        <p className="ParrafoD">Una vez finalizada la compra el envío se coordina y establece a la comodidad del cliente vía WhatsApp. Se despacha en el día una vez confirmado el pago.</p>
      </div>
    )
}

export default TusDudas