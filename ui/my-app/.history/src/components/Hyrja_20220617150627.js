import React from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div class="header">
    <div class="inner-header flex">
    
<h1>Simple CSS Waves</h1>
</div>
<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>

</svg>
</div>

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
    </div>
    
    
  );
}

export default Hyrja;
