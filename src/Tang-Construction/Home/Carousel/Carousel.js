
import React from 'react';
import "./Carousel.css"

import image1 from './img-slide/image1.jpg';
import image2 from './img-slide/image2.jpg';
import image3 from './img-slide/image3.jpg';

const Carousel = () => (

    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100 img-fluid" src={image1} alt={"first slide"} />
                <div className="carousel-caption d-none d-md-block">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={image2}  alt={"second slide"} />
                <div className="carousel-caption d-none d-md-block">
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src= {image3} alt={"third slide"} />
                <div className="carousel-caption d-none d-md-block">
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
        </a>
    </div>

);

export default Carousel;
