import React from 'react';
import { Link } from 'react-router-dom';
import cu from '../image/cu.png';

const Navbar_Admin = () => {
    return (
        <header>
            <div className="logo">
                <img src={cu} alt="logo" />
                <span> CU Placement Portal </span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/a_Company">Company</Link></li>
                    <li><Link to="/a_Announcements">Announcements</Link></li>
                    <li><Link to="/a_Applications">Applications</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar_Admin;