import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <a target='_blank' href="https://github.com/Matteo-CB">Github</a>
            <a target='_blank' href="" className='tiret'>-</a>
            <a target='_blank' href="https://www.frontendmentor.io/profile/Matteo-CB">Front End Mentor</a>
            <a target='_blank' href="" className='tiret'>-</a>
            <NavLink to={'/legal'}>Legal Disclaimer</NavLink>
        </footer>
    );
};

export default Footer;