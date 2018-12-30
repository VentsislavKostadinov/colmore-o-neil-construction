
import React from 'react';

import './History.css';

const History = () => (

    <section id = 'history'>
        <h2>OUR MISSION</h2>
        <hr  id = 'historyHr'/>
        <p>CTC has over 450 years of combined experience working in the design, construction and development of multifaceted buildings.
            We bring a fresh new approach to the world of construction and look to work in close partnership
            with our clients to drive down costs whilst maintaining the highest levels of quality.</p>

          <div className = 'container-fluid'>
              <div className = 'row'>

                  <article className = 'col-md-3 col-xs-12'>
                      <div className = 'icon'>
                          <i className="fas fa-building" />
                          <header>
                          <h3>Passion</h3>
                          </header>
                          <p className = 'article-par'>We care about what we do and it shows</p>
                      </div>
                  </article>

                  <article className = 'col-md-3 col-xs-12'>
                      <div className = 'icon'>
                          <i className="fas fa-globe" />
                          <header>
                              <h3>Integrity</h3>
                          </header>
                          <p className = 'article-par'>You can trust us we have over 450 years of experience</p>
                      </div>
                  </article>

                  <article className = 'col-md-3 col-xs-12'>
                      <div className = 'icon'>
                          <i className="fas fa-eye" />
                          <header>
                              <h3>Attention To Detail</h3>
                          </header>
                          <p className = 'article-par'>We like the little bits, we are passionate about detail</p>
                      </div>
                  </article>

                  <article className = 'col-md-3 col-xs-12'>
                      <div className = 'icon'>
                          <i className="fas fa-check" />
                          <header>
                              <h3>Professionalism</h3>
                          </header>
                          <p className = 'article-par'>We are experts at what we do</p>
                      </div>
                  </article>


              </div>
          </div>
    </section>
);

export default History;
