
import React from 'react';
import { Parallax, Background} from 'react-parallax';

import successGirl from './img/success-girl.jpg';
import './Success.css';


const insideStyles = {
    background: "#ff471a",
    color: '#ffffff',
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "80%",
    transform: "translate(-50%,-50%)",
    borderRadius: '6px',
    fontSize: '18px',

};

const imgFluid = {

    bgWidth: '100%',
    bgHeight: 'auto',
};

const Success = () => (

    <div id = 'success'>
        <Parallax style={imgFluid} bgImage={successGirl} bgImageAlt={'Success Girl'} strength={500}  >
            <div style={{ height: 500 }}>
                <div style={insideStyles}>
                    <h2>Our Choice is your success</h2>

                </div>
            </div>
        </Parallax>
    </div>

);

export default Success;
