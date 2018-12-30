import React from 'react';

import './OurWork.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const OurWork = () => (
    <section id= 'our-work'>
        <header className = 'container'>
            <h2>WHAT WE DO</h2>
            <h4>CREATING INSPIRATIONAL WORK, RETAIL AND COMMERCIAL SPACES.</h4>
            <br/>
            <p>
                Tang Interiors is an exciting and innovative interior fit out and refurbishment contractor, offering clients a complete package for their workplace projects including brand development, strategic space planning, furniture selection, project management, construction and technology integration.
                We offer office fit out and refurbishment as a full turnkey package - whether it be for individual clients, landlords or building consultancy teams.
            </p>
        </header>

        <br/>

        <div className = 'container'>
            <div className = 'row'>
        <article className = 'col-md-4 col-sm-6 col-xs-12'>
           <img className = 'img-fluid' src={image1} alt={'image-1'} />
            <br/>
            <h3>OFFICE FIT OUT</h3>
            <p>We offer bespoke office fit out and refurbishment to suit your specific business needs.
                From contemporary to indulgent, we're on hand to bring your space to life.</p>
        </article>

                <article className = 'col-md-4 col-sm-6 col-xs-12'>
                    <img className = 'img-fluid' src={image2} alt={'image-2'} />
                    <br/>
                    <h3>BARS & RESTAURANTS</h3>
                    <p>With extensive experience designing and delivering fitouts for bars and restaurants we not only understand what
                        makes your customers tick, but we're also operationally intelligent.</p>
                </article>

                <article className = 'col-md-4 col-sm-6 col-xs-12'>
                    <img className = 'img-fluid' src={image3} alt={'image-3'} />
                    <br/>
                    <h3>HOTELS & HOSPITALITY</h3>
                    <p>From budget boutique to sumptuous suites, we offer a turnkey package from
                        brand development through to delivery to create a guest experience they won't forget.</p>
                </article>

            </div>
        </div>

        </section>
);

export default OurWork;