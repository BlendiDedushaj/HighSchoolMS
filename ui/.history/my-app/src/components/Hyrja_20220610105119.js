import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "a@studenti.com",
      password: "Pass12345",
    },
    {
      username: "p@profesori.com",
      password: "Pass12345",
    },
    {
      username: "p@prindi.com",
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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        
          <input type="submit" />
          <Link to="/home" className="signu">Click to SignUp</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
        {isSubmitted ? (
          <div>
            <p>User is successfully logged in</p>
            <Link to="/home">Click to proceed</Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
