import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>  
                        <li><Link to="/about">About</Link></li>  
                        <li><Link to="/contact">Contact</Link></li>  
                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>  
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li><Link to="#"><i className="fab fa-facebook"></i> Facebook</Link></li>
                        <li><Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                        <li><Link to="#"><i className="fab fa-linkedin"></i> LinkedIn</Link></li>
                        <li><Link to="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Campus Road, City, Country</p>
                    <p><i className="fas fa-phone"></i> +123 456 7890</p>
                    <p><i className="fas fa-envelope"></i> info@placementportal.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Placement Portal. All rights reserved.</p>
                <p>Developed with ❤️ by Razz</p>
            </div>
        </footer>
    );
};

export default Footer;
