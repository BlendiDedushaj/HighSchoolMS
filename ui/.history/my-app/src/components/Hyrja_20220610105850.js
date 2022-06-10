import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
       
          <div>
            <p>User is successfully logged in</p>
            <button><Link to="/home">Click to proceed</Link></button> 
            
            <button><Link to="/home">Click to proceed</Link></button>
            <button><Link to="/home">Click to proceed</Link></button>
          </div>
    
      </div>
    </div>
  );
}

export default Hyrja;
