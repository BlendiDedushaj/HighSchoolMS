import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
   <div>
        <div className="button-container">
        
          <input type="submit" />
          <Link to="/login" className="signu">Click to SignUp</Link>
          <Link to="/home" className="signu">Click to SignUp</Link>
          <Link to="/home" className="signu">Click to SignUp</Link>
        </div>
      
 
    </div>


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
       
          <div>
            <p>User is successfully logged in</p>
            <Link to="/home">Click to proceed</Link>
          </div>
    
      </div>
    </div>
  );
}

export default Hyrja;
