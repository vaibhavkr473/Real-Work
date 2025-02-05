import React from 'react';
import './reach.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">Have questions or feedback? Reach out to us! We're here to help.</p>

            {/* Contact Information Section */}
            <div className="contact-info">
                <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Our Office</h3>
                    <p>123 Campus Drive, University Town, Country</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>+1 234 567 890</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@campusplacementportal.com</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                    Send Message <i className="fas fa-paper-plane"></i>
                </button>
            </form>

            {/* Social Media Links Section */}
            <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-threads"></i>
                    </a>
                </div>
            </div>

            {/* Map Integration Section */}
            <div className="map-container">
                <iframe
                    title="Campus Placement Portal Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.869318096226!2d77.2098643150814!3d28.57273998244083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1622547721234!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;