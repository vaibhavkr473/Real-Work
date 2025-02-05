import React, { useState, useEffect } from 'react';

import C1 from "./images/C1.jpeg";
import C4 from "./images/C4.jpg";
import C5 from "./images/C5.jpg";
import C6 from "./images/C6.jpg";
import C7 from "./images/C7.jpg";

import A1 from "./images/A1.png";
import P2 from "./images/P2.png";
import M3 from "./images/M3.png";
import O4 from "./images/O4.png";
import N5 from "./images/N5.png";


const Sliders = () => {
    const [recruiterSlideIndex, setRecruiterSlideIndex] = useState(0);
    const [campusSlideIndex, setCampusSlideIndex] = useState(0);
    const [alumniSlideIndex, setAlumniSlideIndex] = useState(0);

    // Function to move slides
    const moveSlide = (sliderType, n) => {
        if (sliderType === 'recruiters') {
            setRecruiterSlideIndex((prevIndex) => {
                const totalSlides = document.querySelectorAll('.recruiters .slide').length;
                const newIndex = prevIndex + n;
                if (newIndex >= totalSlides) return 0;
                if (newIndex < 0) return totalSlides - 1;
                return newIndex;
            });
        } else if (sliderType === 'campus') {
            setCampusSlideIndex((prevIndex) => {
                const totalSlides = document.querySelectorAll('.campus .slide').length;
                const newIndex = prevIndex + n;
                if (newIndex >= totalSlides) return 0;
                if (newIndex < 0) return totalSlides - 1;
                return newIndex;
            });
        } else if (sliderType === 'alumni') {
            setAlumniSlideIndex((prevIndex) => {
                const totalSlides = document.querySelectorAll('.alumni .slide').length;
                const newIndex = prevIndex + n;
                if (newIndex >= totalSlides) return 0;
                if (newIndex < 0) return totalSlides - 1;
                return newIndex;
            });
        }
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide('recruiters', 1);
            moveSlide('campus', 1);
            moveSlide('alumni', 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="sliders">
            {/* Top Recruiters Slider */}
            <div className="slider recruiters">
                <h2>Top Recruiters</h2>
                <div className="slider-container">
                    <button
                        className="slider-arrow left-arrow"
                        aria-label="Previous Slide"
                        onClick={() => moveSlide('recruiters', -1)}
                    >
                        &#10094;
                    </button>
                    <div
                        className="slider-content"
                        style={{ transform: `translateX(-${recruiterSlideIndex * 100}%)` }}
                    >
                        <div className="slide">
                            <i className="fab fa-google fa-4x" title="Google"></i>
                            <i className="fab fa-microsoft fa-4x" title="Microsoft"></i>
                            <i className="fab fa-amazon fa-4x" title="Amazon"></i>
                            <i className="fab fa-yahoo fa-4x" title="Yahoo"></i>
                        </div>
                        <div className="slide">
                            <i className="fab fa-facebook fa-4x" title="Facebook"></i>
                            <i className="fab fa-windows fa-4x" title="Windows"></i>
                            <i className="fab fa-bitcoin fa-4x" title="Bitcoin"></i>
                            <i className="fab fa-aws fa-4x" title="Aws"></i>
                        </div>
                        <div className="slide">
                            <i className="fab fa-apple fa-4x" title="Apple"></i>
                            <i className="fab fa-pinterest fa-4x" title="Pinterest"></i>
                            <i className="fab fa-safari fa-4x" title="Safari"></i>
                            <i className="fab fa-skype fa-4x" title='Skype'></i>
                        </div>
                    </div>
                    <button
                        className="slider-arrow right-arrow"
                        aria-label="Next Slide"
                        onClick={() => moveSlide('recruiters', 1)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            {/* Campus Life Slider */}
            <div className="slider campus">
                <h2>Campus Life</h2>
                <div className="slider-container">
                    <button
                        className="slider-arrow left-arrow"
                        aria-label="Previous Slide"
                        onClick={() => moveSlide('campus', -1)}
                    >
                        &#10094;
                    </button>
                    <div
                        className="slider-content"
                        style={{ transform: `translateX(-${campusSlideIndex * 100}%)` }}
                    >
                        <div className="slide">
                            <img src= {C1} alt="Campus 1" />
                            <img src= {C4} alt="Campus 2" />
                            <img src= {C5} alt="Campus 3" />
                        </div>
                        <div className="slide">
                            <img src= {C5} alt="Campus 3" />
                            <img src= {C6} alt="Campus 4" />
                            <img src= {C7} alt="Campus 5" />
                        </div>
                    </div>
                    <button
                        className="slider-arrow right-arrow"
                        aria-label="Next Slide"
                        onClick={() => moveSlide('campus', 1)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            {/* Alumni Slider */}
            <div className="slider alumni">
                <h2>Our Alumni</h2>
                <div className="slider-container">
                    <button
                        className="slider-arrow left-arrow"
                        aria-label="Previous Slide"
                        onClick={() => moveSlide('alumni', -1)}
                    >
                        &#10094;
                    </button>
                    <div
                        className="slider-content"
                        style={{ transform: `translateX(-${alumniSlideIndex * 100}%)` }}
                    >
                        <div className="slide">
                            <img src= {A1} alt="Alumni 1" />
                            <img src= {M3} alt="Alumni 2" />
                            <img src= {N5} alt="Alumni 3" />
                        </div>
                        <div className="slide">
                            <img src= {N5} alt="Alumni 3" />
                            <img src= {O4} alt="Alumni 4" />
                            <img src= {P2} alt="Alumni 5" />
                        </div>
                    </div>
                    <button
                        className="slider-arrow right-arrow"
                        aria-label="Next Slide"
                        onClick={() => moveSlide('alumni', 1)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sliders;