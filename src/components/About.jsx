import React, { useEffect, useState } from 'react';
import './reach.css';

const About = () => {
    const [studentsPlaced, setStudentsPlaced] = useState(0);
    const [recruiters, setRecruiters] = useState(0);
    const [colleges, setColleges] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    useEffect(() => {
        // Function to animate the numbers
        const animateNumbers = (target, setState, duration) => {
            let start = 0;
            const increment = target / (duration / 16); // 16ms per frame for 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setState(target);
                    clearInterval(timer);
                } else {
                    setState(Math.ceil(start));
                }
            }, 16);
        };

        // Animate each number
        animateNumbers(10000, setStudentsPlaced, 2000); // 2 seconds
        animateNumbers(900, setRecruiters, 2000);
        animateNumbers(100, setColleges, 2000);
        animateNumbers(95, setSuccessRate, 2000);
    }, []);

    return (
        <div className="about-container">
            <h2 className="about-title">About Us</h2>
            <p className="about-intro">
                Welcome to the <span className="highlight">Campus Placement Portal</span>, your gateway to dream careers. We connect talented students with top recruiters, providing a seamless platform for job placements, internships, and skill development.
            </p>

            {/* Stats Section with Animated Numbers */}
            <div className="about-stats">
                <div className="stat">
                    <h3>{studentsPlaced}+</h3>
                    <p>Students Placed</p>
                </div>
                <div className="stat">
                    <h3>{recruiters}+</h3>
                    <p>Recruiters</p>
                </div>
                <div className="stat">
                    <h3>{colleges}+</h3>
                    <p>Colleges Partnered</p>
                </div>
                <div className="stat">
                    <h3>{successRate}%</h3>
                    <p>Placement Success Rate</p>
                </div>
            </div>

            {/* Mission and Vision Sections */}
            <div className="about-content">
                <div className="about-section mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to bridge the gap between students and recruiters, ensuring every student gets the opportunity to showcase their skills and land their dream job.
                    </p>
                </div>
                <div className="about-section vision">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where every student has access to the best career opportunities, regardless of their background or location.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;