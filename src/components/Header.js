import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import logo
import logo from '../assets/shared/logo.svg';

const Header = () => {
    // link for current page should be underlined
    const [activeLink, setActiveLink] = useState('');
    // menu open
    const [menuOpen, setMenuOpen] = useState(false);

    // check current location and update state
    useEffect(() => {
        if (window.location.pathname === '/space-tour' || window.location.pathname === '') {
            setActiveLink('home');
        } else {
            setActiveLink(window.location.pathname.split('/')[2]);
        };
    }, []);

    return (
        <header>
            <div className='header-line' />
            <div className='header-flex'>
                <img className='logo' src={logo} alt='logo' />
                <ul className={`navbar ${menuOpen && 'show'}`}>
                    <li className={`nav-link ${activeLink === 'home' && 'current-page'}`}>
                        <Link to='/space-tour'>
                            <p><span>00</span> HOME</p>
                        </Link>
                    </li>
                    <li className={`nav-link ${activeLink === 'destination' && 'current-page'}`}>
                        <Link to='/space-tour/destination'>
                            <p><span>01</span> DESTINATION</p>
                        </Link>
                    </li>
                    <li className={`nav-link ${activeLink === 'crew' && 'current-page'}`}>
                        <p><span>02</span> CREW</p>
                    </li>
                    <li className={`nav-link ${activeLink === 'technology' && 'current-page'}`}>
                        <p><span>03</span> TECHNOLOGY</p>
                    </li>
                </ul>
                <div className={`menu-btn ${menuOpen && 'close'}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='menu-line' />
                    <div className='menu-line' />
                    <div className='menu-line' />
                </div>
            </div>
        </header>
    );
};

export default Header;