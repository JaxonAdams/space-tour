import React, { useState, useEffect } from 'react';

// import logo
import logo from '../assets/shared/logo.svg';

const Header = () => {
    // link for current page should be underlined
    const [activeLink, setActiveLink] = useState('');

    // check current location and update state
    useEffect(() => {
        if (window.location.pathname === '/') {
            setActiveLink('home');
        } else {
            setActiveLink(window.location.pathname.split('/'));
        };
    }, []);

    console.log(activeLink);

    return (
        <header>
            <div className='header-line' />
            <div className='header-flex'>
                <img className='logo' src={logo} alt='logo' />
                <ul className='navbar'>
                    <li className={`nav-link ${activeLink === 'home' && 'current-page'}`}>
                        <p><span>00</span> HOME</p>
                    </li>
                    <li className={`nav-link`}>
                        <p><span>01</span> DESTINATION</p>
                    </li>
                    <li className={`nav-link`}>
                        <p><span>02</span> CREW</p>
                    </li>
                    <li className={`nav-link`}>
                        <p><span>03</span> TECHNOLOGY</p>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;