import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>Tools & Technologies</h2>

            <div className="container experience__container">
                <div className="experience__languages">
                    <h3>Programming Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Java</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Python</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>SQL</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>NoSQL</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__libraries">
                    <h3>Libraries & Frameworks</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Spring Boot</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>React.js</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Node.js</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Express.js</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>NumPy</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Pandas</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__vc">
                    <h3>Version Control</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <h4>Git (GitHub)</h4>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience