import React from 'react';
import './Education.css';

function Skills(){
    return(
<div className="service component__space" id="Services">

<div className="heading">
  <h1 className="heading">My Personal and Technical Skills</h1>
</div>

<div className="container">
  <div className="row">
    <div className="col__3">
      <div className="service__box pointer">
        <div className="service__meta">
          <h1 className="service__text">PERSONAL SKILLS</h1>
          <p className="service__text p__color">Good communication with fellow employees and teammates<br/>
                Can manage time effectively<br/>
                Working with deadlines and pressure<br/>
                Work effectively and orderly.</p>
        </div>
      </div>
    </div>

    <div className="col__3">
      <div className="service__box pointer">
        <div className="service__meta">
          <h1 className="service__text">PROGRAMMING LANGUAGES</h1>
          <p className="p service__text p__color">
                     HTML <br/>
                     CSS <br/>
                     PHP <br/>
                     JavaScript <br/>
                     Phyton
          </p>
        </div>
      </div>
    </div>

    <div className="col__3">
      <div className="service__box pointer">
        <div className="service__meta">
          <h1 className="service__text">DATABASE MANAGEMENT</h1>
          <p className="p service__text p__color">
                     MySQL <br/>
                     PHPMyAdmin <br/>        
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
    )
}


export default Skills;