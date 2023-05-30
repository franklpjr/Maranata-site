import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import maranatateatro from "../../assets/maranatateatro.jpg"
import maranataevent from "../../assets/maranataevent.jpg"
import maranatainvest from "../../assets/maranatainvest.jpg"
import "./Carousel.css";
  
export default function App() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2500}>
            <img className='teatro' src={maranatateatro}  />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
            <img className='teatro' src={maranataevent}  />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
            <img className='teatro' src={maranatainvest}  />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}