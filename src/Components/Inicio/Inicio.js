import carousel1 from "./img/carousel1.jpg"
import carousel2 from "./img/carousel2.jpg"
import carousel3 from "./img/carousel3.jpg"
import carousel4 from "./img/carousel4.jpg"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Inicio.scss"

const Inicio = () => {
    return (
      <div className="contenedor">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block img-fluid img-car" src={carousel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid img-car" src={carousel2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid img-car" src={carousel3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid img-car" src={carousel4} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <h2 className="Titulo">¿Quiénes somos?</h2>
        <p className="Parrafo">Somos una empresa de más de 20 años de trayectoria.</p>
        <p className="Parrafo">Empresa que se dedica a recorrer las principales ferias del mundo.</p>
        <p className="Parrafo">Para la importación y exportación de insumos para artesanías.</p>
        <p className="Parrafo">Para mantener al país en la vanguardia de la moda.</p>
        <p className="Parrafo">Con los mejores accesorios para realzar tu belleza.</p>
        <p className="Parrafo">El mejor asesoramiento y atención especializada.</p>
        <p className="Parrafo">El mejor precio y calidad del mercado.</p>
        <p className="Parrafo">Veni conoce nuestra empresa.</p>
      </div>            
    )
}

export default Inicio