import React from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="titlee">LogIn</div>
       
          <div className="buttons">
            <button ><Link to="/admin">LogIn like Admin</Link></button>
            <button ><Link to="/login">LogIn like Professor</Link></button> 
            <button><Link to="/loginn">Login like Student</Link></button>
            <button><Link to="/loginprind">Login like Parent</Link></button>
          </div>
          <br></br>
          <p>Log In according to your role</p>
      </div>
      <img src="https://getlogo.net/wp-content/uploads/2020/11/parents-logo-vector.png" alt="Girl in a jacket" width="400" height="250"></img>

    </div>
    
  );
}

export default Hyrja;
