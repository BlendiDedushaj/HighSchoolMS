import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hyrja.css";

function Hyrja() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
<div>
        <div className="button-container">
        
          <input type="submit" />
          <Link to="/home" className="signu">Click to SignUp</Link>
        </div>
      </form>
    </div>
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

export default Hyrja;
