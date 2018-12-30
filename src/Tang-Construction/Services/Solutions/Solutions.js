
import React from 'react';

import './Solutions.css';

import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';

const Solutions = () => (

    <section id = 'solutions' >
        <h3>Colmore Tang Construction offers turnkey solutions, supporting developers
            from building selection, through to handover.</h3>
        <div className= 'container-fluid'>
            <div className= 'row'>

                <article className= 'col-md-3 col-sm-6 col-xs-12'>
                <img className = 'img-fluid' src={image1} alt={'image1'} />
                    <br/><br/>
                    <header>
                        <h3>Office to Residential</h3>
                        <br/>
                        <p>“It’s great to see these buildings being repurposed,
                            especially when they have been standing empty for some time, improving the environment in this area.”
                        </p>
                    </header>
                </article>

                <article className= 'col-md-3 col-sm-6 col-xs-12'>
                    <img className = 'img-fluid' src={image2} alt={'image2'} />
                    <br/><br/>
                    <header>
                        <h3>New Build</h3>
                        <br/>
                        <p>“Colmore Tang has worked with us on a number of new-build and redevelopment projects and have a proven track record in the delivery of a high quality product. An expert team behind each scheme keeps an eye on the big picture and the small details,
                            whilst ensuring completion on time and on budget. This gives us the confidence going forward to say that for procurement of works, regardless of
                            complexity,
                        </p>
                    </header>
                </article>

                <article className= 'col-md-3 col-sm-6 col-xs-12'>
                    <img className = 'img-fluid' src={image3} alt={'image3'} />
                    <br/><br/>
                    <header>
                        <h3>Office to Hotel</h3>
                        <br/>
                        <p>
                            “The interior quality and finish is what really sets the hotel apart from its competitors. The materials and craftsmanship that
                            Colmore Tang Construction brought to the project have given our guests a new level of luxury.”
                        </p>
                    </header>
                </article>

                <article className= 'col-md-3 col-sm-6 col-xs-12'>
                    <img className = 'img-fluid' src={image4} alt={'image4'} />
                    <br/><br/>
                    <header>
                        <h3>Office Refits</h3>
                        <br/>
                        <p>“Colmore Tang Construction realised my vision perfectly to create this luxurious, high-end office interior on the most prestigious address in the city, with a finish that exceeded even my expectations and enabled us to win ‘Best Office Interior,
                            West  Midlands’ at the United Kingdom Property Awards. “
                        </p>
                    </header>
                </article>

            </div>
        </div>
    </section>
);

export default Solutions;