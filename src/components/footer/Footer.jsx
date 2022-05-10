import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#header" className='footer__logo'>Pulkit Yadav</a>
            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Tools & Technologies</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/pulkit-yadav-15571211a/" target="_blank" rel="noreferrer"> <FaLinkedinIn /></a>
                <a href="https://github.com/pulkit1207" target="_blank" rel="noreferrer" > <FaGithub /> </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Pulkit Yadav. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer