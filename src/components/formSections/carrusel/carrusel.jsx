import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carrusel.css'; 
import  ImageCarrusel1  from '../../assets/carrusel/carousel1.jpg';
import  ImageCarrusel2  from '../../assets/carrusel/carousel2.jpg';
import  ImageCarrusel3  from '../../assets/carrusel/carousel3.jpg';


export const Carrusel = () => {
  return (
    <div className="carousel-container"> 
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ ImageCarrusel1 }
            alt="Primera foto"
          />
          <Carousel.Caption>
            {/* <h3>Primera foto</h3>
            <p>Descripción de la primera foto.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= { ImageCarrusel2 }
            alt="Segunda foto"
          />
          <Carousel.Caption>
            {/* <h3>Segunda foto</h3>
            <p>Descripción de la segunda foto.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= { ImageCarrusel3 }
            alt="Tercera foto"
          />
          <Carousel.Caption>
            {/* <h3>Tercera foto</h3>
            <p>Descripción de la tercera foto.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};