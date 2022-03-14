import React from 'react';
import './Education.css';


function Education(){
    return(
  <div className="service component__space" id="Services">

  <div className="heading">
    <h1 className="heading">My Educational Background</h1>
  </div>

  <div className="container">
    <div className="row">
      <div className="col__3">
        <div className="service__box pointer">
          <div className="service__meta">
            <h1 className="service__text">2018 - Present</h1>
            <h1 className="service__text">UNIVERSITY OF SANTO TOMAS</h1>
            <p className="p service__text p__color">
            BACHELOR OF SCIENCE ININFORMATION TECHNOLOGY
            </p>
            <p className="p service__text p__color">
              DEAN'S LISTER<br/>
              2ND SEM 2019 - 2020 / 1ST SEM 2020 - 2021 / 1ST SEM 2021 - 2022
            </p>
          </div>
        </div>
      </div>

      <div className="col__3">
        <div className="service__box pointer">
          <div className="service__meta">
            <h1 className="service__text">2016 - 2018</h1>
            <h1 className="service__text">UNIVERSITY OF THE EAST - MANILA</h1>
            <p className="p service__text p__color">
            SCIENCE TECHNOLOGY ENGINEERING MATHEMATICS
            </p>
            <p className="p service__text p__color">
              Graduated with Honors
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}


export default Education;