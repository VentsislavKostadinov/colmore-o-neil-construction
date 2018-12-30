import React from 'react';

import './Footer.css';

const Footer = () => (

    <footer className = 'container-fluid'>
        <div className = 'row'>
            <p className = 'col-md-10' id = 'foot-paragraph'>Tel: +44 (0) 121 355 7000 | Address: 25 New Street Walsall WS1 1AA - All rights reserved.</p>
            <p className = 'col-md-2 ml-auto'>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
            </p>
        </div>
    </footer>

);

export default Footer;