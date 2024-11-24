import React from 'react';
import { WhatsApp, Facebook, YouTube, Instagram } from '@mui/icons-material'; // Correct imports
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-item">
                    <div className="footer-link">
                        <ul>
                            <li> <a href="https://wa.me/919263767441?text=Hello%2C%20how%20are%20you%3F" target='blank'> <WhatsApp fontSize="large" /> </a> </li>   {/* Optional: fontSize can be adjusted */}
                            <li>  <a href="https://www.facebook.com" target='blank'>  <Facebook fontSize="large" /> </a></li>
                            <li> <a href="https://www.youtube.com/@theabhishekchoudhary0401" target='blank'>  <YouTube fontSize="large" /></a> </li>
                            <li> <a href="https://www.instagram.com/theabhishekchoudhary0401/" target='blank'> <Instagram fontSize="large" /></a></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p> Copyright &copy; {new Date().getFullYear()} <a href="https://www.abhishekchoudhary.co.in" target='blank'>www.AbhishekChoudhary.co.in</a></p>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
