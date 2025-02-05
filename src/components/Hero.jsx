import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [companies, setCompanies] = useState(0);
    const [studentsPlaced, setStudentsPlaced] = useState(0);
    const navigate = useNavigate();

    const handleRegistrationRedirect = () => {
        navigate('/Registration');
    };

    useEffect(() => {
        // Animate stats
        const animateStats = () => {
            const targetValues = [900, 10000]
            const duration = 500;
            const interval = 50;

            const increment = Math.ceil(targetValues[0] / (duration / interval));
            let currentCompanies = 0;
            let currentStudents = 0;

            const timer = setInterval(() => {
                currentCompanies += increment;
                currentStudents += increment;

                if (currentCompanies >= targetValues[0]) currentCompanies = targetValues[0];
                if (currentStudents >= targetValues[1]) currentStudents = targetValues[1];

                setCompanies(currentCompanies);
                setStudentsPlaced(currentStudents);

                if (currentCompanies === targetValues[0] && currentStudents === targetValues[1]) {
                    clearInterval(timer);
                }
            }, interval);
        };

        animateStats();
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Your Gateway to Dream Careers</h1>
                <p>Connect with top companies and kickstart your career.</p>
                <div className="buttons">
                    <button className="register-btn" onClick={handleRegistrationRedirect}>Register as Student</button>
                    <button className="register-btn" onClick={handleRegistrationRedirect}>Register as Recruiter</button>
                </div>
                <div className="stats">
                    <span>{companies}+ Companies</span>
                    <span>{studentsPlaced}+ Students Placed</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;