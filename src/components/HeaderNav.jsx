import React from 'react';
import { Link } from 'react-router-dom';

import cu from './images/cu.png';

const HeaderNav = () => {
    return (
        <header>
            <div className="logo">
                <img src={cu} alt="logo" />
                <span> CU Placement Portal </span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <Link to="#" className="dropbtn">
                            Reach Out to Us <i className="fas fa-caret-down"></i>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;
