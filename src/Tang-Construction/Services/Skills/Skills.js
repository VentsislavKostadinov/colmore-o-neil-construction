import React from 'react';

import './Skills.css'

const Skills = () => (

 <section id= 'skills'>
     <h2>SKILLS AND EXPERIENCE</h2>
     <div className= 'container-fluid'>
         <div className= 'row'>

             <article className= 'col-md-3 col-sm-6 col-xs-12'>
                <h2>Knowledge</h2>
                 <br/>
                 <p>
                     The CTC team bring together a wealth of knowledge and experience, enabling us to offer everything
                     from complete management of your property portfolio, or consultancy and advice to make sure
                     you achieve the greatest return on your investments.
                 </p>
             </article>

             <article className= 'col-md-3 col-sm-6 col-xs-12'>
                 <h2>Delivery</h2>
                 <br/>
                 <p>
                     CTC are leading the way in volume refurbishment, with a pipeline of projects to refurbish over 1,000 units a year for next five years.
                     Our team are experts in the refurbishment of existing buildings, and the construction of new.
                     We understand the challenges of working with multifaceted sites.
                 </p>
             </article>

             <article className= 'col-md-3 col-sm-6 col-xs-12'>
                 <h2>Experience</h2>
                 <br/>
                 <p>
                     With over 450 years of combined experience working in the construction industry, the team at CTC have the knowledge, skills and infrastructure to deliver projects of any scale.
                     We believe in working with our clients, not for our clients, and treat every project as if it were our own to achieve the greatest results.
                 </p>
             </article>

             <article className= 'col-md-3 col-sm-6 col-xs-12'>
                 <h2>Planning</h2>
                 <br/>
                 <p>
                     At CTC we understand the importance of planning in the management and execution of construction projects.  We work closely with our clients to advise and plan projects, focusing on driving down costs and the quality of delivery.
                     We are here to share our specialist knowledge and experiences to make sure your projects run to schedule and within budget.
                 </p>
             </article>

         </div>
     </div>
 </section>
);

export default Skills;