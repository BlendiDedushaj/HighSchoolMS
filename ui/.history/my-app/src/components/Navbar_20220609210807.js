import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/login.css";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <div class="navbarApp">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/home">Home</Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/lenda">Lenda</Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
              <div class="nameLink">
                <Link to="/profesori">
                <span >Profesori</span>
                </Link>
                </div>
              </nav>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
