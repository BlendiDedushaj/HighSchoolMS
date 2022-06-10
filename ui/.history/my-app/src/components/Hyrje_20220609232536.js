import React, { Component } from "react";
import Navbar from "./Navbar";
import "../styles/home.css";

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
        </div>
      </form>
    </div>
export class Home extends Component {
  render() {
    return (
        
      <div>
      <h1>helo</h1>

        <Navbar />
        
        <div class="homeApp">
          <h3>Welcome</h3>
        </div>
      </div>
    );
  }
}
