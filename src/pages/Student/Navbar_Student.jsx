import React from 'react';
import { Link } from 'react-router-dom';
import cu from '../image/cu.png';

const Navbar_Student = () => {
    return (
        <header>
            <div className="logo">
                <img src={cu} alt="logo" />
                <span> CU Placement Portal </span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/s_Announcements">Announcements</Link></li>
                    <li><Link to="/s_Applications">Applications</Link></li>
                    <li className="dropdown">
                        <Link to="#" className="dropbtn">
                            Services <i className="fas fa-caret-down"></i>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/internships">Internships</Link>
                            <Link to="/jobListings">Job Listings</Link>
                            <Link to="/resume">Resume Builder</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="/s_profile" className="dropbtn">
                            <i className="fas fa-user"></i>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/profile">Profile</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar_Student;