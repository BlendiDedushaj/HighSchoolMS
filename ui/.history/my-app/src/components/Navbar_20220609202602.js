import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Navbar() {
  

  return (
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
          <Link to="/profesori">Profesori</Link>
        </nav>
      </li>
    </ul>
  </nav>

  );
}

export default Navbar;