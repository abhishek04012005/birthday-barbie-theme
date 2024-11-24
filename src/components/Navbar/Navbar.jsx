import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <>
            <div className='nav-bar'>
                <div className='nav-item-desktop'>
                    <ul>

                        <li><Link to="home-section" smooth={true} duration={800}>Home</Link></li>
                        <li><Link to="story-section" smooth={true} duration={800}>Story</Link></li>
                        <li><Link to="event-section" smooth={true} duration={800}>Wish</Link></li>
                        <li><Link to="rspv-section" smooth={true} duration={800}>RSPV</Link></li>
                        <li><Link to="contact-section" smooth={true} duration={800}>Contact Us</Link></li>

                    </ul>
                </div>

                <div className='hemburger-icon'>
                    <button className='mobile-menu-icon' onClick={handleToggle}>
                        ☰
                    </button>
                </div>
                
                <div className='nav-item-mobile'>
                    {isMobile && (
                        <ul className='mobile-menu'>
                            <li><Link to="home-section" smooth={true} duration={800} onClick={handleToggle}>Home</Link></li>
                            <li><Link to="story-section" smooth={true} duration={800} onClick={handleToggle}>Story</Link></li>
                            <li><Link to="event-section" smooth={true} duration={800} onClick={handleToggle}>Event</Link></li>
                            <li><Link to="rspv-section" smooth={true} duration={800} onClick={handleToggle}>RSPV</Link></li>
                            <li><Link to="contact-section" smooth={true} duration={800} onClick={handleToggle}>Contact Us</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar