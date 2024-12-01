import React, { useState } from 'react';
import './pages.css'; 
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleJoinNowClick = () => {
        navigate('/login'); 
    };

    return (
      <div className="wrapper">
        <h1>Login</h1>
        <p>Welcome, please write your information</p>
        <form>
          <input type="text" placeholder="Enter username" />
          <input type="password" placeholder="Password" />
          <p className="recover">
            <a href="#">Recover Password</a>
          </p>
        </form>
        <button className="btn2" onClick={handleJoinNowClick}>
          Sign in
        </button>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <p className="or">----- or continue with -----</p>
        <div className="not-member">
          Not a member? <a href="/Signin">Register Now</a>
        </div>
      </div>
    );
};

export default Contact;
