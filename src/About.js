import React from 'react';
import './About.css';
import aboutImg from './img/1.jpg'

function About(){
    return(
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
    )
}

export default About;