import React from 'react';
import { Parallax, Background} from 'react-parallax';

import './News.css';
import imageNews from './imageNews.jpg';


const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: '6px',
    fontSize: '18px',

};

const imgFluid = {

    bgWidth: '100%',
    bgHeight: 'auto',
};

const News = () => (

    <div>
        <Parallax style={imgFluid} bgImage={imageNews} bgImageAlt={'News'} strength={500}  >
            <div style={{ height: 500 }}>
                <div style={insideStyles}>
                    <h2>LATEST NEWS</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p></div>
            </div>
        </Parallax>
    </div>

);

export default News;