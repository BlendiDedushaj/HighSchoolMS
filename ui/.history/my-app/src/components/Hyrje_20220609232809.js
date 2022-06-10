import React, { Component } from "react";
import Navbar from "./Navbar";
import "../styles/home.css";


export class Hyrje extends Component {
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
