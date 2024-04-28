import React from 'react';
import "./Navbar.css";

import LinkedInIcon from "../assets/social.png";
import GitHubIcon from "../assets/github (2).png";

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='logo' >
                CRYPTONET.
            </div>
            <div className='social' >
                <a href='https://github.com/ankit-suman-07/Profile-Card' className='social-inner' >
                    Code
                </a>
                <a href='https://www.linkedin.com/in/ankit-suman-6925011b6/' className='social-inner' >
                    <img src={LinkedInIcon} alt='linkedIn' />
                </a>
                <a href='https://github.com/ankit-suman-07' className='social-inner' >
                    <img src={GitHubIcon} alt='github' />
                </a>
            </div>
        </div>
    )
}

export default Navbar