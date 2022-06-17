import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "a@student.com",
      password: "Pass12345",
    },
    {
      username: "b@student.com",
      password: "Pass12345",
    },
    {
      username: "c@student.com",
      password: "Pass12345",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
    <img src="https://t3.ftcdn.net/jpg/03/77/13/94/360_F_377139493_Vta4MPTZUsQK6p5TXUkL3Xc6pqFYRxHm.jpg" alt="Girl in a jacket" width="400" height="250"></img>
    <div className="form">
   

      <form onSubmit={handleSubmit}>
        <div className="group">
        <input type="text" name="uname" required/>
          <label>Username </label>
          <span class="highlight"></span>
          <span class="bar"></span>
          {renderErrorMessage("uname")}
        </div>
        <div className="group">
        <input type="password" name="pass" required />
        <span class="highlight"></span>
      <span class="bar"></span>
          <label>Password </label>
          
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        
          <input type="submit" />
          <Link to="/signup" className="signu">Click to SignUp</Link>
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="applog">
      <div className="login-form">
        <div className="title">LogIn Student</div>
        {isSubmitted ? (
          <div>
          <p>You are successfully logged in</p>
            <Link to="/Lenda">Click to proceed</Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
