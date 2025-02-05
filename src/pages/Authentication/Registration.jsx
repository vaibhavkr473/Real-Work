import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
// import registrationAnimation from '../Animations/registration-animation.json';
import register2 from '../Animations/register2.json';
import './Form.css';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [uid, setUid] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('student');
    const [department, setDepartment] = useState('');
    const [adminCode, setAdminCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Add your registration logic here
        console.log('Registering user:', firstName, lastName, uid, phone, email, userType, department, password);
    };

    const handleLoginRedirect = () => {
        navigate('/Login'); // Navigate to the Login page
    };

    // Lottie options for registration animation
    const registrationOptions = {
        loop: true,
        autoplay: true,
        animationData: register2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="container">
            <div className="form-container">
                {/* Left side - Registration form */}
                <div className="form-left">
                    <h1>Register here</h1>
                    <div className="registration-form">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <label>UID:</label>
                        <input
                            type="text"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                        />

                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>User Type:</label>
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>

                        {userType === 'student' && (
                            <>
                                <label>Department:</label>
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="Select">Select</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="B.tech">B.tech</option>
                                </select>
                            </>
                        )}

                        {userType === 'admin' && (
                            <>
                                <label>Admin Code:</label>
                                <input
                                    type="text"
                                    value={adminCode}
                                    onChange={(e) => setAdminCode(e.target.value)}
                                />
                            </>

                        )}

                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button onClick={handleRegister}>Register</button>
                        <span> If, You have already an account </span>
                        <button className="login-btn" onClick={handleLoginRedirect}>Login</button>
                    </div>
                </div>

                {/* Right side - Registration animation */}
                <div className="form-right">
                    <Lottie options={registrationOptions} height={400} width={400} />
                </div>
            </div>
        </div>
    );
};

export default Registration;
