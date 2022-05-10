import React from 'react';
import './about.css';
import ME from '../../assets/img/aboutme.jpeg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Pulkit" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am looking for software developer roles. I am a determined individual that strives to develop and learn new things every day.
          </p>
          <p>
            I enjoy solving problems and resolving bugs because that is what computer science is all about. In a nutshell, I am a diligent worker with a positive mentality, a team player, and an open mind when it comes to creativity.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About