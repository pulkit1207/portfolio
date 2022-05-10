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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ullam maxime nisi fugiat tempora! Unde laudantium fugiat repudiandae ea sequi deserunt consequuntur, nesciunt ducimus aliquam. Esse deserunt repellat corrupti dolore.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About