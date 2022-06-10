import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/login.css";

function Navbar() {
  

  return (
    <div className="app">
      <div className="Navbar-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Navbar;