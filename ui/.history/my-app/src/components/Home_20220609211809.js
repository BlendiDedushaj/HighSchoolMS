import React, { Component } from "react";
import Navbar from "./Navbar";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="homeApp">
          <h3>This is Home Page</h3>
        </div>
      </div>
    );
  }
}
