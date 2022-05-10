import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/alumniportal.png';
import IMG2 from '../../assets/img/restinn.png';
import IMG3 from '../../assets/img/moviemanagement.png';
import IMG4 from '../../assets/img/studentcourses.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Alumni Portal Web App",
        github: "https://github.com/pulkit1207/CAP805-Alumni-Portal",
        demo: "https://afternoon-plains-02473.herokuapp.com/"
    },
    {
        id: 2,
        image: IMG2,
        title: "Rest-Inn Resort Web App",
        github: "https://github.com/pulkit1207/restInn-RestAPI",
        demo: "https://restinn-stays.netlify.app/"
    },
    {
        id: 3,
        image: IMG3,
        title: "Movie Binge Watching Management Web App",
        github: "https://github.com/pulkit1207/movie-management-app",
        demo: "https://movie-management.netlify.app/"
    },
    {
        id: 4,
        image: IMG4,
        title: "Student-Courses Management Web App",
        github: "https://github.com/pulkit1207/StudentsCoursesExpressApp",
        demo: "https://github.com/pulkit1207/StudentsCoursesExpressApp"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-img">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio