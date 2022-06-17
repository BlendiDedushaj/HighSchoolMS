import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Admin info
  const database = [
    {
      username: "a@admin.com",
      password: "Pass12345",
    },
    {
      username: "b@prof.com",
      password: "Pass12345",
    },
    {
      username: "c@prof.com",
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

    // Find user Admin info
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

  // JSX code for Admin form
  const renderForm = (
    <div>
    <img src="https://e7.pngegg.com/pngimages/265/858/png-clipart-computer-icons-teacher-professor-education-lecturer-teacher-angle-logo.png" alt="Girl in a jacket" width="400" height="250"></img>

    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="groupp">
        <input type="text" name="uname" required/>
          <label>Username </label>
          <span class="highlight"></span>
          <span class="bar"></span>
          {renderErrorMessage("uname")}
        </div>
        <div className="groupp">
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
        <div className="title">Admin Profesor</div>
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

export default Admin;
