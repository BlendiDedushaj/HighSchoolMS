import React from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="titlee">LogIn</div>
       
          <div className="buttons">
           
            <button ><Link to="/login">LogIn like Professor</Link></button> 
            <button><Link to="/loginn">Login like Student</Link></button>
            <button><Link to="/loginprind">Login like Parent</Link></button>
          </div>
          <br></br>
          <p>Log In according to your role</p>
      </div>
    </div>
  );
}

export default Hyrja;
