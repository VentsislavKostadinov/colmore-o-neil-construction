import React from 'react';

import Solutions from './Solutions/Solutions';
import Skills from "./Skills/Skills";

import './Services.css';
import serviceImage from './img/serviceImage.jpg';
import Success from "./Success/Success";


const Services = () => (

    <div>
    <header className="card ">
        <img className="card-img-top img-fluid" src={serviceImage} alt={"Card image"} />
            <div className="card-img-overlay">
                <h1 className="card-title">SERVICES</h1>
                <hr/>
                <h3 className= 'card-text'>We are the best in that what we do</h3>
                </div>
            </header>

        <Solutions/>
        <Success/>
        <Skills/>
    </div>
);

export default Services;