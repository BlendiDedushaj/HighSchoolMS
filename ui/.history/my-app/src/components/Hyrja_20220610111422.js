import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
        <p>Log In according to your role</p>
          <div className="buttons">
           
            <button><Link to="/login">LogIn like Professor</Link></button> 
            <button><Link to="/login">Login like Student</Link></button>
            <button><Link to="/login">Login like Parent</Link></button>
          </div>
    
      </div>
    </div>
  );
}

export default Hyrja;
