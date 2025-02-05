import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import loginAnimation from '../Animations/login-animation.json';
import './Form.css';

const Login = () => {
    const [uid, setUid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in user:', uid, password);
    };

    const handleRegistrationRedirect = () => {
        navigate('/Registration'); // Navigate to the Registration page
    };

    // Lottie options for login animation
    const loginOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="container">
            <div className="form-container">
                {/* Left side - Login form */}
                <div className="form-left">
                    <h1>Login</h1>
                    <div className="login-form">
                        <label>UID:</label>
                        <input
                            type="text"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                        />

                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button onClick={handleLogin}>Login</button>
                        <span> If, You do not have an account? </span>
                        <button className="register-btn" onClick={handleRegistrationRedirect}>Register</button>
                    </div>
                </div>

                {/* Right side - Login animation */}
                <div className="form-right">
                    <Lottie options={loginOptions} height={400} width={400} />
                </div>
            </div>
        </div>
    );
};

export default Login;
