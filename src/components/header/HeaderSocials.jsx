import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/pulkit-yadav-15571211a/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/pulkit1207" target="_blank" rel="noreferrer"><BsGithub /></a>

        </div>
    )
}

export default HeaderSocials