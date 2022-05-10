import React from 'react';
import './experience.css';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiSpringboot,SiMicrosoftsqlserver, SiExpress, SiPython, SiMongodb, SiOracle, SiMysql } from 'react-icons/si';
import { FaReact, FaBootstrap, FaNodeJs, FaJava,  } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>Tools & Technologies</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-End</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillHtml5 className="experience__details-icons" />
                            <h4>HTML5</h4>
                        </article>
                        <article className="experience__details">
                            <DiCss3 className="experience__details-icons" />
                            <h4>CSS3</h4>
                        </article>
                        <article className="experience__details">
                            <FaReact className="experience__details-icons" />
                            <h4>React.js</h4>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="experience__details-icons" />
                            <h4>Bootstrap</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Back-End</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiSpringboot className="experience__details-icons" />
                            <h4>Spring Boot</h4>
                        </article>
                        <article className="experience__details">
                            <FaNodeJs className="experience__details-icons" />
                            <h4>Node.js</h4>
                        </article>
                        <article className="experience__details">
                            <SiExpress className="experience__details-icons" />
                            <h4>Express.js</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__languages">
                    <h3>Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaJava className="experience__details-icons" />
                            <h4>Java</h4>
                        </article>
                        <article className="experience__details">
                            <DiJavascript1 className="experience__details-icons" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <SiPython className="experience__details-icons" />
                            <h4>Python</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__databases">
                    <h3>Databases</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiMongodb className="experience__details-icons" />
                            <h4>MongoDB</h4>
                        </article>
                        <article className="experience__details">
                            <SiOracle className="experience__details-icons" />
                            <h4>Oracle</h4>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icons" />
                            <h4>MySQL</h4>
                        </article>
                        <article className="experience__details">
                            <SiMicrosoftsqlserver className="experience__details-icons" />
                            <h4>SQL Server</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__vc">
                    <h3>Version Control</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillGithub className="experience__details-icons" />
                            <h4>Git (GitHub)</h4>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience