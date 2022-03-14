import React from "react";
import './Home.css';
import logo from "./img/logo.png"
import profile from "./img/profile.png"
import aboutImg from './img/1.jpg'

function Home(){
    return(
        <div className="home">
            <div className="home__bg">
                <div className="pic">
                    <img src={profile} alt="" />
                </div>
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                        <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
                        <h2 className="home__text pz__10">Hi, I’m Jaymie Anne</h2>
                        <h3 className="home__text sweet pz__10">Web Developer.</h3>
                        <h4 className="home__text pz__10">based in Philippines.</h4>
                        </div>
                    </div>
                </div>
            </div>
{/*------------------About-----------*/}
            <div className='about component_space'>
             <div className="container">
        <div className="row">
          <div className="col__2">
          <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                A person who is passionate about learning new things. 
                I am committed to excellence and giving my best effort. 
                I am a talented, ambitious and hardworking individual.
              </p>
              <p className="about__text p__color">
              Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
              A key strength is communication; building strong relationships with people in order to deliver the best results.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
{/*------------------Education-----------*/}
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
            SENIOR HIGH SCHOOL <br/>
          </p><br/>
          <p className="p service__text p__color">
          SCIENCE TECHNOLOGY ENGINEERING MATHEMATICS
          </p><br/>
          <p className="p service__text p__color">
            Graduated with Honors
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/*------------------Skills-----------*/}

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
          <h1 className="service__text">DATABASE MANAGEMENT</h1><br/><br/>
          <p className="p service__text p__color">
                     MySQL <br/><br/>
                     PHPMyAdmin <br/>     <br/>   
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

{/*------------------Experience-----------*/}
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

{/*------------------Contact-----------*/}
<div className="service component__space" id="Services">
<div className="heading">
  <h1 className="heading">My Contact Information</h1>
</div>

<div className="container">
  <div className="row">
            <div className="col__3">
                <div className="service__box pointer">
                    <div className="service__meta">
                    <h1 className="service__text p__color">
                    <div className='info-group'>
                    <img src = {require("./img/phone-icon.png")} />
                    <p>09566516639</p>
                    </div>

                    <div className='info-group'>
                    <img src = {require("./img/mail-icon.png")} />
                    <p>jaymieanne.deleon.iics@ust.edu.ph</p>
                </div>

                <div className='info-group'>
                    <img src = {require("./img/linked.png")} />
                    <p>https://www.linkedin.com/in/jaymie-anne-de-leon-93747b220/</p>
                </div>

                <div className='info-group'>
                    <img src = {require("./img/address.png")} />
                    <p>Greenwoods Executive Village Pasig City</p>
                </div>
                    
                    </h1>
                    </div>
                </div>
                </div>

                </div>
                </div>
    </div> 

</div>

    )
}

export default Home