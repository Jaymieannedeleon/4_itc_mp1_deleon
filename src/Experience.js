import React from 'react';
import './Education.css';


function Experience(){
    return(
<div className="service component__space" id="Services">

<div className="heading">
  <h1 className="heading">My Working Experience</h1>
</div>

<div className="container">
  <div className="row">
    <div className="col__3">
      <div className="service__box pointer">
        <div className="service__meta">
          <h1 className="service__text">01. SOFTWARE ENGINEERING 1&2</h1>
          <h1 className="service__text">UNIVERSITY OF SANTO TOMAS<br/>
            SYSTEM DEVELOPER (2019 - 2020)</h1>
          <p className="p service__text p__color">
          Client: URBAN ORCHARD CAFE
          </p>
          <p className="p service__text p__color">
          Developed a web application ordering system usingPHP and MYSQLi.
          </p>
        </div>
      </div>
    </div>

    <div className="col__3">
      <div className="service__box pointer">
        <div className="service__meta">
          <h1 className="service__text">02. CAPSTONE PROJECT 1&2</h1>
          <h1 className="service__text">UNIVERSITY OF SANTO TOMAS<br/>
            SYSTEM DEVELOPER (2019 - 2020)</h1>
          <p className="p service__text p__color">
          Client: FARMER'S ASSOCIATION INDANG CAVITE
          </p>
          <p className="p service__text p__color">
          Developed a web application e-market usingTypeScript and Angular.
          </p>
        </div>
      </div>
    </div>

   
    
  </div>
</div>
</div>
    )
}


export default Experience;