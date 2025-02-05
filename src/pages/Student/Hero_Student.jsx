import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Hero = () => {
    const navigate = useNavigate();

    // Handle button clicks based on the task
    const handleButtonClick = (task) => {
        switch (task) {
            case 'jobs':
                navigate('/jobs');
                break;
            case 'internships':
                navigate('/internships');
                break;
            case 'resume':
                navigate('/resume-builder');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to the Campus Placement Portal</h1>
                    <p>Your gateway to career success. Find job opportunities, internships, and more.</p>
                    <div className="buttons">
                        <button className="jobs-btn" onClick={() => handleButtonClick('jobs')}>
                            Explore Jobs
                        </button>
                        <button className="internships-btn" onClick={() => handleButtonClick('internships')}>
                            Internships
                        </button>
                        <button className="resume-btn" onClick={() => handleButtonClick('resume')}>
                            Resume Builder
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Hero;