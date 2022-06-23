import React from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  
  return (
    <div className="app2">
    <div className="app">
    
    <img src="          https://media.istockphoto.com/vectors/check-mark-valid-seal-icon-white-squared-tick-with-shadow-in-blue-vector-id1167940992?b=1&k=20&m=1167940992&s=170667a&w=0&h=sBtOAwd1z_pljg003VNErmJrJpS-1uVzFecCsVwnxkw=
    " alt="Girl in a jacket" width="400" height="400" className="im"></img>
      </div>
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
      </div>
    </div>
    
  );
}

export default Hyrja;
