import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
        <p>User is successfully logged in</p>
          <div className="buttons">
           
            <button><Link to="/home">LogIn like Professor</Link></button> 
            <button><Link to="/home">Login like Student</Link></button>
            <button><Link to="/home">Login like Parent</Link></button>
          </div>
    
      </div>
    </div>
  );
}

export default Hyrja;
